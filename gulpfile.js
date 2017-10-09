var gulp = require('gulp')
var less = require('gulp-less')
var cssMinify = require('gulp-csso')
var nunjucks = require('gulp-nunjucks')


// 编译 less 的任务
gulp.task('less', function () {
  gulp.src('./src/css/*.less')
    .pipe(less())
    .pipe(cssMinify())
    .pipe(gulp.dest('./dist/css'))
})

// 处理 html 公共模板的部分
gulp.task('html', function () {
  gulp.src('./src/index.html')
    .pipe(nunjucks.compile())
    .pipe(gulp.dest('./dist/'))
})

gulp.task('default', function () {
  console.log('default task')
})
