import styled from "styled-components";

export const StyledButton = styled.button`
	padding: 0px 20px;
	height: 40px;

	color: var(--color-white);
	background-color: var(--color-primary);
	border: 2px solid var(--color-primary);
	border-radius: 8px;

	&:hover {
		background-color: var(--color-primary-50);
		border: 2px solid var(--color-primary-50);
	}
`;
