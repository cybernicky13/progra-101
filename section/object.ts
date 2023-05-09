export let person = {
    name: 'Nicolas',
    age: 21,
    isActive: true,
    hobbies: ['games','anime'],
    toString() {
        let objectString = this.name + ' ' + this.age + ' ' + this.hobbies;
        console.log(objectString);
    }
}

// console.log(person.age);
// person.toString();

let car = {
    brand: 'AUDI',
    model: 'A4',
    plate: 1307
}

let smartTV = {
    brand: 'Samsung',
    iches: 70,
    color: 'Black'
}

let youtubeVideo = {
    isActive: false,
    likes: 13000,
    dislikes: 50
}

console.log(car, smartTV, youtubeVideo);