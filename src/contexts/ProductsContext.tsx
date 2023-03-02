import React, { createContext, useEffect, useState } from "react";
import api from "../services/api";

export interface iProduct {
	id: number;
	name: string;
	category: string;
	price: number;
	img: string;
}

interface iUserContextProps {
	products: Array<iProduct>;
	search: string;
	setSearch: React.Dispatch<React.SetStateAction<string>>;
	cart: Array<iProduct>;
	setCart: React.Dispatch<React.SetStateAction<never[]>>;
	showModalCart: boolean;
	setShowModalCart: React.Dispatch<React.SetStateAction<boolean>>;
}

interface iProductsProviderProps {
	children: React.ReactNode;
}

export const ProductsContext = createContext({} as iUserContextProps);

export const ProductsProvider = ({ children }: iProductsProviderProps) => {
	const [products, setProducts] = useState([]);
	const [search, setSearch] = useState("");
	const [cart, setCart] = useState([]);
	const [showModalCart, setShowModalCart] = useState(false);

	useEffect(() => {
		async function getAllProducts() {
			try {
				const token = localStorage.getItem("@BurguerKenzie:token");
				const request = await api.get("/products", {
					headers: {
						Authorization: `Bearer ${token}`,
					},
				});

				setProducts(request.data);
			} catch (error: any) {
				console.error(error);
			}
		}

		getAllProducts();
	}, []);

	return (
		<ProductsContext.Provider
			value={{
				products,
				search,
				setSearch,
				cart,
				setCart,
				showModalCart,
				setShowModalCart,
			}}
		>
			{children}
		</ProductsContext.Provider>
	);
};
