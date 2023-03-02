import styled from "styled-components";

export const StyledMainRegister = styled.main`
	display: flex;
	align-items: center;
	justify-content: center;

	width: 100%;
	height: 100vh;
	gap: 9%;

	background-color: var(--color-white);

	@media (max-width: 1000px) {
		flex-direction: column;
		gap: 2.5rem;
	}
`;

export const StyledFormRegister = styled.form`
	display: flex;
	flex-direction: column;
	align-items: center;

	width: 500px;
	padding: 28px 24px;
	gap: 5px;

	background-color: var(--color-white);
	border: solid 2px var(--grey-20);
	border-radius: 5px;

	header {
		display: flex;
		align-items: center;
		justify-content: space-between;

		width: 100%;
		height: 40px;

		margin-bottom: 16px;

		h2 {
			font-size: 18px;
			font-weight: 700;
		}

		a {
			font-size: 14px;
			font-weight: 500;
			color: var(--grey-50);
			text-decoration-line: underline;
		}

		@media (max-width: 350px) {
			flex-direction: column;
			gap: 0.5rem;
			height: 50px;
		}
	}

	& > section {
		width: 100%;
	}

	& > button {
		width: 100%;
		height: 60px;
		margin-top: 16px;

		font-size: 16px;
		font-weight: 600;

		border-radius: 4px;
		color: var(--color-white);
		background-color: var(--color-primary);

		:hover {
			background-color: var(--color-primary-50);
		}

		:disabled {
			color: var(--grey-50);
			background-color: var(--grey-0);
		}
	}

	@media (max-width: 550px) {
		width: 90vw;
	}
`;
