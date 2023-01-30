export const $ = (elem) => document.getElementById(elem);
export const on = (elem, fn, callback) => elem.addEventListener(fn, callback);