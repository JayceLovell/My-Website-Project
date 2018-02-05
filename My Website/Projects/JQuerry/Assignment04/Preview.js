window.onload = getinfo();

function getinfo(){
var firstname = window.opener.document.forms["registerForm"]["FName"].value;
var lastname = window.opener.document.forms["registerForm"]["LName"].value;
var info1 = window.opener.document.forms["registerForm"]["Address"].value;
var info2 = window.opener.document.forms["registerForm"]["City"].value;
var info3 = window.opener.document.forms["registerForm"]["PCode"].value;
var info4 = window.opener.document.getElementById("Province").options[window.opener.document.getElementById("Province").selectedIndex].text;
var info5 = window.opener.document.forms["registerForm"]["Age"].value;
var info6 = window.opener.document.forms["registerForm"]["Email"].value;
var info0 = firstname + "" + lastname;
alert("All information you have entered.");
document.getElementById("info0").innerHTML = info0;
document.getElementById("info1").innerHTML = info1;
document.getElementById("info2").innerHTML = info2;
document.getElementById("info3").innerHTML = info3;
document.getElementById("info4").innerHTML = info4;
document.getElementById("info5").innerHTML = info5;
document.getElementById("info6").innerHTML = info6;
}
