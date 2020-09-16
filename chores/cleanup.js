// remove old files to avoid conflict. keep a clean slate.

const fs = require('fs')

// https://stackoverflow.com/a/12761924/1227747
const deleteFolderRecursive = function (path) {
  var files = [];
  if ( fs.existsSync(path) ) {
    files = fs.readdirSync(path);
    files.forEach(function(file, index) {
      var curPath = path + "/" + file;
      if(fs.lstatSync(curPath).isDirectory()) { // recurse
        deleteFolderRecursive(curPath);
      } else { // delete file
        fs.unlinkSync(curPath);
      }
    });
    fs.rmdirSync(path);
  }
};

deleteFolderRecursive('./docs/')
console.log('\nRemoved docs folder ...\n')

deleteFolderRecursive('./build/html')
console.log('\nRemoved build folder ...\n')