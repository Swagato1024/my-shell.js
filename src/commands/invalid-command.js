const invalidCommandMessage = function(PWD, command) {
  const errorMessage = `shell: command not found: ${command}`;
  return {PWD, stdOut: [''], stdErr: [errorMessage]};
}

exports.invalidCommandMessage = invalidCommandMessage;
