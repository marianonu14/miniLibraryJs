import {$, on} from './helper.js';

on($('btn'), 'click', () => {
  console.log('Click Here...');
});

on($('btn-second'), 'click', () => {
  console.log('Click Second Btn...');
});

on($('input'), 'input', (evt)=> {
    console.log(evt.target.value);
})

on($('title'), 'mouseover', () => {
    console.log('Mouse Over...')
})

