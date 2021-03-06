const gulp = require('gulp')
const nodemon = require('gulp-nodemon')
const babel = require('gulp-babel')
const del = require('del')
const sourcemaps = require('gulp-sourcemaps')

const src = './src'
const dist = './dist'

gulp.task('clean', () => {
  return del(`${dist}/*`)
})

var filesToMove = [
  'src/data/**/*.*'
]

gulp.task('move', () => {
  gulp.src(filesToMove, { base: './src' })
    .pipe(gulp.dest('dist'))
})

gulp.task('build', ['move'], () => {
  return gulp.src(`${src}/**/*.js`)
    .pipe(sourcemaps.init())
    .pipe(babel())
    .pipe(sourcemaps.write('./', { sourceRoot: `../${src}` }))
    .pipe(gulp.dest(dist))
})

gulp.task('watch', ['build'], function () {
  let stream = nodemon({
    script: `${dist}/app.js`,
    watch: src,
    tasks: ['build']
  })
  return stream
})

gulp.task('dev', ['watch'])
gulp.task('default', ['dev'])
