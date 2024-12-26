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
			loading="lazy"
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
			/>
			<link
				rel="preload"
				href={profileImages.webp}
				as="image"
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
					I'm a Middle Software Engineer with 4+ years of experience of commercial development. My main direction is
					frontend development in MERN stack, this is my passion!
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
