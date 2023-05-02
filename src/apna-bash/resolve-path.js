const isAbsPath = function(path) {
  return path.startsWith('/');
}

const toAbsPath = function(PWD, path){
  return isAbsPath(path) ? path : `${PWD}/${path}`;
}

const parentDirectory = function(...path) {
  path.slice(0, -1);
  return path;
}

const navigate = function(path, component) {
  if(component === '..') {
    return parentDirectory(...path);
  }

  if(component === '.') return path;

  return path.concat(component);
}

const resolvePath = function(path) {
  const pathComponents = path.split('/');

  return pathComponents.reduce(navigate, []).join('/');
}

exports.resolvePath = resolvePath;
exports.toAbsPath = toAbsPath;
