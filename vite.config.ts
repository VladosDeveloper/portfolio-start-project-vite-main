import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
		base: 'VladosDeveloper/portfolio-start-project-vite-main',
		plugins: [
				react({
						babel: {
								plugins: ['babel-plugin-styled-components'],
						},
				}),
		],
		resolve: {
				alias: {
						'@': '/src',
				},
		},
});