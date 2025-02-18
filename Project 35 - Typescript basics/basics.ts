// Primitives: number, string, boolean
// More complex types: arrays, objects
// Function types, parameters

// Primitives

let age: number = 24;

age = 12;

let userName: string;

userName = 'Artur';

let isInstructor: boolean;

isInstructor = false;

// More complex types

let hobbies: string[];

hobbies = ['Sport', 'Cooking'];

type Person = {
	name: string;
	age: number;
};

let person: Person;

person = {
	name: 'Artur',
	age: 35,
};

let people: Person[];

// Type inference

let course: string | number = 'React - The Complete Guide';

course = 12341;

// Function & types

function add(a: number, b: number) {
	return a + b;
}

function print(value: any) {
	console.log(value);
}

// Generics

function insertAtBegining<T>(array: T[], value: T) {
	const newArray = [value, ...array];
	return newArray;
}

const demoArray = [1, 2, 3];

const updatedArray = insertAtBegining(demoArray, -1); // [-1,1,2,3]
const stringArray = insertAtBegining(['a', 'b', 'c'], 'd');

// updatedArray[0].split('');
