// toMatch = aib1c
//given a_b ; candidates = [p, q, r, i]
//given a_b_c
//blank1  [p, q, i]
//blank2 [1, 2, 3]

const toMatch = 'aib1c';

const fill = function(c1, c2, candidates) {
  for(const candidate of candidates) {
    const pattern = c1 + candidate + c2;

    if(toMatch.includes(pattern)) {
      return pattern;
    }
  }

  return 'error'
}

const getCandidates = function(pattern) {
  switch(pattern) {
    case 'a': return ['p', 'q', 'r', 'i'];
    case 'aib': return [2, 3, 1, 4];
    default: console.log('error');
  }
}




const joinComponents = function() {
  const components = ['a', 'b', 'c'];
  let pattern = components[0];

  for(let index = 1; index < components.length; index++) {

    const currentComponent = components[index];
    const candidates = getCandidates(pattern);
    pattern = fill(pattern, currentComponent, candidates);
  }

  return pattern;

}

console.log(joinComponents());
