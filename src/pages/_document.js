import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import { Analytics } from '@vercel/analytics/next';

export default class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const sheet = new ServerStyleSheet();
		const originalRenderPage = ctx.renderPage;

		try {
			ctx.renderPage = () =>
				originalRenderPage({
					enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
				});

			const initialProps = await Document.getInitialProps(ctx);

			return {
				...initialProps,
				styles: (
					<>
						{initialProps.styles}
						{sheet.getStyleElement()}
					</>
				),
			};
		} finally {
			sheet.seal();
		}
	}

	render() {
		return (
			<Html lang="en-US">
				<Head>
					<link
						href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap"
						rel="stylesheet"
					/>
					<link
						href="https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,100..900;1,100..900&display=swap"
						rel="stylesheet"
					/>
					<meta
						name="title"
						content="Aleksa Radulović - Software Engineer | Frontend Development Specialist"
					/>
					<meta
						name="description"
						content="Aleksa Radulović, Middle Software Engineer with over 4 years of experience in commercial development. Specializing in frontend development using the MERN stack. Proficient in Next.js, React.js, TypeScript, Docker, Node.js, and more."
					/>
					<meta
						name="keywords"
						content="Aleksa Radulović, Software Engineer, Frontend Developer, Fullstack Developer, MERN stack, Next.js, React.js, TypeScript, Docker, Node.js, Express.js, responsive interfaces, scalable code, SPA, SSR, GoF patterns, SOLID principles, Data structures"
					/>
				</Head>
				<body>
					<Main />
					<NextScript />
					<Analytics />
				</body>
			</Html>
		);
	}
}
