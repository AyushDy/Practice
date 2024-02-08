
const person1={
    name:"sidhant",
    age:69,
    favDrink:"coffee",
    address: {
        hostel: "newton house",
        room: "G.F. 5"
    }
}

const person2={
    name:"guddu",
    age:34,
    address:{
        hostel:'newton house',
        room: "G.F. 4"
    }
}

//destructuring
const beta= {name,age} = person1; 
console.log(age);
console.log(name);


//assigning a new name 
const alpha= {name: fakeName, age: realAge} = person1;
console.log(fakeName);
console.log(realAge);


//destructuring rest 
const sigma= {name,...wrrest}= person2;
console.log(wrrest);

//destructuring nested objects
const alpha1=  {address:{room,hostel}}=person1;
console.log(room)
console.log(hostel)

//person2 overwriting person1 and put in the object person3
const person3={...person1,...person2};
console.log(person3);


//destructuring objects as arguments
function print({name,age,favDrink}){
    return (`Name of the user is ${name}. Age is ${age}. Favourite drink is ${favDrink}.`)
}

console.log(print(person1))



