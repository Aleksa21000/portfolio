import React from 'react';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () => (
	<div>
		<Section id="tech">
			<SectionDivider divider />
			<br />
			<SectionTitle>Technologies</SectionTitle>
			<SectionText>
				✔️ Design and development responsive interfaces
				<br />
				✔️ Writing clean and scalable code
				<br />
				✔️ SPA, SSR, Universal apps
				<br />
				✔️ Patterns and approaches: GoF, SOLID, DDD, TDD, GitFlow;
				<br />
				✔️ Management: Jira, Trello, Clickup, Confluence;
			</SectionText>
			<List>
				<ListItem>
					<ListContainer>
						<ListTitle>Front-End</ListTitle>
						<ListParagraph>
							Next.js, React.js, TypeScript, Webpack, CSS, SCSS, HTML, HTML5, Canvas, WebAssembly, Javascript, Jest
						</ListParagraph>
					</ListContainer>
				</ListItem>
				<ListItem>
					<ListContainer>
						<ListTitle>Back-End</ListTitle>
						<ListParagraph>Node.js, Express.js, Databases</ListParagraph>
					</ListContainer>
				</ListItem>
				<ListItem>
					<ListContainer>
						<ListTitle>DevOps</ListTitle>
						<ListParagraph>Docker, Docker Compose</ListParagraph>
					</ListContainer>
				</ListItem>
			</List>
			<SectionDivider divider />
		</Section>
	</div>
);

export default Technologies;
