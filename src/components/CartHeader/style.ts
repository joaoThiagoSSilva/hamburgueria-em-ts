import styled from "styled-components";

export const StyledCartHeader = styled.div`
	display: flex;
	position: relative;

	color: var(--grey-50);
	:hover {
		color: var(--grey-100);
	}

	& > div {
		display: flex;
		align-items: center;
		justify-content: center;

		position: absolute;
		top: -12px;
		right: -7px;

		width: 15px;
		height: 18px;
		border-radius: 4px;

		background-color: var(--color-primary);
		color: var(--color-white);

		font-size: 12px;
	}
`;
