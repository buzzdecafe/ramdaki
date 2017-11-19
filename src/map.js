import _curryN from './internal/_curryN';

// want to support:
// 1. Array
// 2. FL Functor
// 3. Pair (i.e. proper list/stream)
// 4. Iterable
// 5. Transducer
export default const map = _curryN(2, function map(f, xs) {
  return (Array.isArray(xs)
    ? _map.array(f, xs)
    : xs['@@fantasy-land/map'] ? _map.functo(f, xs)
    : xs.head && xs.tail       ? _map.pair(f, xs)
    : xs[Symbol.iterator]      ? _map.iterable(f, xs)
    : xs['@@transducer/step']  ? _map.transducer(f, xs)
    : xs; // idk what to do now? so here are your xs back
});
