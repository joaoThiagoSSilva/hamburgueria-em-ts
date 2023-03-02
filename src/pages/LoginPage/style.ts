import styled from "styled-components";

export const StyledMainLogin = styled.main`
	display: flex;
	align-items: center;
	justify-content: center;

	width: 100%;
	height: 100vh;
	gap: 9%;

	background-color: var(--color-white);

	@media (max-width: 1000px) {
		flex-direction: column-reverse;
		gap: 2.5rem;
	}
`;

export const StyledFormLogin = styled.form`
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
	}

	& > section {
		width: 100%;

		p,
		.MuiFormHelperText-root {
			text-align: start;
		}
	}

	& > .buttonSubmit {
		width: 100%;
		height: 60px;
		margin-bottom: 16px;

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

	p {
		width: 100%;

		font-weight: 400;
		font-size: 14px;
		text-align: center;

		color: var(--grey-50);
	}

	& > .buttonRegister {
		width: 100%;
		height: 60px;
		margin-top: 16px;

		font-size: 16px;
		font-weight: 600;

		border-radius: 4px;

		color: var(--grey-50);
		background-color: var(--grey-0);

		:hover {
			background-color: var(--grey-20);
		}
	}

	@media (max-width: 550px) {
		width: 90vw;
	}
`;
