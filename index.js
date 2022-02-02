let num1;
let operation;
let num2;
let change = false;
let result;

document.querySelectorAll(".number").forEach((td) => {
    td.addEventListener("click", function () {
        if (change) {
            num1 = this.innerHTML;
            console.log("num1" , num1)
        
            change = false;
        } else {
            num2 = this.innerHTML;
            console.log("num2" , num2)
            change = true;
        }
    });
});

document.querySelectorAll(".operation").forEach((td) => {
    td.addEventListener("click", function () {
        operation = this.innerHTML;
        change = !change;
        console.log('operation:' , operation);
    });
});

document.getElementById("operate").addEventListener("click", function () {
    switch (operation) {
        case "+":
            result = parseInt(num1) + parseInt(num2);
            break;
        case "-":
            result = parseInt(num1) - parseInt(num2);
            break;
        case "x":
            result = parseInt(num1) * parseInt(num2);
            break;
        case "/":
            result = parseInt(num1) / parseInt(num2);
            break;
        default:
            break;
    }
    document.getElementById("display").innerHTML = result.toString();
    num1 = 0;
    num2 = 0;
    change = false;
    console.log("operation: ", operation);
});

