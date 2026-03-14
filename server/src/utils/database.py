import collections
import itertools
from typing import Any


def pyformat2psql(query: str, named_args: dict[str, Any]) -> tuple[str, list[Any]]:
    positional_generator = itertools.count(1)
    positional_map = collections.defaultdict(
        lambda: "${}".format(next(positional_generator))
    )
    formatted_query = query % positional_map
    positional_items = sorted(
        positional_map.items(),
        key=lambda item: int(item[1].replace("$", "")),
    )
    positional_args = [named_args[named_arg] for named_arg, _ in positional_items]
    return formatted_query, positional_args
