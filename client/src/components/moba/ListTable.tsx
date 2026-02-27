import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

type ListTableItem = {
    key: number,
    name: string
}

type ListTableProps = {
    items: ListTableItem[]
}


function ListTable({items}: ListTableProps) {
    return (
        <div className="flex flex-row flex-wrap gap-4">
            {items.map((item) => (
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
    type ListTableProps,
    ListTable
}