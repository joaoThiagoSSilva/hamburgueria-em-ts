import styled from "styled-components";

export const StyledHeader = styled.header`
	width: 100vw;
	width: 100%;
	height: 80px;

	background-color: var(--grey-0);

	@media (max-width: 630px) {
		width: 100%;
		height: 140px;
	}
`;

export const StyledNav = styled.nav`
	margin: 0 auto;
	max-width: 1380px;
	height: 100%;

	display: flex;
	align-items: center;
	justify-content: space-between;

	@media (max-width: 1400px) {
		max-width: 940px;
	}

	@media (max-width: 950px) {
		width: 622px;
		margin: 0 auto;
	}

	@media (max-width: 630px) {
		width: 90vw;

		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-around;
	}

	& > div {
		display: flex;
		align-items: center;

		height: 100%;
		gap: 1.5rem;
	}
`;
