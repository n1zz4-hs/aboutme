var gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', function(){
    return gulp.src('app/sass/**/*.sass') 
        .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError)) 
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('app/css')); 
});

gulp.task('watch', function() {
    gulp.watch('app/sass/**/*.sass', ['sass']);
});