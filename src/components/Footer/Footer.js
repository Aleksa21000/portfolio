import React from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import Link from 'next/link';

import { SocialIcons } from '../Header/HeaderStyles';
import {
	CompanyContainer,
	FooterWrapper,
	LinkColumn,
	LinkItem,
	LinkTitle,
	Slogan,
	SocialContainer,
	SocialIconsContainer,
} from './FooterStyles';

const Footer = () => {
	return (
		<FooterWrapper>
			<LinkColumn style={{ maxWidth: 'unset', marginBottom: '30px' }}>
				<LinkTitle>Email</LinkTitle>
				<LinkItem href="mailto:radulovicaleksa21@gmail.com">radulovicaleksa21@gmail.com</LinkItem>
			</LinkColumn>
			<SocialIconsContainer>
				<CompanyContainer>
					<Slogan>All rights reserved © 2024</Slogan>
				</CompanyContainer>
				<SocialContainer>
					<SocialIcons
						href="https://github.com/Aleksa21000"
						target="_blank">
						<AiFillGithub size="3rem" />
					</SocialIcons>
					<SocialIcons
						href="https://www.linkedin.com/in/aleksa-radulovi%C4%87-955079242/"
						target="_blank">
						<AiFillLinkedin size="3rem" />
					</SocialIcons>
				</SocialContainer>
			</SocialIconsContainer>
		</FooterWrapper>
	);
};

export default Footer;
