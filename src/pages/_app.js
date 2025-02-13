import Theme from '../styles/theme';
import Head from 'next/head';
import { Analytics } from '@vercel/analytics/next';

export default function App({ Component, pageProps }) {
	return (
		<>
			<Head>
				<title>Aleksa Radulovic | Software Engineer</title>
			</Head>
			<Theme>
				<Component {...pageProps} />
				<Analytics />
			</Theme>
		</>
	);
}
