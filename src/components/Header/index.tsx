import CartHeader from "../CartHeader";
import InputSearch from "../InputSearch";
import Logo from "../Logo";
import LogoutButton from "../LogoutButton";
import { StyledHeader, StyledNav } from "./style";

const Header = () => {
	return (
		<StyledHeader>
			<StyledNav>
				<Logo />

				<div>
					<InputSearch />
					<CartHeader />
					<LogoutButton />
				</div>
			</StyledNav>
		</StyledHeader>
	);
};

export default Header;
