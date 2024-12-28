/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html", // 프로젝트 루트의 index.html
        "./src/**/*.{js,ts,jsx,tsx}", // src 폴더 내의 모든 JS/TS/JSX/TSX 파일
    ],
    theme: {
        extend: {
            screens: {
                'sidebarpoint': '1264px',
                'md': '988px',
            }
        },
    },
    darkMode: 'class',
    plugins: [],
};