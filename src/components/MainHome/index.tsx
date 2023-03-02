import { useContext } from "react";
import { ProductsContext } from "../../contexts/ProductsContext";
import ModalCart from "../ModalCart";
import Product from "../Product";
import {
	StyledMainHome,
	StyledSectionProducts,
	StyledSectionSearch,
	StyledUl,
} from "./style";

const MainHome = () => {
	const { products, showModalCart } = useContext(ProductsContext);
	const { search, setSearch } = useContext(ProductsContext);
	const { cart, setCart } = useContext(ProductsContext);

	return (
		<StyledMainHome>
			{showModalCart && <ModalCart />}
			<StyledSectionProducts>
				{search && (
					<StyledSectionSearch>
						<h3>
							Resultados para: <span>{search}</span>
						</h3>
						<button onClick={() => setSearch("")}>
							Limpar busca
						</button>
					</StyledSectionSearch>
				)}
				<StyledUl>
					{products
						?.filter((element) => {
							return (
								element.name
									.toLowerCase()
									.includes(search.toLowerCase()) ||
								element.category
									.toLowerCase()
									.includes(search.toLowerCase())
							);
						})
						.map((element) => {
							return (
								<Product
									key={element.id}
									thisProduct={element}
									cart={cart}
									setCart={setCart}
								/>
							);
						})}
				</StyledUl>
			</StyledSectionProducts>
		</StyledMainHome>
	);
};

export default MainHome;
