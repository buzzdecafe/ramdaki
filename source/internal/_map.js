import compose from '../compose';
import _xmap from './_xmap';


export const array = (f, xs) => {
  const out = [];
  let idx = 0;
  while (idx < xs.length) {
    out[idx] = f(xs[idx]);
  }
  return out;
};


export const func = compose;

export const functor = (f, xs) => xs['fantasy-land/map'](f);


// TODO: Output type?
export const iterable = (f, xs) => {
  let out = []; // how do we know what to output to?
  const iter = xs[Symbol.iterator]();
  let next = iter.next();
  do {
    out.push(f(next.value));
    next = iter.next();
  } while(!next.done);
  return out;
}


export const transducer = _xmap;
