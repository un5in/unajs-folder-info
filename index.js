#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const chalk = require('chalk');

function readFolder(folderPath) {
  fs.readdir(folderPath, function(err, files) {
    if(err) {
      console.log('error in reading directory');
    } else {
      const resolvedFolderPath = path.resolve(folderPath);
      files.forEach(function (fileName) {
        console.log(chalk.greenBright(resolvedFolderPath + '/' + fileName));
      });
    }
  });
}

(function init() {
  var argObj = {};
  process.argv.forEach(function (arg) {
    var paramKeyVal = arg.split('=');
    if(paramKeyVal.length === 2) {
      argObj[paramKeyVal[0]] = paramKeyVal[1];
    }
  });
  const path = argObj.path || './';
  readFolder(path);
})();
