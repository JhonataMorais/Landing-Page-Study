import gulp from 'gulp';

import { directories } from '../gulpfile.babel';

gulp.task('fonts', () => {
  gulp.src(directories.app.fonts)
    .pipe(gulp.dest(directories.public.fonts));
});
