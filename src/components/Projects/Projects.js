import React, { useState, useRef } from 'react';
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
	PaginationBtn,
	SearchInput,
} from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects as allProjects } from '../../constants/constants';

const Projects = () => {
	const [searchTerm, setSearchTerm] = useState('');
	const [currentPage, setCurrentPage] = useState(1);
	const projectsPerPage = 4;
	const sectionRef = useRef(null);

	// Filter Projects by title
	const filteredProjects = allProjects.filter((project) => project.title.toLowerCase().includes(searchTerm.toLowerCase()));

	// Pagination
	const indexOfLastProject = currentPage * projectsPerPage;
	const indexOfFirstProject = indexOfLastProject - projectsPerPage;
	const currentProjects = filteredProjects.slice(indexOfFirstProject, indexOfLastProject);

	const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);

	const handleSearchChange = (e) => {
		setSearchTerm(e.target.value);
		setCurrentPage(1);
	};

	const paginate = (pageNumber) => {
		setCurrentPage(pageNumber);

		if (sectionRef.current) {
			sectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
		}
	};

	const searchBar = (
		<div style={{ marginBottom: '20px' }}>
			<SearchInput
				type="text"
				placeholder="Search projects by title..."
				value={searchTerm}
				onChange={handleSearchChange}
			/>
		</div>
	);

	const pagination = totalPages > 1 && (
		<div style={{ marginTop: '20px', textAlign: 'center' }}>
			{[...Array(totalPages)].map((_, index) => (
				<PaginationBtn
					key={index}
					onClick={() => paginate(index + 1)}
					className={currentPage === index + 1 ? 'active' : ''}>
					{index + 1}
				</PaginationBtn>
			))}
		</div>
	);

	return (
		<Section
			nopadding
			id="projects"
			ref={sectionRef}>
			<SectionDivider divider />
			<SectionTitle main>Projects</SectionTitle>
			{searchBar}
			<GridContainer>
				{currentProjects.map((project) => (
					<BlogCard
						key={project.id}
						id={project.category}>
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
								target="_blank"
								style={!project.visit ? { display: 'none' } : { display: 'flex' }}>
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
			{pagination}
		</Section>
	);
};

export default Projects;
