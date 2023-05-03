import _ from 'lodash-es';

import { sum } from './js/math';


import "./css/style.css";
import "./css/title.less";

console.log("Hello World");
console.log(sum(20, 30));


console.log(_.join(["abc", "cba"], "-"));

const titleEl = document.createElement('div');
titleEl.className = "title";
titleEl.innerHTML = "Hello Vite";
document.body.appendChild(titleEl);


