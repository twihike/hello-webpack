import './hello.css';
import 'bulma'; // import sass
// unnecessary: import _ from 'lodash';
import hellojs from './hello';
import hellots from './hello.ts';
import json from './hello.json';
import txt from './hello.txt';
import csv from './hello.csv';
import xml from './hello.xml';

console.log('---- js');
console.log(_.join(['index', 'js'], '.'));
hellojs();

console.log('---- ts');
hellots();

console.log('---- json');
console.log(json);

console.log('---- txt');
console.log(txt);

console.log('---- csv');
console.log(csv);

console.log('---- xml');
console.log(xml);

console.log('----');
