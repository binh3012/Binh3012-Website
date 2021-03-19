

//alert("B");

function onConfirmName(){

var name = document.getElementById("name").value;
name.replace(/\s+/g, '');
if (name.length > 1){
var textContent = "";
document.getElementById("pWelcome").textContent = "Hi, " + name + ". Thank you to visit my website";
} else {
alert("Warning: Dont joke!!! Please insert a valid name or leave.");
}
}
