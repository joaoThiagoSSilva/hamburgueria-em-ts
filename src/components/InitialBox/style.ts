import styled from "styled-components";

export const StyledInitialBox = styled.div`
	display: flex;
	flex-direction: column;

	width: 377px;
	gap: 30px;

	& > div {
		display: flex;
		align-items: center;

		width: 377px;
		height: 95px;

		padding: 1rem;
		gap: 1rem;

		background-color: var(--color-white);
		border: 1px solid var(--grey-0);
		box-shadow: 0px 4px 40px -20px rgba(0, 0, 0, 0.25);
		border-radius: 5px;

		div {
			display: flex;
			align-items: center;
			justify-content: center;

			width: 60px;
			height: 60px;

			background-color: var(--color-primary-50);
			border-radius: 4px;
		}

		p {
			margin-top: 5px;
			font-size: 14px;
			font-weight: 500;

			width: 261px;
			height: 100%;

			color: var(--grey-50);
		}

		span {
			color: var(--color-black);
		}
	}

	& > img {
		width: 181px;
		height: 79px;
	}

	@media (max-width: 1000px) {
		& > img {
			display: none;
		}
	}

	@media (max-width: 419px) {
		width: 90vw;

		& > div {
			width: 100%;
			height: unset;
		}
	}
`;
