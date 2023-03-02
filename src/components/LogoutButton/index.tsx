import { FaSignOutAlt } from "react-icons/fa";
import { StyledButtonLogout } from "./style";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const LogoutButton = () => {
	const navigate = useNavigate();

	const logOutFunction = () => {
		toast.success("Saindo...");

		localStorage.removeItem("@BurguerKenzie:token");
		localStorage.removeItem("@BurguerKenzie:user");

		setTimeout(() => {
			navigate("/");
		}, 2000);
	};

	return (
		<StyledButtonLogout onClick={logOutFunction}>
			<FaSignOutAlt size={"2em"} />
		</StyledButtonLogout>
	);
};

export default LogoutButton;
