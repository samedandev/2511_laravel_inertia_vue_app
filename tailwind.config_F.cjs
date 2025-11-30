/** @type {import('tailwindcss').Config} */

export const content = [
    "./storage/framework/views/*.php",

    "./resources/views/**/*.blade.php",

    "./resources/js/**/*.vue",
];
export const theme = {
    extend: {},
};
export const plugins = [require("@tailwindcss/forms")];
