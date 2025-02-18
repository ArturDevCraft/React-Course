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

let person: {
	name: string;
	age: number;
};

person = {
	name: 'Artur',
	age: 35,
};

let people: {
	name: string;
	age: number;
}[];

// Type inference

let course: string | number = 'React - The Complete Guide';

course = 12341;
