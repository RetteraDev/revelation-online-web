from typing import Any

from src.database.postgresql import AsyncPostgresClient


class AccountsOAuthRepository:
    def __init__(self, db: AsyncPostgresClient):
        self.db = db

    async def get_by_account_and_provider(
        self, account_id: int, provider_name: str
    ) -> dict[str, Any] | None:
        return None
