import { useContext } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { ProductsContext } from "../../contexts/ProductsContext";
import { StyledCartHeader } from "./style";

const CartHeader = () => {
	const { cart, setShowModalCart } = useContext(ProductsContext);

	return (
		<StyledCartHeader onClick={() => setShowModalCart(true)}>
			<FaShoppingCart className="icon" size={"1.2em"} />
			<div>
				<span>{cart.length > 0 ? cart.length : "0"}</span>
			</div>
		</StyledCartHeader>
	);
};

export default CartHeader;
