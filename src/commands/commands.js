const {readdirSync, existsSync} = require('fs');
const {resolvePath, toAbsPath} = require('../apna-bash/resolve-path.js');

const ls = function(PWD) {
  const directories = (readdirSync(PWD));
  return {PWD, stdOut: directories, stdErr: ['']};
}

const pwd = function(PWD) {
  return {PWD, stdOut: [PWD], stdErr: ['']};
}

const cd = function(PWD, dirPath) {
  if(existsSync(dirPath)) {
    PWD = resolvePath(toAbsPath(PWD, dirPath));
    return {PWD, stdOut: '', stdErr: ''};
  }

  return {PWD, stdOut:[''], stdErr: ['No such file or directiory']};
}

exports.ls = ls;
exports.cd = cd;
exports.pwd = pwd;
