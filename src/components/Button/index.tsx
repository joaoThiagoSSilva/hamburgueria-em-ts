import { StyledButton } from "./style";

interface iButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	children: any;
}

const Button = ({ children, ...rest }: iButtonProps) => {
	return <StyledButton {...rest}>{children}</StyledButton>;
};

export default Button;
