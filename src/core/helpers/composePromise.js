const composePromise = (...fns) => x =>
  fns.reduce((acc, val) => acc.then(val), Promise.resolve(x));

export default composePromise;
