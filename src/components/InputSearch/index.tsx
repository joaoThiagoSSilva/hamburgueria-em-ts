import Button from "../Button";
import { StyledInput, StyledDiv } from "./style";
import { FaSearch } from "react-icons/fa";
import { useContext } from "react";
import { ProductsContext } from "../../contexts/ProductsContext";

const InputSearch = () => {
	const { setSearch } = useContext(ProductsContext);

	const searching = (event: any) => {
		setSearch(event.target.value);
	};

	return (
		<StyledDiv>
			<StyledInput
				onChange={searching}
				type="text"
				placeholder="Digitar pesquisa..."
			/>
			<Button type="submit">
				<FaSearch />
			</Button>
		</StyledDiv>
	);
};

export default InputSearch;
