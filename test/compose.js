const jsv = require('jsverify');
const eq = require('./shared/eq');

const compose = require('../src/compose');

describe('compose', function() {

  const multiply = a => b => a * b;
  const map = require('../src/map');

  it('performs right-to-left function composition', function() {
    //  f :: Number -> ([Number] -> [Number])
    var f = compose(map)(multiply);

    eq(f.length, 1);
    eq(f(10)([1, 2, 3]), [10, 20, 30]);
  });

  describe('compose properties', function() {

    jsv.property('composes two functions', jsv.fn(), jsv.fn(), jsv.nat, function(f, g, x) {
      return R.equals(compose(f)(g)(x), f(g(x)));
    });

    jsv.property('associative',  jsv.fn(), jsv.fn(), jsv.fn(), jsv.nat, function(f, g, h, x) {
      var result = f(g(h(x)));
      var fg = compose(f)(g);
      var gh = compose(g)(h);
      return [
        compose(f)(gh)(x),
        compose(fg)(h)(x),
        compose(f)(gh)(x),
        compose(fg)(h)(x)
      ].every(r => r === result);
    });
  });
});
