from fastapi import Depends

from src.database.postgresql import AsyncPostgresClient, get_async_postgres_client
from src.auth.repository import AccountsOAuthRepository
from src.auth.service import VkOAuthService


def get_vk_oauth_repository(
    db: AsyncPostgresClient = Depends(get_async_postgres_client),
) -> AccountsOAuthRepository:
    return AccountsOAuthRepository(db=db)


def get_vk_oauth_service(
    repository: AccountsOAuthRepository = Depends(get_vk_oauth_repository),
) -> VkOAuthService:
    return VkOAuthService(repository=repository)
