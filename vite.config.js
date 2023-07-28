// vite.config.js
import { defineConfig } from 'vite'

export default defineConfig({
    // Base path for the project (optional)
    base: './',

    // Development server configuration
    server: {
        // Default port for the development server (default: 3000)
        port: 8080,
        // Enable open browser on server start (default: true)
        open: true,
    },

    // Build configuration
    build: {
        // Output directory for the production build (default: 'dist')
        outDir: 'dist',
        // Generate source maps for the production build (default: false)
        sourcemap: true,
    },
})