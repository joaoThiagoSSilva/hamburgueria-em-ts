import { Route, Routes } from "react-router-dom";
import { ProtectedRoutes } from "../components/ProtectedRoutes";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import NotFoundPage from "../pages/NotFoundPage";
import RegisterPage from "../pages/RegisterPage";

const RoutesMain = () => {
	return (
		<Routes>
			<Route path="/" element={<LoginPage />} />
			<Route path="/register" element={<RegisterPage />} />
			<Route path="*" element={<NotFoundPage />} />

			<Route element={<ProtectedRoutes />}>
				<Route path="/home" element={<HomePage />} />
			</Route>
		</Routes>
	);
};

export default RoutesMain;
