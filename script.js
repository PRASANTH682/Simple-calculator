// Assign Vlaue fuction
function init() {
    var num1 = document.getElementById("num1");
    var num2 = document.getElementById("num2");
    var result = document.getElementById("result");
}
// function assign(){
//     var num1 = document.getElementById("num1");
//     var num2 = document.getElementById("num2");
//     var result = document.getElementById("result");
// }
// Add Function
function add(){
    result.innerHTML = parseFloat(num1.value) + parseFloat(num2.value);
    clear();
}
// Subtractioin Function
function sub(){
    init();
    result.innerHTML = parseFloat(num1.value) - parseFloat(num2.value);
    clear();
}
// Multiplecation Function
function mul(){
    init();
    result.innerHTML = parseFloat(num1.value) * parseFloat(num2.value);
    clear();
}
// Division Function
function div(){
    init();
    result.innerHTML = parseFloat(num1.value) / parseFloat(num2.value);
    clear();
}
// Clear Function
function clear(){
    num1.value ="";
    num2.value="";
}
