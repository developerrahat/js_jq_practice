function imgOne(){
    document.getElementById("img").src = "./imgs/img1.jpg";
}
function imgTwo(){
    document.getElementById("img").src = "./imgs/img2.jpg";
}

function textChange(){
    document.getElementById("text").innerHTML = Date();
}


// mood change
function darkMood() {
    document.body.style.backgroundColor = "black";


    
    document.getElementById("main-head").style.color= "white";
    document.getElementById("main-head").innerHTML= "Text Color Changed Done";
    document.getElementById("sub-head").style.color= "white";
    document.getElementById("p-color").style.color= "white";

}
function lightMood() {
    document.body.style.backgroundColor = "white";
}



// alert
function alertMessage(){
    window.alert("Hello World");
}


// change text
function changeText() {
    document.getElementById("h1").innerHTML = "Text Changed On Click.Go Back To Click Refresh";
    document.getElementById("h2").innerHTML = "Welcome to ssb";

}

// back
function back() {
    document.getElementById("h1").innerHTML = "Change Text";
    document.getElementById("h2").innerHTML = "Hello World";
}

// text color
function changeColor() {
    document.getElementById("main-head").style.color= "red";
    document.getElementById("main-head").innerHTML= "Text Color Changed Done";
    document.getElementById("sub-head").style.color= "blue";
    document.getElementById("p-color").style.color= "yellow";

}
function prevous() {
    document.getElementById("main-head").style.color= "#000000";
    document.getElementById("main-head").innerHTML= "Change Text Color";
    document.getElementById("sub-head").style.color= "#000000";
    document.getElementById("p-color").style.color= "#000000";

}

// creat column

function creatColumn() {
    document.getElementById("col").style.columnCount = "6";
    document.getElementById("col").style.columnGap ="60px";
    
}
function refresh() {
    document.getElementById("col").style.columnCount = "1";
    document.getElementById("col").style.columnGap ="none";
    
}



// bordeer
function showBorder() {
    document.getElementById("borderShow").style.border = "5px solid red";
    document.getElementById("borderShow").style.backgroundColor = "black";
    document.getElementById("borderShow").style.color = "white";
}


// Light

function onLight() {
    document.getElementById("img1").src ="./imgs/pic_bulbon.gif";
    
}
function offLight() {
    document.getElementById("img1").src ="./imgs/pic_bulboff.gif";
    
}

// fan ghurbe

function onFan() {
    document.getElementById("fanImg").src ="./imgs/fanonn.gif";
    
}
function offFan() {
    document.getElementById("fanImg").src ="./imgs/fanoff.jpg";
    
}


// form Submit

function formSubmit() {
    window.alert("Your form was submited");
    
}
function formFocus() {
    document.getElementById("fname");
    
}


var myName=prompt("Enter your name");
console.log(myName);



// jqery code start
$(document).ready(function () {
    $("button").click(function () {
        $("button").slideUp(2000);
        $("button").slideDown(2000);
    });
});


