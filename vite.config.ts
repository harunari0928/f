import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(() => {
    return {
        build: {
            rollupOptions: {
                input: { app: './src/app/app.tsx' },
                output: {
                    entryFileNames: `[name].js`,
                }
            },
            outDir: '../dist',
        },
        hmr: {
            host: '0.0.0.0',
            overlay: true,
            clientPort: 8081,
        },
        plugins: [
            react({
                include: '**/*.{jsx,tsx}',
            }),
        ],
        root: 'src',
        resolve: {
            alias: {
                '@components/': './app/components/',
            },
        },
        server: {
            host: true,
            port: 3000,
            strictPort: true
        }
    };
});
