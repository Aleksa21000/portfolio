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
	CategoryButtonContainer,
	CategoryButton,
} from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects as allProjects } from '../../constants/constants';

const ProjectImage = ({ image, alt }) => (
	<picture>
		<source
			srcSet={image.webp}
			type="image/webp"
		/>
		<Img
			src={image.jpg}
			alt={`${alt} Cover Image`}
			loading="lazy"
			width={'510px'}
			height={'241px'}
		/>
	</picture>
);

const Projects = () => {
	const [searchTerm, setSearchTerm] = useState('');
	const [currentPage, setCurrentPage] = useState(1);
	const [activeCategory, setActiveCategory] = useState('All');
	const categories = ['All', ...new Set(allProjects.map((project) => project.category))];
	const projectsPerPage = 4;
	const sectionRef = useRef(null);

	// Filter Projects by title & category
	const filteredProjects = allProjects.filter((project) => {
		const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase());
		const matchesCategory = activeCategory === 'All' || project.category === activeCategory;
		return matchesSearch && matchesCategory;
	});

	// Pagination
	const indexOfLastProject = currentPage * projectsPerPage;
	const indexOfFirstProject = indexOfLastProject - projectsPerPage;
	const currentProjects = filteredProjects.slice(indexOfFirstProject, indexOfLastProject);
	const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);

	const handleSearchChange = (e) => {
		setSearchTerm(e.target.value);
		setCurrentPage(1);
	};

	const handleCategoryChange = (category) => {
		setActiveCategory(category);
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

	const categoryButtons = (
		<CategoryButtonContainer>
			{categories.map((category) => (
				<CategoryButton
					key={category}
					className={activeCategory === category ? 'active' : ''}
					onClick={() => handleCategoryChange(category)}>
					{category}
				</CategoryButton>
			))}
		</CategoryButtonContainer>
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
			<SectionTitle
				main
				style={{ paddingTop: 0 }}>
				Projects
			</SectionTitle>
			{searchBar}
			{categoryButtons}
			<GridContainer>
				{currentProjects.length > 0 ? (
					currentProjects.map((project) => (
						<BlogCard
							key={project.id}
							id={project.category}>
							<ProjectImage
								image={project.image}
								alt={project.title}
							/>
							<TitleContent>
								<HeaderThree title="true">{project.title}</HeaderThree>
								<Hr />
							</TitleContent>
							<CardInfo>{project.description}</CardInfo>
							<div>
								<CardInfo style={{ marginTop: '30px', fontSize: '22px' }}>Company:</CardInfo>
								<CardInfo style={{ marginTop: '7px', fontFamily: '"Noto Sans", serif' }}>
									{project.company}
								</CardInfo>
							</div>
							<UtilityList>
								{project.visit && (
									<ExternalLinks
										href={project.visit}
										target="_blank">
										Code
									</ExternalLinks>
								)}
								{project.source && (
									<ExternalLinks
										href={project.source}
										target="_blank">
										Website
									</ExternalLinks>
								)}
							</UtilityList>
						</BlogCard>
					))
				) : (
					<p style={{ textAlign: 'center', fontSize: '18px', color: '#888' }}>
						No projects found matching your search criteria.
					</p>
				)}
			</GridContainer>
			{pagination}
			<SectionDivider divider />
		</Section>
	);
};

export default Projects;
