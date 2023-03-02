import styled from "styled-components";

export const StyledLi = styled.li`
	display: flex;
	flex-direction: column;

	max-width: 300px;
	height: 346px;

	background: #ffffff;
	border: 2px solid var(--grey-20);
	border-radius: 5px;

	& > div {
		display: flex;
		align-items: center;
		justify-content: center;

		width: 100%;
		height: 44%;

		background-color: var(--grey-0);
	}
`;

export const StyledBoxInfo = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: space-around;

	padding: 10px;
	width: 100%;
	height: 56%;

	& > button {
		padding: 0px 20px;
		height: 40px;
		width: 106px;

		background-color: var(--color-primary);
		color: #ffffff;
		border: 2px solid var(--color-primary);
		border-radius: 8px;
	}

	& > button:hover {
		background-color: var(--color-primary-50);
		border: 2px solid var(--color-primary-50);
	}
`;
