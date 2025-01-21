const { src, dest, watch, series } = require("gulp");

const sass = require("gulp-sass")(require("sass"));

function buildStyles() {
  return src("index.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(dest("css"));
}

function watchTask() {
  watch(["index.scss"], buildStyles);
}

// Define the build task explicitly
function build() {
  return buildStyles();
}

// Export tasks
exports.build = build; // Now you can run 'gulp build'

exports.default = series(buildStyles, watchTask);
