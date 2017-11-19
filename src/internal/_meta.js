const key = Symbol('@@ramda/meta');

const initMeta = f => ({ func: f, arity: f.length, seenArgs: [] });

export get = f => f[meta] || initMeta(f);

export set = (arg, f) => {
    const fMeta = getMeta(f);
    f[meta] = {
          func: fMeta.func,
          arity: fMeta.arity - 1,
          seenArgs: fMeta.seenArgs.concat(arg)
        };
    return f;
};
