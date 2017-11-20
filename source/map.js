import _curryN from './internal/_curryN';


// want to support:
// 1. Array
// 2. FL Functor
// 3. Transducer

function _map(f, xs) {
  return (
    Array.isArray(xs)          ? _map.array(f, xs)
    : xs['@@fantasy-land/map'] ? _map.functor(f, xs)
    : typeof xs === 'function' ? _map.func(f, xs)
    : xs['@@transducer/step']  ? _map.transducer(f, xs)
    : _map.unknown(f, xs) // idk what to do now? so here are your xs back. Throw?
  );
}
_map.sig = ['Functor f => (a -> b) -> f a -> f b'];


export default map = _curryN(2, _map);
