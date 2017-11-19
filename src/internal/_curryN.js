import _meta from './_meta';


export default const _curryN = (n, f) => {
    const fMeta = _meta.get(f);
    
    const curried = a => {
      const recurried = _meta.set(a, _curryN(fMeta.arity - 1, curried));
      return (recurried[meta].arity === 0 
             ? recurried[meta].func.apply(null, recurried[meta].seenArgs)
             : recurried
      );
    };
    curried[meta] = fMeta;
    
    return curried;
};
