const $ = (elem) => document.getElementById(elem);
const on = (elem, fn, callback) => elem.addEventListener(fn, callback);

export {$, on};