import React from 'react';
import Head from 'next/head';
import { PdfLink, Section, SectionText, MainTitle } from '../../styles/GlobalComponents';
import { Img, ImgWrapper, LeftSection } from './HeroStyles';
import { profileImages } from '../../constants/constants';

export const ProfileImage = () => (
	<picture>
		<source
			srcSet={profileImages.webp}
			type="image/webp"
		/>
		<Img
			src={profileImages.jpg}
			alt={'Profile image of Aleksa Radulovic'}
			width={'294px'}
			height={'294px'}
		/>
	</picture>
);

const Hero = () => (
	<>
		<Head>
			<link
				rel="preload"
				href={profileImages.jpg}
				as="image"
				type="image/jpeg"
			/>
			<link
				rel="preload"
				href={profileImages.webp}
				as="image"
				type="image/webp"
			/>
		</Head>
		<Section
			flex
			row
			style={{ alignItems: 'center', gap: '30px' }}
			className="hero-banner">
			<LeftSection>
				<MainTitle
					main
					center>
					Aleksa Radulovic <br />
					Software Engineer
				</MainTitle>
				<SectionText>
					I'm a Software Engineer with 6+ years of experience of commercial development. 
					My main direction is frontend development in MERN stack for last 4+ years.
				</SectionText>
				<PdfLink
					href="/CV Aleksa Radulovic.pdf"
					target="_blank">
					Check my CV
				</PdfLink>
			</LeftSection>
			<ImgWrapper>
				<ProfileImage />
			</ImgWrapper>
		</Section>
	</>
);

export default Hero;
