
//document.querySelector('.submitButton').addEventListener("click", function(){

function clearSc(){
    document.querySelector('.num1').value = " ";
    document.querySelector('.num2').value = " ";
    document.querySelector('.text-a').value = " ";
}
    

function mult(){
    var a = Number(document.querySelector('.num1').value);
    var b = Number(document.querySelector('.num2').value);
    var c = a*b;
    document.querySelector('.text-a').value = c;
}


function add(){
    var a = Number(document.querySelector('.num1').value);
    var b = Number(document.querySelector('.num2').value);
    var c = a+b;
    document.querySelector('.text-a').value = c;
}
    

function sub(){
    var a = Number(document.querySelector('.num1').value);
    var b = Number(document.querySelector('.num2').value);
    var c = a-b;
    document.querySelector('.text-a').value = c;
}
        

function divi(){
    var a = Number(document.querySelector('.num1').value);
    var b = Number(document.querySelector('.num2').value);
    var c = a/b;
    document.querySelector('.text-a').value = c;
}
