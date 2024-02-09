"use strict"

var listType = 0;
var lastText = "";
function clock(){
    var date = new Date();
    var hours = date.getHours();
    var mm = date.getMinutes();
    var ss = date.getSeconds();
    var currentDay = date.getDay();


    let clockVar = document.getElementById("clocker");

    if(mm < 10){
        mm = "0" + mm;
    }
    if(ss < 10){
        ss = "0" + ss;
    }
    clockVar.innerText =  hours + "." + mm + "." + ss;

    let t = setTimeout(function(){ clock() }, 100);
}

function addToList() {
    console.log("addToList function called"); // Check if function is called
    var list = document.getElementById("todoList");
    console.log(list); // Check if list is correctly retrieved
    var inputText = document.getElementById("Input").value;
    console.log(inputText); // Check if inputText is correctly retrieved

    var listItem = document.createElement("li");
    listItem.style.backgroundColor = "rgba(255, 255, 255, 0.5)";
    listItem.style.marginRight = "40px";
    listItem.style.borderRadius = "10px";
    listItem.innerHTML = '<p class="text" style="text-align: left; margin-left: 10px; margin-right: 10px;"> - ' + inputText + '</p>';

    list.appendChild(listItem);

    document.getElementById("todoInput").value = ""; // Clear the input field
}

function clearList(){
    var list = document.getElementById("todoList");
    list.innerHTML = "";
}


clock()