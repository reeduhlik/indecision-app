const square = function (x){
    return x*x;

} 

console.log(square(8));

const squareArrow = (x) => {
    return x*x;
}

console.log(squareArrow(9));

const squareArrow2 = (x) => x * x;

//Challenge - Use arrow functions
//getFirstName

const getFirstName = (firstName) => firstName.split(' ')[0];