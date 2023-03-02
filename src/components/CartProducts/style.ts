import styled from "styled-components";

export const StyledUl = styled.ul`
	width: 100%;
	padding: 20px 10px;

	display: flex;
	flex-direction: column;
	gap: 23px;
	max-height: 323px;

	overflow-y: auto;
`;

export const StyledLi = styled.li`
	display: flex;
	align-items: flex-start;
	justify-content: space-between;

	width: 100%;
	height: 80px;

	h3 {
		font-size: 14px;
		line-height: 24px;
		font-weight: 700;
	}
	h5 {
		font-size: 12px;
		line-height: 16px;
		font-weight: 400;
		color: var(--grey-50);
	}

	.divImgItem {
		display: flex;
		align-items: center;

		height: 100%;
		gap: 10px;
	}

	.divImg {
		display: flex;
		align-items: center;
		justify-content: center;

		height: 80px;
		width: 80px;

		background-color: var(--grey-20);
		border-radius: 5px;
	}

	img {
		display: flex;
		width: 90%;
	}

	.divItem {
		display: flex;
		flex-direction: column;

		height: 80%;
		gap: 0.8rem;
	}

	& > button {
		padding: 5px 5px;
		margin-top: 7px;
	}
`;
