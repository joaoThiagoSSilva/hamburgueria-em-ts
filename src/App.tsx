import React from "react";
import { Flip, ToastContainer } from "react-toastify";
import { UserProvider } from "./contexts/UserContext";
import RoutesMain from "./routes";
import { GlobalStyle } from "./styles/global";
import "react-toastify/dist/ReactToastify.css";
import { ProductsProvider } from "./contexts/ProductsContext";


const App = () => {
	return (
		<>
			<GlobalStyle />
			<ToastContainer
				position="top-center"
				autoClose={2500}
				transition={Flip}
				theme="colored"
			/>

			<UserProvider>
				<ProductsProvider>
					<RoutesMain />
				</ProductsProvider>
			</UserProvider>
		</>
	);
};

export default App;
