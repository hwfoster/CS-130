const addTheNumbers = (ev) => {
    // Your code here...
    let num1 = document.querySelector("#num1").value;
    
    let num2 = document.querySelector("#num2").value;
    
    let sum = Number(num1) + Number(num2);

    document.querySelector("#answer").innerHTML = sum;

}

const subtractTheNumbers = (ev) => {
    let num1 = document.querySelector("#num1").value;
    
    let num2 = document.querySelector("#num2").value;
    
    let sum = Number(num1) - Number(num2);

    document.querySelector("#answer").innerHTML = sum;
}