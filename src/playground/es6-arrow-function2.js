//arguments object - no longer bound with arrow functions
//this keyword - no longer bound

//basically, es5 functions bind their own this keyword, arrow functions don't

const add = (a, b) => {
    return a + b;
}

console.log(add(51, 1));

const user = {
    name: "Reed",
    cities: ['Las Vegas', 'Sandy Hook', 'Phoenix'], //es6 arrow functions use the parent's this keyword
    printPlacesLived() {
        return this.cities.map((city) => this.name + ' has lived in ' + city);
    }
    
}

console.log(user.printPlacesLived());

//challenge
const multiplier = {
    numbers: [3, 5, 7],
    multiplyBy: 5,
    multiply(){
        return this.numbers.map((num) => num * multiplyBy);
    }
}

console.log(multiplier.multiply());