from typing import Any
import urllib

from src.utils.configuration import (
    OAUTH_VK_CLIENT_ID,
    OAUTH_VK_CLIENT_SECRET,
    OAUTH_VK_CLIENT_REDIRECT_URI,
)
from src.utils.request import make_request


class VkOAuthService:
    def __init__(self, repository):
        self.repository = repository
        self.provider_name = "vk"
        self.client_id = OAUTH_VK_CLIENT_ID
        self.client_secret = OAUTH_VK_CLIENT_SECRET
        self.redirect_uri = OAUTH_VK_CLIENT_REDIRECT_URI
        self.scope = " ".join(
            [
                "vkid.personal_info",
                "email",
            ]
        )

    async def get_authorize_redirect_url(
        self, state: str, code_challenge: str, code_challenge_method: str
    ) -> str:
        # http://localhost/api/auth/vk/login

        base_url = "https://id.vk.ru/authorize"
        query_params = {
            "response_type": "code",
            "client_id": self.client_id,
            "redirect_uri": self.redirect_uri,
            "code_challenge": code_challenge,
            "code_challenge_method": code_challenge_method,
            "scope": self.scope,
            "access_type": "offline",
            "prompt": "consent",
            "state": state,
        }
        query_string = urllib.parse.urlencode(
            query_params, quote_via=urllib.parse.quote
        )
        print(f"{base_url}?{query_string}")
        return f"{base_url}?{query_string}"

    async def authorize_access_token(
        self, code: str, code_verifier: str, device_id: str, state: str
    ) -> dict[str, Any]:
        base_url = "https://id.vk.ru/oauth2/auth"

        data = {
            "grant_type": "authorization_code",
            "code_verifier": code_verifier,
            "redirect_uri": self.redirect_uri,
            "code": code,
            "client_id": self.client_id,
            "device_id": device_id,
            "state": state,
        }

        return await make_request("POST", base_url, data=data)

    def refresh_token(self) -> None: ...
