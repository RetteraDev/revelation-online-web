from fastapi import APIRouter
from src.moba.builds.models import MobaBuild

moba_builds_router = APIRouter(prefix="/builds")


@moba_builds_router.get("/")
async def get_list_moba_builds():
    return [MobaBuild(id=1, creator_id=1, hero_id="intu")]
