let greet: (name:string, age:number)=>void;
greet  = (name:string, age:number) =>{
    console.warn(`Hello ${name} you are ${age} years old`);
}

greet('Mark',23);

let attack:(damage: number, health:number)=>number;
attack= (damage: number, health:number)=>{
    return health - damage;
}

let attackk = attack(10,100);
console.log(`Beast current health is ${attackk}`)

type man ={
    name: string, 
    age: number
};

let greeet:(obj: man)=>void;
greeet = (human:man)=>{
    console.log(`${human.name} you are of age ${human.age}`)
}
let humann: man ={
    name:'Mark',
    age:24
};
greeet(humann);
