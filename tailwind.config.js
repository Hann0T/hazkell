/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["*.html"],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                'dark': '#010B14',
                'light': '#ffffff',
                'primary': '#F25D07',
                'secondary': '#2A87C8'
            },
            fontFamily: {
                'title': ['Montserrat'],
                'subtitle': ['Lora'],
                'paragraph': ['Noto Serif'],
            }
        },
    },
    plugins: [],
}

