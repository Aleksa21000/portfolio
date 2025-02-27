import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import Technologies from '../components/Technologies/Technologies';
import Timeline from '../components/TimeLine/TimeLine';
import { Layout } from '../layout/Layout';

const Home = () => {
	return (
		<Layout>
			<Hero />
			<Technologies />
			<Projects />
			<Timeline />
		</Layout>
	);
};

export default Home;
