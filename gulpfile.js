// Adiciona os módulos instalados
const gulp = require("gulp");
const sass = require("gulp-sass");
const autoprefixer = require("gulp-autoprefixer"); // Criar os auto prefixos ( webkit )
const browserSync = require("browser-sync").create();
const concat = require("gulp-concat"); // Junta os arquivos JS em um arquivo só
const uglify = require("gulp-uglify"); // Minificar o JS
const imagemin = require("gulp-imagemin"); // Minificar as imagens

// Função para compilar o SASS e adicionar os prefixos
function compilaSass() {
  return gulp
    .src("css/scss/*.scss")
    .pipe(
      sass({
        outputStyle: "compressed"
      })
    )
    .pipe(autoprefixer())
    .pipe(gulp.dest("css/"))
    .pipe(browserSync.stream()); // Avisa ao browserSync para atualizar a página
}

// Tarefa de gulp para a função de SASS
gulp.task("sass", compilaSass);

// Função para juntar os arquivos JS
function gulpJs() {
  return gulp
    .src("js/main/*.js")
    .pipe(concat("main.js"))
    .pipe(uglify())
    .pipe(gulp.dest("js/"))
    .pipe(browserSync.stream());
}

gulp.task("mainjs", gulpJs);

// Minificar imagens

function imageminJs() {
  gulp
    .src("img/*")
    .pipe(imagemin())
    .pipe(gulp.dest("img/min/"));
}

gulp.task("imageminjs", imageminJs);

// Função para iniciar o browser
function browser() {
  browserSync.init({
    server: {
      baseDir: "./"
    }
  });
}

// Tarefa para iniciar browser-sync
gulp.task("browser-sync", browser);

// Função de watch do gulp
function watch() {
  gulp.watch("css/scss/**/*.scss", compilaSass);
  gulp.watch("js/main/*.js", gulpJs);
  gulp.watch(["*.html", "*.php"]).on("change", browserSync.reload);
}

// Inicia a tarefa de watch
gulp.task("watch", watch);

// Tarefa padrão do gulp, que inicia o watch e o browser-sync
gulp.task("default", gulp.parallel("watch", "browser-sync", "sass", "mainjs"));