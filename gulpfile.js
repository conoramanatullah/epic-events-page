var gulp = require('gulp'),
    autoprefixer = require('gulp-autoprefixer'),
    input = 'css.css',
    output = './';

gulp.task('css', function() {
    return gulp.src(input)
        .pipe(autoprefixer({
            browsers: ['last 3 versions']
        }))
        .pipe(gulp.dest(output));
})
