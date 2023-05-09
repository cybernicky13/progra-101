 export interface Person {
    name: string;
    age: number;
    isActive: boolean;
}

let nicolas: Person = {
    name: 'nicolas',
    age: 21,
    isActive: true
}

let jessica = {
    name: 'jessica',
    age: 22,
    isActive: true
}

let joshy = {
    name: 'joshy',
    age: 18,
    isActive: true
}

let people: Person[] = [nicolas, jessica, joshy];

for (let i = 0; i <= people.length - 1; i++) {
    let person = people[i];
    console.log(person.name + ' ' + person.age);
}

