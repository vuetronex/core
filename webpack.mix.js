const mix = require('laravel-mix');
const path = require('path');
var tailwindcss = require('tailwindcss');

mix.js('src/app.js', 'public/js')
    .postCss('src/css/app.css', 'public/css', [
        tailwindcss('./tailwind.js'),
    ]);
