console.log("Hello World 2");

var x = 1;
console.log(typeof(x));
x = " Kenneth ";
console.log(typeof(x));
console.log(x);

function make1(x, y){
    console.log(x);
}

function make2(x, y, z){
    make1(x+1);
    console.log(typeof(x));
    if(x == null){
        console.log("x is null !");
    }

    if(y == null){
        console.log("y is null and undefined !");
    }

    if(typeof(y) === 'undefined'){
        console.log("y is undefined !");
    }
    console.log(y);
    console.log(z);
}

make2(null,null,100);
make2('xxx',null,100);
make2('aaa');


function make3(fn1){
    console.log(fn1);
    fn1();
}

function fn1(){
    console.log("Hello World");
}
make3(fn1);

str1 = "Apple";
console.log(str1);
str2 = 'An ' + str1

console.log(str2);
str2 = `
        xxx An ${str1}
        \n test gello !
       `
console.log(str2);

var x  = true;
var yy = false;

if(x){
    console.log("true")
}

if(!yy){
    console.log("false");
}

g_x = 100;
function make5(){
    let l_x = 10;
    console.log(`x inside > ${x}`);
}

make5();
console.log(`x from outside > ${x}`);

var fruit = ['Apple', false, 'Orange', 1 , 'durian'];
console.log(fruit[0]);
console.log(fruit[1]);
fruit.push('PineApple');
console.log(fruit);
fruit.pop();
console.log(fruit);
fruit.unshift(1);
console.log(fruit);
fruit.unshift('Watermelon');
console.log(fruit);
fruit.shift();

console.log(fruit);

fruit.sort();
console.log(fruit);

var numbers1 = [4,7,8,9,1];
numbers1.sort(function(a,b){
    console.log("a " + a);
    console.log("b " + b);
    console.log(b-a);
    return b - a;
})
console.log(numbers1);
var numbers1 = [4,7,8,9,1];
var numbers2 = [4,77,81,9,1];

result = numbers1.concat(numbers2);
console.log(result);
//result.sort();
result.sort(function(a,b){
    return b - a;
})
console.log(result);

var person = {
    firstName : 'Kenneth',
    lastName: "Phang",
    age: 18,
    'my house': 'amk',
    gender: 'M'
}

console.log(person.age);
console.log(person.gender);
console.log(person['age']);
console.log(person['my house']);
