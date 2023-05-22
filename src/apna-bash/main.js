const {readFileSync} = require('fs');
const {evaluate} = require('./shell.js');

const parse = function(script) {
  return  script.trim().split('\n');
}

const main = function() {
  const script = readFileSync(process.argv[2], 'utf-8');
  const parsedScript = parse(script);
  const {streams} = evaluate(parsedScript);

  console.log(streams.stdOut);
  console.log(streams.stdErr);
}

main( );

exports.main = main;
