let mix = require('laravel-mix');
mix.js('src/app.js', 'dist')
.sass('src/app.scss', 'css')
.copy('src/*.php', 'dist')
.copy('src/*.html', 'dist')
.setPublicPath('dist');
