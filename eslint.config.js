import next from 'eslint-config-next';

export default [
	next,
	{
		files: ['**/*.js', '**/*.jsx', '**/*.ts', '**/*.tsx'],
		plugins: {
			react: 'eslint-plugin-react',
			jsxA11y: 'eslint-plugin-jsx-a11y',
		},
		rules: {
			'react/jsx-no-duplicate-props': 'error',
			'react/no-unknown-property': 'error',
		},
	},
];
