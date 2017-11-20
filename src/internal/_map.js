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

export const transducer = _xmap;

export const unknown = (f, xs) => {
  throw new TypeError('Provided argument is not mappable');
};