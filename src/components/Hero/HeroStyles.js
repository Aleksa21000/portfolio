import styled from 'styled-components';

export const LeftSection = styled.div`
	width: 100%;
	@media ${(props) => props.theme.breakpoints.sm} {
		width: 80%;
		display: flex;
		flex-direction: column;

		margin: 0 auto;
	}
	@media ${(props) => props.theme.breakpoints.md} {
		width: 100%;
		display: flex;
		flex-direction: column;

		margin: 0 auto;
	}
`;

export const ImgWrapper = styled.div`
	width: 300px;
	height: 300px;
	min-width: 300px;
	min-height: 300px;
	padding: 3px;
	background: linear-gradient(270deg, #13adc7 0%, #945dd6 100%);
	border-radius: 50%;

	@media ${(props) => props.theme.breakpoints.sm} {
		width: 260px;
		height: 260px;
		min-width: 260px;
		min-height: 260px;
	}
`;

export const Img = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
	border-radius: 50%;
`;
