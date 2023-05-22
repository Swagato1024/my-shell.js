const {describe} = require('node: test');
const {deepStrictEqual, it} = require('assert');

describe('ls', function() {
  it('should list directories', function() {
    deepStrictEqual(ls(), 
      [
        /Users/swagatochakraborty/workspace/javaScript/nodeJs/my-shell.js/src/apna-bash
      ]
    );
  });
});
