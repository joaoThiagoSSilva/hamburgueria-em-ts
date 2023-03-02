import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { StyledFormRegister, StyledMainRegister } from "./style";
import TextField from "@mui/material/TextField";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "./schema";
import api from "../../services/api";
import InitialBox from "../../components/InitialBox";
import { toast } from "react-toastify";

interface iRegisterFormData {
	name: string;
	email: string;
	password: string;
	passwordCheck?: string;
}

const RegisterPage = () => {
	const navigate = useNavigate();
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const token = localStorage.getItem("@BurguerKenzie:token");

		if (token) {
			navigate("/home", { replace: true });
		}
		setLoading(false);
	}, [navigate]);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<iRegisterFormData>({
		resolver: yupResolver(registerSchema),
	});

	const onSubmitFunction: SubmitHandler<iRegisterFormData> = ({
		name,
		email,
		password,
	}: iRegisterFormData) => {
		const user = { name, email, password };
		registerPost(user);
	};

	async function registerPost(user: iRegisterFormData) {
		const tLoading = toast.loading("Cadastrando usuário...");

		try {
			const request = await api.post("/users", user);

			const response = await request.data;

			localStorage.setItem(
				"@BurguerKenzie:userMail",
				response.user.email
			);

			toast.update(tLoading, {
				render: "Usuário cadastrado!",
				type: "success",
				isLoading: false,
			});

			setTimeout(() => {
				toast.dismiss(tLoading);
				navigate("/");
			}, 2800);
		} catch (error: any) {
			toast.update(tLoading, {
				render: error.response.data,
				type: "error",
				isLoading: false,
			});
			setTimeout(() => {
				toast.dismiss(tLoading);
			}, 2800);
		}
	}

	if (loading) {
		return null;
	}

	return (
		<StyledMainRegister>
			<InitialBox />
			<div>
				<StyledFormRegister
					onSubmit={handleSubmit(onSubmitFunction)}
					noValidate
				>
					<header>
						<h2>Cadastro</h2>
						<a href="/">Retornar para o login</a>
					</header>
					<section>
						<TextField
							type="text"
							label="Nome"
							defaultValue=""
							color="success"
							fullWidth
							autoFocus={true}
							error={!!errors.name}
							helperText={errors.name ? errors.name.message : " "}
							{...register("name")}
						/>
					</section>
					<section>
						<TextField
							type="email"
							label="Email"
							defaultValue=""
							color="success"
							fullWidth
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
					<section>
						<TextField
							type="password"
							label="Confirmar senha"
							defaultValue=""
							color="success"
							fullWidth
							error={!!errors.passwordCheck}
							helperText={
								errors.passwordCheck
									? errors.passwordCheck.message
									: " "
							}
							{...register("passwordCheck")}
						/>
					</section>
					<button
						type="submit"
						disabled={
							!!(
								errors.name ||
								errors.email ||
								errors.password ||
								errors.passwordCheck
							)
						}
					>
						Cadastrar
					</button>
				</StyledFormRegister>
			</div>
		</StyledMainRegister>
	);
};

export default RegisterPage;
