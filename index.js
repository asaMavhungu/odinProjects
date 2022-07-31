console.log("Hello, World!")

function add7(num1, num2){
    console.log(num1*num2)
}

let answer = parseInt(prompt("Please enter the number"));

for(let i = 1; i <= answer; i++){
    if (i %15 === 0){
        console.log("fizzBuzz");
    }else if (i % 3 === 0){
        console.log("fizz");
    }else if (i % 5 === 0){
        console.log("buzz");
    }else {
        console.log(i);
    }

}

console.log("Hello, World!")