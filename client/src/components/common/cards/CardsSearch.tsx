import { LucideSearch, LucideX } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
	InputGroup,
	InputGroupAddon,
	InputGroupInput,
} from "@/components/ui/input-group";

interface CardsSearchProps {
	searchString: string;
	setSearchString: (value: string) => void;
}

function CardsSearch(props: CardsSearchProps) {
	function handleSearchString(e: React.ChangeEvent<HTMLInputElement>) {
		props.setSearchString(e.currentTarget.value);
	}
	function cleanSearchString() {
		props.setSearchString("");
	}

	return (
		<>
			<InputGroup className="max-w-sm border-beige bg-chocolate-dark rounded-sm">
				<InputGroupInput
					className="text-beige"
					placeholder="Поиск..."
					value={props.searchString}
					onChange={handleSearchString}
				/>
				<InputGroupAddon>
					<LucideSearch className="text-beige"/>
				</InputGroupAddon>
				{props.searchString && (
					<InputGroupAddon align="inline-end">
						<Button variant={"link"} onClick={cleanSearchString}>
							<LucideX className="text-beige"/>
						</Button>
					</InputGroupAddon>
				)}
			</InputGroup>
		</>
	);
}

export { CardsSearch };
