import styled from "styled-components";

export const StyledModalCart = styled.div`
	width: 100vw;
	height: 100vh;

	position: fixed;
	top: 0;
	left: 0;
	z-index: 1;

	background-color: rgba(0, 0, 0, 0.8);

	display: flex;
	align-items: center;
	justify-content: center;

	& > main {
		display: flex;
		flex-direction: column;

		width: 500px;

		& > header {
			display: flex;
			align-items: center;
			justify-content: space-between;

			width: 100%;
			height: 54px;
			padding: 0px 22px;

			background-color: var(--color-primary);
			border-top-left-radius: 5px;
			border-top-right-radius: 5px;

			h3 {
				font-size: 18px;
				font-weight: 700;
				color: var(--color-white);
			}

			button {
				color: var(--color-white);
				height: 100%;
			}
		}

		& > div {
			width: 100%;
		}
	}
`;

export const StyledDivCart = styled.div`
	display: flex;
	flex-direction: column;

	gap: 1rem;
	padding: 22px;
	width: 100%;

	background-color: var(--color-white);
	border-bottom-left-radius: 5px;
	border-bottom-right-radius: 5px;

	& > section {
	}

	& > div {
		display: flex;
		flex-direction: column;
		justify-content: space-between;

		width: 100%;
		height: 117px;

		div {
			display: flex;
			align-items: center;
			justify-content: space-between;

			padding-top: 16px;
			border-top: solid 3px var(--grey-20);
		}

		button {
			width: 100%;
			height: 60px;

			border-radius: 5px;
			background-color: var(--grey-20);
			color: var(--grey-50);

			font-size: 16px;
			font-weight: 600;
		}

		button:hover {
			background-color: var(--grey-50);
			color: var(--color-white);
		}
	}
`;

export const StyledDivEmpty = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	gap: 1rem;
	width: 100%;
	height: 158px;

	background-color: var(--color-white);
	border-bottom-left-radius: 5px;
	border-bottom-right-radius: 5px;
`;
