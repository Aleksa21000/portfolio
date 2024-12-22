import styled from 'styled-components';

export const Img = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
	overflow: hidden;
`;

export const GridContainer = styled.section`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
	place-items: center;
	column-gap: 2rem;
	row-gap: 3rem;
	@media ${(props) => props.theme.breakpoints.sm} {
		display: flex;
		flex-direction: column;
		padding-bottom: 0;
	}
`;
export const BlogCard = styled.div`
	border-radius: 10px;
	box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
	text-align: center;
	width: 100%;
	background: #181818;
`;
export const TitleContent = styled.div`
	text-align: center;
	z-index: 20;
	width: 100%;
`;

export const HeaderThree = styled.h3`
	font-weight: 700;
	fontfamily: 'Noto Sans', serif;
	letter-spacing: 1px;
	background: linear-gradient(121.57deg, #ffffff 18.77%, rgba(255, 255, 255, 0.66) 60.15%);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	padding: 0.5rem 0;
	margin-top: 10px;
	font-size: ${(props) => (props.title ? '3rem' : '2rem')};
`;

export const Hr = styled.hr`
	width: 50px;
	height: 3px;
	margin: 20px auto;
	border: 0;
	background: linear-gradient(270deg, #13adc7 0%, #945dd6 100%);
`;

export const Intro = styled.div`
	width: 170px;
	margin: 0 auto;
	color: #dce3e7;
	font-family: 'Droid Serif', serif;
	font-size: 13px;
	font-style: italic;
	line-height: 18px;
`;

export const CardInfo = styled.p`
	width: 100%;
	padding: 0 50px;
	color: #e4e6e7;
	font-style: 2rem;
	line-height: 24px;
	text-align: justify;
	@media ${(props) => props.theme.breakpoints.sm} {
		padding: 0 20px;
	}
`;

export const UtilityList = styled.ul`
	list-style-type: none;
	padding: 0;
	display: flex;
	justify-content: space-between;
	padding: 0 50px;
	margin: 2.5rem 0;

	@media ${(props) => props.theme.breakpoints.sm} {
		padding: 0 20px;
	}
`;

export const ExternalLinks = styled.a`
	color: #fff;
	font-size: 1.6rem;
	padding: 1rem 1.5rem;
	background: linear-gradient(270deg, #13adc7 0%, #945dd6 100%);
	border-radius: 6px;
	transition: transform 0.5s, 0.5s border-radius;
	will-change: transform, border-radius;
	&:hover {
		transform: scale(1.05);
		border-radius: 15px;
	}
`;