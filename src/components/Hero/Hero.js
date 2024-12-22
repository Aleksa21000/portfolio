import React from 'react';

import { PdfLink, Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { Img, ImgWrapper, LeftSection } from './HeroStyles';
import { profileImage } from '../../constants/constants';

const Hero = () => (
	<Section
		flex
		row
		style={{ alignItems: 'center', gap: '30px;' }}
		className="hero-banner">
		<LeftSection>
			<SectionTitle
				main
				center>
				Aleksa Radulovic <br />
				Software Engineer
			</SectionTitle>
			<SectionText>
				I'm a Middle Software Engineer with 4+ years of experience of commercial development. My main direction is
				frontend development in MERN stack, this is my passion!
			</SectionText>
			<PdfLink
				href="/cv-aleksa-radulovic.pdf"
				target="_blank">
				Pogledajte moj CV
			</PdfLink>
		</LeftSection>
		<ImgWrapper>
			<Img src={profileImage} />
		</ImgWrapper>
	</Section>
);

export default Hero;
