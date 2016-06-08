var gulp=require('gulp');
var coffee=require('gulp-coffee');
var uglify=require('gulp-uglify');
var concat=require('gulp-concat');
gulp.task('coffee',function(){
   return gulp.src('file3.coffee')
    .pipe(coffee())
    .pipe(gulp.dest('src'));
});
gulp.task('compress',['coffee'],function () {
    gulp.src('src/*.js')
    .pipe(concat('all.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist'));
})