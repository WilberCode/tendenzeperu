const mix = require('laravel-mix');
let tailwindcss = require('tailwindcss');


//mix.setPublicPath('./videos');
mix.copy('assets/svg/*', 'videos/svg')   
mix.js('assets/js/video.js', 'videos/js')    
mix.js('dev/js/app.js', 'build/js') 
mix.js('dev/js/sw.js', 'build/js')   
 .sass('assets/scss/video.scss', 'videos/css')
    .options({
        postCss: [ tailwindcss('./tailwind.config.js') ],
        processCssUrls: false

    })  
 