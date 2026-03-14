import base64
from hashlib import sha256

from fastapi import APIRouter, Depends, Request, status, Query
from fastapi.responses import RedirectResponse
from fastapi.exceptions import HTTPException

from secrets import compare_digest, token_urlsafe

from src.auth.dependencies import VkOAuthService, get_vk_oauth_service

auth_router = APIRouter(prefix="/vk")


@auth_router.get("/login")
async def vk_login(
    request: Request, oauth_service: VkOAuthService = Depends(get_vk_oauth_service)
):
    state = token_urlsafe(32)
    code_verifier = token_urlsafe(64)
    code_challenge = sha256(code_verifier.encode()).digest()
    code_challenge = base64.urlsafe_b64encode(code_challenge).decode().rstrip("=")

    request.session["state"] = state
    request.session["code_verifier"] = code_verifier

    authorize_redirect_url = await oauth_service.get_authorize_redirect_url(
        state=state, code_challenge=code_challenge, code_challenge_method="S256"
    )
    return RedirectResponse(
        url=authorize_redirect_url, status_code=status.HTTP_302_FOUND
    )


@auth_router.get("/callback")
async def vk_callback(
    request: Request,
    code: str = Query(),
    state: str = Query(),
    device_id: str = Query(),
    oauth_service: VkOAuthService = Depends(get_vk_oauth_service),
):
    state_verifier = request.session.get("state", "")
    if not compare_digest(state, state_verifier):
        raise HTTPException(status_code=400, detail="CSRF")
    request.session.pop("state", None)

    code_verifier = request.session.pop("code_verifier", None)

    new_tokens = await oauth_service.authorize_access_token(
        code=code,
        code_verifier=code_verifier,
        device_id=device_id,
        state=state_verifier,
    )

    return {"tokens": new_tokens}
