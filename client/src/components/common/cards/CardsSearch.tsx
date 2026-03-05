import { LucideSearch, LucideX } from "lucide-react"

import {InputGroup, InputGroupAddon, InputGroupInput} from "@/components/ui/input-group"
import { Button } from "@/components/ui/button"


type CardsSearchProps = {
    searchString: string
    setSearchString: (value: string) => void
}


function CardsSearch(props: CardsSearchProps) {
    function handleSearchString(e: React.ChangeEvent<HTMLInputElement>) {
        props.setSearchString(e.currentTarget.value)
    }
    function cleanSearchString() {
        props.setSearchString('')
    }

    return (
        <InputGroup className="max-w-xs">
            <InputGroupInput placeholder="Поиск..." value={props.searchString} onChange={handleSearchString}/>
            <InputGroupAddon>
                <LucideSearch />
            </InputGroupAddon>
            {props.searchString && 
                <InputGroupAddon align="inline-end">
                    <Button variant={"link"} onClick={cleanSearchString}>
                        <LucideX/>
                    </Button>
                </InputGroupAddon>
            }
        </InputGroup>
    )
}

export {
    CardsSearch
}
