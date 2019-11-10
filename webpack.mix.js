const mix = require("laravel-mix");

mix.react("app/app.js", "app/build").sass("app/styles/app.scss", "app/build");
