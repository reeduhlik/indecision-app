var nameVar = 'Reed';
var nameVar = 'Mike'; // you could create a var again by redefining - can't do it with let
console.log('nameVar', nameVar);

let nameLet = 'Reagan';
nameLet = 'Brian';
console.log(nameLet);

const fullName = 'Reed Uhlik';

//
if(fullName){
    var firstName = fullName.split(' ')[0];
    console.log(firstName);
}

//do have access to firstName out here as a var, but not for const and let