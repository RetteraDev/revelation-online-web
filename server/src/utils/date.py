from datetime import datetime, UTC


def get_today() -> datetime:
    return datetime.now(tz=UTC)
