/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./nuxt.config.{js,ts}",
    ],
    theme: {
        extend: {
            colors: {
                'primary': "#0ba376",
                "primary-bg": "#444",
                "secondry-bg": "#222",
                "card-bg": "#333",
                "secondry-text": '#aaa'
            },
            borderRadius: {
                '4xl': '2.5rem'
            },
            minHeight: {
                '80': '80vh',
            },
            maxHeight: {
                '80': '80vh',
            },
            padding: {
                '10vh': '10vh',
            },
            margin: {
                'auto': 'auto'
            },
            width: {
                'px': '1px'
            },
            inset: {
                '35': "35%"
            }
        },

    },
    plugins: [],
}