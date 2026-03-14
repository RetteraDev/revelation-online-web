from starlette.middleware.sessions import SessionMiddleware
from fastapi import FastAPI

from src.utils.configuration import SESSION_MIDDLEWARE
from src.auth.api import auth_router
from src.moba.builds.api import moba_builds_router


app = FastAPI()

app.add_middleware(SessionMiddleware, secret_key=SESSION_MIDDLEWARE)

app.include_router(auth_router, prefix="/auth")
app.include_router(moba_builds_router, prefix="/moba")


@app.get("/health-check")
def read_root():
    return {"status": "ok"}
