import { useContext } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { toast } from "react-toastify";
import { ProductsContext } from "../../contexts/ProductsContext";
import CartProducts from "../CartProducts";
import { StyledDivCart, StyledDivEmpty, StyledModalCart } from "./style";

const ModalCart = () => {
	const { cart, setCart, setShowModalCart } = useContext(ProductsContext);

	const totalValue = cart.reduce(
		(accumulator, currentValue) => accumulator + currentValue.price,
		0
	);

	return (
		<StyledModalCart>
			<main>
				<header>
					<h3>Carrinho de compras</h3>
					<button onClick={() => setShowModalCart(false)}>
						<AiOutlineClose />
					</button>
				</header>
				<div>
					{cart.length > 0 ? (
						<StyledDivCart>
							<section>
								<CartProducts />
							</section>
							<div>
								<div>
									<h3>Total</h3>
									<span>
										{totalValue.toLocaleString("pt-br", {
											style: "currency",
											currency: "BRL",
										})}
									</span>
								</div>
								<button
									onClick={() => {
										setCart([]);
										setShowModalCart(false);
										toast.success(
											"Todos os produtos foram removidos do carrinho de compras"
										);
									}}
								>
									Remover todos os itens
								</button>
							</div>
						</StyledDivCart>
					) : (
						<StyledDivEmpty>
							<h2>Sua Sacola está vazia</h2>
							<h5>Adicione itens</h5>
						</StyledDivEmpty>
					)}
				</div>
			</main>
		</StyledModalCart>
	);
};

export default ModalCart;
