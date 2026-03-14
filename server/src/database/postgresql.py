from typing import Any

from asyncpg import create_pool

from src.utils.configuration import POSTGRES_DSN
from src.utils.database import pyformat2psql


class AsyncPostgresClient:
    def __init__(self, dsn: str = POSTGRES_DSN):
        self.pool = create_pool(
            dsn,
            min_size=10,
            max_size=25,
            max_queries=50000,
            command_timeout=60,
            max_inactive_connection_lifetime=300,
            ssl="require",
        )

    async def get(
        self, query: str, params: dict[str, Any] | None = None
    ) -> dict[str, Any]:
        async with self.pool.acquire() as conn:
            await conn.fetchrow(*pyformat2psql(query, params))

    async def get_all(
        self, query: str, params: dict[str, Any] | None = None
    ) -> list[dict[str, Any]]:
        async with self.pool.acquire() as conn:
            await conn.fetch(*pyformat2psql(query, params))

    async def get_scalar(self, query: str, params: dict[str, Any] | None = None) -> Any:
        async with self.pool.acquire() as conn:
            await conn.fetchval(*pyformat2psql(query, params))


ASYNC_POSTGRES_CLIENT = AsyncPostgresClient(dsn=POSTGRES_DSN)


async def get_async_postgres_client():
    return ASYNC_POSTGRES_CLIENT
