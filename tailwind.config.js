/** @type {import('tailwindcss').Config} */
export default {
    // darkMode: "selector",
    darkMode: "class",
    content: [
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.vue",
    ],
    theme: {
        extend: {},
    },
    plugins: [],
};
