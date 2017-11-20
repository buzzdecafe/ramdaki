import _curryN from './internal/curryN';


function _compose(f, g, x) { return f(g(x)); }
_compose.sig = ['(b -> c) -> (a -> b) -> a -> c'];

export default compose = _curryN(3, _compose);
