import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

type CardsListItem = {
    key: string,
    name: string
}

type CardsListProps = {
    items: CardsListItem[]
    searchString?: string
}


function CardsList({items, searchString = ''}: CardsListProps) {
    const filteredItems = searchString
    ? items.filter((item) => item.name.toLowerCase().includes(searchString.toLowerCase()))
    : items

    return (
        <div className="flex flex-row flex-wrap gap-4">
            {filteredItems.map((item) => (
                <Card key={item.key} className="min-w-full sm:min-w-[calc(50%-0.5rem)]">
                    <CardHeader>
                        <CardTitle>{item.name}</CardTitle>
                        <CardDescription>Card Description</CardDescription>
                        <CardAction>Card Action</CardAction>
                    </CardHeader>
                    <CardContent>
                        <p>Card Content</p>
                    </CardContent>
                    <CardFooter>
                        <p>Card Footer</p>
                    </CardFooter>
                </Card>
            ))}
        </div>
    )
}

export {
    CardsList
}
