// import { apiKey } from './util.js';
// import apiKey2 from './util.js'; //import default value
// import * as util from './util.js';
// import { apiKey, abc as content } from './util.js';

// console.log(apiKey);
// console.log(apiKey2);
// console.log(util.abc, util.apiKey, util.default);
// console.log(content);

// Destructing
const names = ['Artur', 'Kate'];
const [firstName, secondName] = names;

console.log(firstName, secondName);

const personalData = {
	name: 'Artur',
	age: 35,
};

const { name, age } = personalData;
const { name: userName, age: userAge } = personalData;

console.log(name, age);
console.log(userName, userAge);

function storeOrder(order) {
	localStorage.setItem('id', order.id);
	localStorage.setItem('currency', order.currency);
}

function storeOrder2({ id, currency }) {
	// destructuring
	localStorage.setItem('id', id);
	localStorage.setItem('currency', currency);
}
