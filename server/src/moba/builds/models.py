from datetime import datetime
from uuid import UUID, uuid4

from pydantic import BaseModel, Field

from src.moba.builds.consts.heroes import MobaHeroId
from src.moba.builds.consts.items import MobaItemId
from src.utils.date import get_today


def get_new_key() -> UUID:
    return uuid4()


class MobaBuild(BaseModel):
    id: int = Field(..., description="Уникальный идентификатор билда")
    public_id: UUID = Field(
        default_factory=get_new_key,
        description="Публичный уникальный идентификатор билда",
    )
    creator_id: int = Field(..., description="Идентификатор создателя билда")
    hero_id: MobaHeroId = Field(..., description="Идентификатор героя")
    items: list[MobaItemId] = Field(
        default_factory=list, description="Список идентификаторов предметов"
    )
    created_at: datetime = Field(
        default_factory=get_today, description="Дата/время создания билда"
    )
    updated_at: datetime = Field(
        default_factory=get_today, description="Дата/время изменения билда"
    )
