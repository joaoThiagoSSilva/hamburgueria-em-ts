import styled from "styled-components";

export const StyledMainHome = styled.main`
	margin: 0 auto;
	max-width: 1380px;
	padding-top: 2rem;

	@media (max-width: 1400px) {
		max-width: 940px;
	}

	@media (max-width: 950px) {
		width: 622px;
	}

	@media (max-width: 630px) {
		width: 90vw;
	}
`;

export const StyledSectionProducts = styled.section`
	display: flex;
	flex-direction: column;

	width: 100%;

	@media (max-width: 1400px) {
		width: 100%;
		max-width: 940px;
	}
`;

export const StyledSectionSearch = styled.section`
	display: flex;
	align-items: center;
	justify-content: space-between;

	width: 100%;
	height: 40px;
	margin-bottom: 2rem;

	& > h3 {
		font-weight: 700;
		font-size: 26px;
		line-height: 34px;

		color: var(--grey-100);
	}
	& span {
		font-weight: 700;
		font-size: 26px;
		line-height: 34px;

		color: var(--grey-50);
	}

	& > button {
		padding: 0px 20px;
		height: 40px;

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

export const StyledUl = styled.ul`
	width: 103%;

	display: grid;
	grid-template-columns: repeat(4, 1fr);
	gap: 2rem 20px;

	@media (max-width: 1400px) {
		grid-template-columns: repeat(3, 1fr);
		width: 940px;
		margin: 0 auto;
	}

	@media (max-width: 950px) {
		grid-template-columns: repeat(2, 1fr);
		width: 622px;
		margin: 0 auto;
	}

	@media (max-width: 630px) {
		grid-template-columns: 1fr;
		width: 300px;
		margin: 0 auto;
	}
`;
