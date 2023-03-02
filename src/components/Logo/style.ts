import styled from "styled-components";

export const StyledLogo = styled.h1`
	font-size: 26px;
	font-weight: 700;
	line-height: 34px;
	color: var(--grey-100);

	& > span {
		font-size: 22px;
		color: var(--color-secundary);
	}

	@media (max-width: 419px) {
		width: 90vw;
	}
`;
