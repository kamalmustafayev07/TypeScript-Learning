"use strict";
let myName = "Kamal Mustafayev";
myName = "Nigga";
console.log(myName);
let color = 5;
color = 'nigga';
color = true;
console.log(color);
let person = {
    name: 'Kamal',
    age: 16
};
console.log(person);
function addNumber(num) {
    return num + 1;
}
const result = addNumber(3);
console.log(result);
const double = (x, y) => x * y;
const res = double(2, 10);
console.log(res);
function greeting(person = 'Anonymous') {
    return `Hello ${person}`;
}
const greeting1 = greeting();
console.log(greeting1);
const greeting2 = greeting('Kamal');
console.log(greeting2);
function greetingSecond(person = 'Anonymous') {
    console.log('Hello Person');
}
greetingSecond();
//NEVER KEYWORD
function throwError(msg) {
    throw new Error(msg);
}
//ARRAY CREATION 
const names = ['Alice', 'Malena', 'Charlie'];
const objectsArray = [{ name: 'kamal', age: 19 }, { name: 'Ferid', age: 19 }];
console.log(names);
console.log(objectsArray);
//MULTI-DIMENSIONAL ARRAY
const multiArray = [[1, 2], [2, 3], [3, 4]];
//OBJECT CREATIONS
const personObject = {
    firstName: 'Kamal',
    lastName: 'Mustafayev',
    age: 19
};
console.log(personObject);
function printUser() {
    return {
        name: 'Kamal',
        age: 19,
        location: 'Baku'
    };
}
console.log(printUser());
const printUserInfo = (user) => {
    return user.name;
};
const printUserInfoResult = printUserInfo({ name: 'Kamal', age: 19, location: 'Baku' });
console.log(printUserInfoResult);
const userOptional1 = { name: 'Kamal', age: 19, location: 'Baku' };
const userOptional2 = { name: 'Kamal', age: 19, location: 'Baku', email: 'kamalmustafayev23062@gmail.com' };
console.log(userOptional1.name + ' ' + userOptional2.email);
const userReadonly = { name: 'Kamal', age: 19, location: 'Baku' };
const someoneAndEmployee = { name: 'Kamal', phone: '+994709912212', id: 1, title: 'Frontend Developer' };
console.log(someoneAndEmployee.title);
//UNIONS
let password = 20;
password = '20';
const items = [1, 2, 3, 4, 'Kamal', 'Ferid'];
console.log(items);
//LITERAL TYPES
let number;
number = 2;
number = 3;
number = 1;
console.log(number);
//TUPLES
let myTuple = [1, 'Kamal'];
console.log(myTuple[0]);
console.log(myTuple[1]);
//DESTRUCTING INDIVIDUAL ELEMENT
let [first, second] = myTuple;
console.log('');
console.log(first);
console.log(second);
//ENUMS
var WeatherConditions;
(function (WeatherConditions) {
    WeatherConditions["Sunny"] = "sunny";
    WeatherConditions["Cloudy"] = "cloudy";
    WeatherConditions["Rainy"] = "rainy";
    WeatherConditions["Snowy"] = "snowy";
})(WeatherConditions || (WeatherConditions = {}));
const currentWeather = WeatherConditions.Cloudy;
console.log(currentWeather);
console.log(WeatherConditions.Sunny);
//CLASS PROPERTIES ANNOTATIONS
class Car {
    constructor(model, year) {
        this.model = model;
        this.year = year;
    }
}
const bmwM5 = new Car('BMW M5', 2024);
//ACCESS MODIFIERS
class Animal {
    constructor(name, age, species) {
        this.name = name;
        this.age = age;
        this.species = species;
    }
    getName() {
        return this.name;
    }
    getAge() {
        return this.age;
    }
    setName(name) {
        this.name = name;
    }
    setAge(age) {
        this.age = age;
    }
}
class Dog extends Animal {
    constructor(name, age, species) {
        super(name, age, species);
    }
    getInfo() {
        return `${this.getName()} is a ${this.species} and is ${this.getAge()}`;
    }
}
const dog = new Dog('Pluto', 2, 'Golden Retriever');
console.log(dog.getInfo());
//GETTERS AND SETTERS
class MyClass {
    constructor() {
        this._myProperty = 0;
    }
    get myProperty() {
        return this._myProperty;
    }
    set myProperty(value) {
        if (value < 0) {
            throw new Error('Value cannot be negative');
        }
        this._myProperty = value;
    }
}
const myClassObject = new MyClass();
console.log(myClassObject.myProperty);
myClassObject.myProperty = 10;
console.log(myClassObject.myProperty);
const villa = {
    location: 'Baku',
    type: 'Villa'
};
const substract = (a, b) => a - b;
const addition = (a, b) => a + b;
console.log(villa.location);
console.log(substract(5, 2));
console.log(addition(5, 2));
class Bike {
    start() {
        console.log('Bike is Starting');
    }
    stop() {
        console.log('Bike is stopping');
    }
}
const bike = new Bike();
bike.start();
bike.stop();
class Movie {
    printMovieInfo() {
        return this.name + ' ' + this.ratings;
    }
    constructor(name, ratings) {
        this.name = name;
        this.ratings = ratings;
    }
}
const movie = new Movie('Inception', 8.8);
console.log(movie.printMovieInfo()); // Output: Inception 8.8
const myCar = {
    brand: 'BMW',
    model: 'M5',
    start() {
        console.log('Starting...');
    },
    stop() {
        console.log('Stopping');
    }
};
myCar.start();
myCar.stop();
//GENERICS
function printLine(x, y) {
    console.log(`${x} +  ${y}`);
}
printLine(1, 2);
printLine('Kamal', 19);
function uniqueDataTypes(item, defaultValue) {
    return [item, defaultValue];
}
const dog1 = uniqueDataTypes({ name: 'Buddy', breed: 'Labrador' }, { name: 'Chucky', breed: 'From street xD' });
console.log(dog1);
function getRandomKeyValuePair(obj) {
    const keys = Object.keys(obj);
    const randKey = keys[Math.floor(Math.random() * keys.length)];
    return { key: randKey, value: obj[randKey] };
}
const stringObject = { a: 'apple', b: 'banana', c: 'cherry' };
const resRand = getRandomKeyValuePair(stringObject);
console.log(resRand);
function filterArray(array, condition) {
    return array.filter(condition);
}
const numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(filterArray(numberArray, (num) => num % 2 == 0));
const example = (value) => {
    if (typeof value === 'string') {
        console.log(value.toUpperCase());
    }
    else {
        console.log(value.toFixed(2));
    }
};
example('kamal');
example(2.569);
//with instanceof
class DogNarrowing {
    bark() {
        console.log('barking');
    }
}
class CatNarrowing {
    meow() {
        console.log('meow');
    }
}
function animalSound(animal) {
    if (animal instanceof DogNarrowing) {
        animal.bark();
    }
    else {
        animal.meow();
    }
}
const myDog = new DogNarrowing();
const myCat = new CatNarrowing();
animalSound(myDog);
animalSound(myCat);
//intersection types
