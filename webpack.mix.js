const mix = require("laravel-mix");

mix
  .ts("app/app.tsx", "app/build")
  .ts("app/presenter.tsx", "app/build")
  .sass("app/styles/app.scss", "app/build")
  .webpackConfig({
    target: "electron-renderer"
  });
