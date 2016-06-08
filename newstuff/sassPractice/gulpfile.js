var gulp=require('gulp');
var sass=require('gulp-sass');
var watch=require('gulp-watch');
gulp.task('sasscompile',function(){
   return  gulp.src('style.scss')
    .pipe(watch('style.scss'))
    .pipe(sass())
    .pipe(gulp.dest('dist'));
    });
gulp.task('default',['sasscompile'])
