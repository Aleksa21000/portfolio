import React from 'react';

import {
	BlogCard,
	CardInfo,
	ExternalLinks,
	GridContainer,
	HeaderThree,
	Hr,
	TitleContent,
	UtilityList,
	Img,
} from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const Projects = () => (
	<Section
		nopadding
		id="projects">
		<SectionDivider divider />
		<SectionTitle main>Projects</SectionTitle>
		<GridContainer>
			{projects.map((project) => (
				<BlogCard key={project.id}>
					<Img src={project.image} />
					<TitleContent>
						<HeaderThree title="true">{project.title}</HeaderThree>
						<Hr />
					</TitleContent>
					<CardInfo>{project.description}</CardInfo>
					<div>
						<CardInfo style={{ marginTop: '30px', fontSize: '22px' }}>Company:</CardInfo>
						<CardInfo style={{ marginTop: '7px', fontFamily: '"Noto Sans", serif' }}>{project.company}</CardInfo>
					</div>
					<UtilityList>
						<ExternalLinks
							href={project.visit}
							target="_blank">
							Code
						</ExternalLinks>
						<ExternalLinks
							href={project.source}
							target="_blank">
							Website
						</ExternalLinks>
					</UtilityList>
				</BlogCard>
			))}
		</GridContainer>
	</Section>
);

export default Projects;
