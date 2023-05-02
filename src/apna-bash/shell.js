const {ls, cd, pwd} = require('../commands/commands.js'); 

const {invalidCommandMessage} = require('../commands/invalid-command.js');

const commandSet = {ls, cd, pwd}

const isValidCommand = function(command) {
  return command in commandSet;
}

const execute = function(command, args, PWD) {
  if(!isValidCommand(command)) {
    return invalidCommandMessage(PWD, command);
  }

  const commandToExecute = commandSet[command];
  return commandToExecute(PWD, ...args);
}

const evaluate = function(commands) {
  const state = {PWD: process.env.PWD, streams: {stdOut:[], stdErr: []}};

  return commands.reduce(function(state, commandWithArgs) {
    const [command, ...args] = commandWithArgs.split(' ');
    const {PWD, stdOut, stdErr} = execute(command, args, state.PWD);

    return {
      PWD, 
      streams: { stdOut: state.streams.stdOut.concat([stdOut]),
        stdErr: state.streams.stdErr.concat([stdErr])
      }
    }
  }, state);
}

exports.evaluate = evaluate;

