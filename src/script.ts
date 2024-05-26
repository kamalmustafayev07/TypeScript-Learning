let myName: string = "Kamal Mustafayev";
myName = "Nigga";

console.log(myName);

let color: any = 5;

color = 'nigga';
color = true;

console.log(color);


type Person = {
    name: string,
    age: number
}

let person: Person = {
    name: 'Kamal',
    age: 16
}

console.log(person);



function addNumber(num: number): number {
    return num + 1;
}

const result = addNumber(3);
console.log(result);


const double = (x: number, y: number): number => x * y;
const res = double(2, 10);
console.log(res);



function greeting(person: string = 'Anonymous'): string {
    return `Hello ${person}`;
}

const greeting1 = greeting();
console.log(greeting1);
const greeting2 = greeting('Kamal');
console.log(greeting2);

function greetingSecond(person: string = 'Anonymous'): void {
    console.log('Hello Person');
}

greetingSecond();


//NEVER KEYWORD

function throwError(msg: string): never {
    throw new Error(msg);
}

//ARRAY CREATION 

const names: Array<string> = ['Alice', 'Malena', 'Charlie'];

const objectsArray: object[] = [{ name: 'kamal', age: 19 }, { name: 'Ferid', age: 19 }];

console.log(names);
console.log(objectsArray);

//MULTI-DIMENSIONAL ARRAY

const multiArray: number[][] = [[1, 2], [2, 3], [3, 4]];


//OBJECT CREATIONS

const personObject: { firstName: string; lastName: string; age: number; } = {
    firstName: 'Kamal',
    lastName: 'Mustafayev',
    age: 19
}

console.log(personObject);

function printUser(): { name: string; age: number; location: string; } {
    return {
        name: 'Kamal',
        age: 19,
        location: 'Baku'
    }
}

console.log(printUser());

//TYPE ALIASES

type User = {
    name: string,
    age: number,
    location: string
}

const printUserInfo = (user: User) => {
    return user.name;
}

const printUserInfoResult = printUserInfo({ name: 'Kamal', age: 19, location: 'Baku' });
console.log(printUserInfoResult);


//OPTIONAL PROPERTIES

type UserOptional = {
    name: string,
    age: number,
    location: string,
    email?: string
}

const userOptional1: UserOptional = { name: 'Kamal', age: 19, location: 'Baku' };
const userOptional2: UserOptional = { name: 'Kamal', age: 19, location: 'Baku', email: 'kamalmustafayev23062@gmail.com' };

console.log(userOptional1.name + ' ' + userOptional2.email);

//READONLY PROPERTY

type UserReadonly = {
    name: string,
    age: number,
    readonly location: string,
    email?: string
}

const userReadonly: UserReadonly = { name: 'Kamal', age: 19, location: 'Baku' };

//INTERSECTION TYPES

type Someone = {
    name: string,
    phone: string
}
type Employee = {
    id: number,
    title: string,
}

type SomeoneAndEmployee = Someone & Employee;

const someoneAndEmployee: SomeoneAndEmployee = { name: 'Kamal', phone: '+994709912212', id: 1, title: 'Frontend Developer' };
console.log(someoneAndEmployee.title);

//UNIONS

let password: string | number = 20;
password = '20';

const items: (number | string)[] = [1, 2, 3, 4, 'Kamal', 'Ferid'];
console.log(items);


//LITERAL TYPES

let number: 1 | 2 | 3;

number = 2;
number = 3;
number = 1;

console.log(number);

//TUPLES

let myTuple: [number, string] = [1, 'Kamal'];

console.log(myTuple[0]);
console.log(myTuple[1]);

//DESTRUCTING INDIVIDUAL ELEMENT

let [first, second] = myTuple;

console.log('');
console.log(first);
console.log(second);


//ENUMS

enum WeatherConditions {
    Sunny = 'sunny',
    Cloudy = 'cloudy',
    Rainy = 'rainy',
    Snowy = 'snowy'
}

const currentWeather = WeatherConditions.Cloudy;

console.log(currentWeather);
console.log(WeatherConditions.Sunny);

//CLASS PROPERTIES ANNOTATIONS

class Car {
    model: string;
    year: number;

    constructor(model: string, year: number) {
        this.model = model;
        this.year = year;
    }
}

const bmwM5 = new Car('BMW M5', 2024);


//ACCESS MODIFIERS

class Animal {
    private name: string;
    private age: number;
    protected species: string;

    constructor(name: string, age: number, species: string) {
        this.name = name;
        this.age = age;
        this.species = species;
    }

    public getName(): string {
        return this.name;
    }

    public getAge(): number {
        return this.age;
    }

    public setName(name: string): void {
        this.name = name;
    }

    public setAge(age: number): void {
        this.age = age;
    }
}

class Dog extends Animal {
    constructor(name: string, age: number, species: string) {
        super(name, age, species);
    }

    public getInfo(): string {
        return `${this.getName()} is a ${this.species} and is ${this.getAge()}`;
    }
}

const dog = new Dog('Pluto', 2, 'Golden Retriever');

console.log(dog.getInfo());


//GETTERS AND SETTERS

class MyClass {
    private _myProperty: number = 0;

    get myProperty(): number {
        return this._myProperty;
    }

    set myProperty(value: number) {
        if (value < 0) {
            throw new Error('Value cannot be negative');
        }
        this._myProperty = value;
    }
}


const myClassObject: MyClass = new MyClass();

console.log(myClassObject.myProperty);
myClassObject.myProperty = 10;
console.log(myClassObject.myProperty);


//INTERFACE

interface Home {
    location: string;
    type: string;
}

const villa: Home = {
    location: 'Baku',
    type: 'Villa'
}

interface MathFunction {
    (x: number, y: number): number;
}

const substract: MathFunction = (a, b) => a - b;
const addition: MathFunction = (a, b) => a + b;

console.log(villa.location);
console.log(substract(5, 2));
console.log(addition(5, 2));

interface Vehicle {
    start(): void;
    stop(): void;
}

class Bike implements Vehicle {
    start(): void {
        console.log('Bike is Starting');
    }
    stop(): void {
        console.log('Bike is stopping');
    }
}

const bike = new Bike();
bike.start();
bike.stop();

interface MovieDetails {
    readonly name: string;
    ratings: number;
    printMovieInfo?(): string;
}

class Movie implements MovieDetails {
    readonly name: string;
    ratings: number;
    printMovieInfo(): string {
        return this.name + ' ' + this.ratings;
    }
    constructor(name: string, ratings: number) {
        this.name = name;
        this.ratings = ratings;
    }
}

const movie = new Movie('Inception', 8.8);
console.log(movie.printMovieInfo()); // Output: Inception 8.8

//DECLARATION MERGING

interface CarInterface {
    brand: string;
    start(): void;
}

interface CarInterface {
    model: string;
    stop(): void;
}

const myCar: CarInterface = {
    brand: 'BMW',
    model: 'M5',
    start(): void {
        console.log('Starting...');
    },
    stop(): void {
        console.log('Stopping');
    }
}

myCar.start();
myCar.stop();

//GENERICS

function printLine<TO, TT>(x: TO, y: TT) {
    console.log(`${x} +  ${y}`);
}

printLine<number, number>(1, 2);
printLine<string, number>('Kamal', 19);

function uniqueDataTypes<T>(item: T, defaultValue: T): [T, T] {
    return [item, defaultValue];
}

interface DogUniqueTypes {
    name: string;
    breed: string;
}

const dog1 = uniqueDataTypes<DogUniqueTypes>({ name: 'Buddy', breed: 'Labrador' }, { name: 'Chucky', breed: 'From street xD' });

console.log(dog1);


function getRandomKeyValuePair<T>(obj: { [key: string]: T }): {
    key: string;
    value: T;
} {
    const keys = Object.keys(obj);
    const randKey = keys[Math.floor(Math.random() * keys.length)];
    return { key: randKey, value: obj[randKey] };
}

const stringObject = { a: 'apple', b: 'banana', c: 'cherry' };
const resRand = getRandomKeyValuePair<string>(stringObject);
console.log(resRand);

function filterArray<T>(array:T[],condition:(item:T)=>boolean):T[]{
    return array.filter(condition);
}

const numberArray=[1,2,3,4,5,6,7,8,9,10];
console.log(filterArray<number>(numberArray,(num)=>num%2==0));

//TYPE NARROWING

//with typeof

type MyType=string | number;

const example = (value:MyType) : void =>{
    if(typeof value==='string')
        {
            console.log(value.toUpperCase());
        }
    else{
        console.log(value.toFixed(2));
    }
}


example('kamal');
example(2.569);

//with instanceof

class DogNarrowing{
    bark():void{
        console.log('barking');
    }
}

class CatNarrowing{
    meow():void{
        console.log('meow');
    }
}


function animalSound(animal:DogNarrowing | CatNarrowing):void{
    if(animal instanceof DogNarrowing){
        animal.bark();
    }else{
        animal.meow();
    }
}

const myDog=new DogNarrowing();
const myCat=new CatNarrowing();

animalSound(myDog);
animalSound(myCat);

//intersection types
