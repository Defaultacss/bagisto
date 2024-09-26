import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.js'],
            refresh: true,
        }),
    ],
    build: {
        outDir: 'dist',  // Ensure the output is directed to 'dist'
        rollupOptions: {
            output: {
                // Customize output if needed (e.g., to specify different chunk formats or filenames)
            }
        }
    }
});
