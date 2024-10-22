import path from 'node:path';
import { Transform } from 'stream';
import dartSass from 'sass';
import gulp, { src } from 'gulp';
import gulpsass from 'gulp-sass';
import rename from 'gulp-rename';
import postcss from 'postcss';
import cssnano from 'cssnano';
import type Vinyl from 'vinyl'; //gulp的
import consola from 'consola';

const compressCss = () => {
  const processer = postcss([cssnano({ preset: ['default', {}] })]);
  return new Transform({
    objectMode: true,
    transform(chunk, encoding, callback) {
      const file = chunk as Vinyl;
      const cssString = file.contents?.toString();
      if (cssString) {
        processer.process(cssString, { from: file.path }).then((res) => {
          const name = path.basename(file.path);
          file.contents = Buffer.from(res.css);
          consola.success(`压缩成功: ${name}`, `${cssString.length / 1024}kb--> ${name}: ${res.css.length / 1024}kb`);
        });
      }
      callback(null, file);
    },
  });
};

const buildThemeBundle = () => {
  const sass = gulpsass(dartSass);
  return src(path.resolve(__dirname, './src/*.scss'))
    .pipe(sass.sync())
    .pipe(rename({ suffix: '.min' }))
    .pipe(compressCss())
    .pipe(gulp.dest(path.resolve(__dirname, './dist')));
};

gulp.task('sass', () => {
  return buildThemeBundle();
});

gulp.task('watch', () => {
  return gulp.watch('./src/**/*', gulp.series('sass'));
});

export default buildThemeBundle;
