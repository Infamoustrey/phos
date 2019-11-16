const mix = require("laravel-mix");

mix.ts("app/app.tsx", "app/build").sass("app/styles/app.scss", "app/build");
