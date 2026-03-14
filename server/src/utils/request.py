import httpx


async def make_request(
    method: str,
    url: str,
    *,
    headers: dict = None,
    proxy: str = None,
    json: dict = None,
    data: dict = None,
) -> dict:
    async with httpx.AsyncClient(proxy=proxy) as client:
        response = await client.request(
            method=method, url=url, headers=headers, json=json, data=data
        )
        response.raise_for_status()
    return response.json()
