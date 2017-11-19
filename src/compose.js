import _curryN from './internal/curryN';


export default const compose = _curryN(3, function compose(f, g, x) { return f(g(x)); });
