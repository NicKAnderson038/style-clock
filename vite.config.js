import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    base: '/style-clock/', // necessary for github pages
    define: {
        'process.env': {},
        __APP_VERSION__: JSON.stringify(process.env.npm_package_version),
    },
    resolve: {
        alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
    },
    build: {
        target: 'esnext',
    },
})
