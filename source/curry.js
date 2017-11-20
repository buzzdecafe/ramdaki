import _curryN from './internal/curryN';


export default curry = f => _curryN(f.length, f);
