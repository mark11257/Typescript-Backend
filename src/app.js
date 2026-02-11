var greet;
greet = function (name, age) {
    console.warn("Hello ".concat(name, " you are ").concat(age, " years old"));
};
greet('Mark', 23);

 var attack = function (damage, health) {
    return health - damage;
};
var attackk = attack(10, 100);
console.log("Beast current health is ".concat(attackk));
var greeet;
greeet = function (human) {
    console.log("".concat(human.name, " you are of age ").concat(human.age));
};
var humann = {
    name: 'Mark',
    age: 24
};
greeet(humann);

// let btn = document.querySelector(".button1");

//  function changeText(){
  
//     btn.innerHTML = "YAYYy";
//  }
//   function changeColor(){
//     btn.style.backgroundColor = "black";
//  }

// btn.addEventListener("click", function(e) {
//     e.preventDefault();
//     changeText();
//     changeColor(); 
// });

let bar = document.getElementById("tofrom");
bar.addEventListener("focus", function(){
    bar.style.backgroundColor = "#ff00e4";
});
bar.addEventListener("blur", function(){
    bar.style.backgroundColor = "white";
});

var warning;
warning = function() {
    console.warn("this is a warning from a function");
};

warning();

let warnning= (name, context)=>
{
    console.warn(`this is a warning ${name} from an arrow function about ${context}`);
};

warnning("Mark", "Testing JS Course");

let btn  = document.querySelector(".button1");
console.log(btn);

let click = function(){
    btn.style.backgroundColor = "black";
    btn.style.color = "white";
    btn.innerHTML = "Success";
};
btn.addEventListener("click",function(){
    click();
});

