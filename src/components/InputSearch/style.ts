import styled from "styled-components";

export const StyledInput = styled.input`
	width: 100%;
	height: 40px;

	border: none;
	outline: none;

	&:focus {
		outline: none;
	}
`;
export const StyledDiv = styled.div`
	display: flex;
	align-items: center;

	width: 365px;
	height: 60px;
	padding: 10px;

	background-color: #ffffff;
	border: solid 2px var(--grey-20);
	border-radius: 8px;

	@media (max-width: 490px) {
		width: 300px;
	}

	@media (max-width: 425px) {
		width: 65vw;
	}
`;
