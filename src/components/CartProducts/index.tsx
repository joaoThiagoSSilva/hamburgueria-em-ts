import { useContext } from "react";
import { toast } from "react-toastify";
import { iProduct, ProductsContext } from "../../contexts/ProductsContext";
import { StyledLi, StyledUl } from "./style";

const CartProducts = () => {
	const { cart, setCart } = useContext(ProductsContext);

	const removeFromCart = (uuid: number) => {
		const filtered: any = cart.filter((element) => element.id !== uuid);
		setCart(filtered);
		toast.success("Produto removido do carrinho");
	};

	return (
		<StyledUl>
			{cart.map((elem: iProduct) => (
				<StyledLi key={elem.id}>
					<div className="divImgItem">
						<div className="divImg">
							<img src={elem.img} alt={elem.name} />
						</div>
						<div className="divItem">
							<h3>{elem.name}</h3>
							<h5>{elem.category}</h5>
						</div>
					</div>
					<button onClick={() => removeFromCart(elem.id)}>
						Remover
					</button>
				</StyledLi>
			))}
		</StyledUl>
	);
};

export default CartProducts;
