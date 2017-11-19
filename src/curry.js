import _curryN from './internal/curryN';


export default const curry = f => _curryN(f.length, f);
