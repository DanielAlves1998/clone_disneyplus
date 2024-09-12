const gulp = require('gulp'); /*para o gulp funcionar tem que importa ele aqui*/
const sass = require('gulp-sass')(require('sass'));

function styles() {
    return gulp.src('./src/styles/*.scss') // o *. ele pega qualquer arquivo que nesse caso estou chamando qualquer arquivo scss
    .pipe(sass({outputStyle: 'compressed'})) // isso é para comprimir os arquivos scss
    .pipe(gulp.dest('./dist/css')); //o dest é de destino. './dist/css' essa é a pasta de destino
}

exports.default = styles;
//o watch serve para o programa ficar ativo e n precisarmos ficar dando init todas as vezes
exports.watch = function() {
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles)) // o nome diss [] é arrei. parallel é para executar de forma paralela
}