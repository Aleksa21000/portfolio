import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { DiReact } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () => (
	<Container>
		<Div1>
			<Link
				href="/"
				style={{ display: 'flex', alignItems: 'center', color: 'white', gap: '7px' }}>
				<DiReact size="3rem" /> <Span>Aleksa Radulovic</Span>
			</Link>
		</Div1>
		<Div2>
			<Link href="#tech">
				<NavLink>Technologies</NavLink>
			</Link>
			<Link href="#projects">
				<NavLink>Projects</NavLink>
			</Link>
			<Link href="#about">
				<NavLink>About</NavLink>
			</Link>
		</Div2>
		<Div3>
			<SocialIcons
				href="https://github.com/Aleksa21000"
				target="_blank"
				aria-label="Visit my GitHub profile">
				<AiFillGithub size="3rem" />
			</SocialIcons>
			<SocialIcons
				href="https://www.linkedin.com/in/aleksa-radulovi%C4%87-955079242/"
				target="_blank"
				aria-label="Visit my LinkedIn profile">
				<AiFillLinkedin size="3rem" />
			</SocialIcons>
		</Div3>
	</Container>
);

export default Header;
