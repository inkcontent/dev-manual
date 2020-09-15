// need to copy build files to docs folder in order for them to be published on github

const fs = require("fs")
const path = require("path")

// credit: https://stackoverflow.com/a/22185855
/**
 * Look ma, it's cp -R.
 * @param {string} src The path to the thing to copy.
 * @param {string} dest The path to the new copy.
 */
var copyRecursiveSync = function(src, dest) {
  var exists = fs.existsSync(src);
  var stats = exists && fs.statSync(src);
  var isDirectory = exists && stats.isDirectory();
  if (isDirectory) {
    fs.mkdirSync(dest);
    fs.readdirSync(src).forEach(function(childItemName) {
      copyRecursiveSync(path.join(src, childItemName),
                        path.join(dest, childItemName));
    });
  } else {
    fs.copyFileSync(src, dest);
  }
};

copyRecursiveSync('./build/html', './docs/')

fs.copyFileSync('./.nojekyll', './docs/.nojekyll')

console.log('\nbuild files copied to docs folder!\n')