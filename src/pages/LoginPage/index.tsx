import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../contexts/UserContext";
import { useNavigate } from "react-router-dom";
import { StyledFormLogin, StyledMainLogin } from "./style";
import { yupResolver } from "@hookform/resolvers/yup";
import InitialBox from "../../components/InitialBox";
import { useForm } from "react-hook-form";
import { loginSchema } from "./schema";
import { TextField } from "@mui/material";

export interface iLoginFormData {
	email: string;
	password: string;
}

const LoginPage = () => {
	const { login } = useContext(UserContext);

	const navigate = useNavigate();
	const [loading, setLoading] = useState(true);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<iLoginFormData>({
		resolver: yupResolver(loginSchema),
	});

	useEffect(() => {
		const token = localStorage.getItem("@BurguerKenzie:token");

		if (token) {
			navigate("/home", { replace: true });
		}
		setLoading(false);
	}, [navigate]);

	const navToRegister = () => {
		navigate("/register");
	};

	const emailLocalStorage = localStorage.getItem("@BurguerKenzie:userMail");

	if (loading) {
		return null;
	}

	return (
		<StyledMainLogin>
			<div>
				<StyledFormLogin onSubmit={handleSubmit(login)} noValidate>
					<header>
						<h2>Login</h2>
					</header>
					<section>
						<TextField
							type="email"
							label="Email"
							defaultValue={
								emailLocalStorage ? emailLocalStorage : ""
							}
							color="success"
							fullWidth
							autoFocus={true}
							error={!!errors.email}
							helperText={
								errors.email ? errors.email.message : " "
							}
							{...register("email")}
						/>
					</section>
					<section>
						<TextField
							type="password"
							label="Senha"
							defaultValue=""
							color="success"
							fullWidth
							error={!!errors.password}
							helperText={
								errors.password ? errors.password.message : " "
							}
							{...register("password")}
						/>
					</section>
					<button
						className="buttonSubmit"
						type="submit"
						disabled={!!(errors.email || errors.password)}
					>
						Logar
					</button>
					<p>
						Crie sua conta para saborear muitas delícias e matar sua
						fome!
					</p>
					<button
						onClick={navToRegister}
						className="buttonRegister"
						type="button"
					>
						Cadastrar
					</button>
				</StyledFormLogin>
			</div>
			<InitialBox />
		</StyledMainLogin>
	);
};

export default LoginPage;
