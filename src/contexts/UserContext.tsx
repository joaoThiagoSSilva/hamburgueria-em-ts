import React, { createContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { iLoginFormData } from "../pages/LoginPage";
import api from "../services/api";

export interface iUser {
	id: string;
	name: string;
	email: string;
}

export interface iSetUser {
	accessToken: string | null;
	user: iUser | null;
}

interface iUserContextProps {
	login: (data: iLoginFormData) => void;
	user: iSetUser | any;
	setUser: React.Dispatch<React.SetStateAction<{}>>;
	loading: boolean;
}

interface iUserProviderProps {
	children: React.ReactNode;
}

export const UserContext = createContext({} as iUserContextProps);

export const UserProvider = ({ children }: iUserProviderProps) => {
	const [user, setUser] = useState({});
	const [loading, setLoading] = useState(true);
	const navigate = useNavigate();
	const location = useLocation();

	async function login(data: iLoginFormData) {
		const tLoading = toast.loading("Entrando...");

		try {
			const response = await api.post("/login", data);

			const { accessToken: token, user: userResponse } = response.data;

			setUser(response.data);

			localStorage.setItem("@BurguerKenzie:token", token);
			localStorage.setItem("@BurguerKenzie:userMail", userResponse.email);
			localStorage.setItem("@BurguerKenzie:user", response.data);

			api.defaults.headers.common.authorization = `Bearer ${token}`;

			toast.update(tLoading, {
				render: "Login efetuado com sucesso!",
				type: "success",
				isLoading: false,
			});

			setTimeout(() => {
				toast.dismiss(tLoading);
				const toNavigate = location.state?.from?.pathname || "/home";
				navigate(toNavigate, { replace: true });
			}, 2800);
		} catch (error: any) {
			localStorage.removeItem("@BurguerKenzie:token");
			localStorage.removeItem("@BurguerKenzie:user");

			toast.update(tLoading, {
				render: "Login inválido, tente novamente",
				type: "error",
				isLoading: false,
			});

			setTimeout(() => {
				toast.dismiss(tLoading);
			}, 2800);
		}
	}

	useEffect(() => {
		function loadUser() {
			const token = localStorage.getItem("@BurguerKenzie:token");

			if (!token) {
				setLoading(false);
				navigate("/");
				return;
			} else if (token) {
				setLoading(false);
			}
		}

		loadUser();
	}, []);

	return (
		<UserContext.Provider value={{ login, user, setUser, loading }}>
			{children}
		</UserContext.Provider>
	);
};
