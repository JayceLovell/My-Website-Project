//Waynell Lovell 300833478
var formValidity = true;
var miss = 0;
var num = true;

function validateForm() {
    var x = document.forms["registerForm"]["FName"].value;
    if (x == null || x == "") {
        document.getElementById("FNamemiss").innerHTML="First Name Missing";
        miss++;
    }
    else
    {
        document.getElementById("FNamemiss").innerHTML = "";
    }
    var x = document.forms["registerForm"]["LName"].value;
    if (x == null || x == "") {
        document.getElementById("LNamemiss").innerHTML = "No Last Name?";
        miss++;
    }
    else
    {
        document.getElementById("LNamemiss").innerHTML = "";
    }
    var x = document.forms["registerForm"]["Address"].value;
    if (x == null || x == "") {
        document.getElementById("Addressmiss").innerHTML = "where do you live?";
        miss++;
    }
    else
    {
        document.getElementById("Addressmiss").innerHTML = "";
    }
    var x = document.forms["registerForm"]["City"].value;
    if (x == null || x == "") {
        document.getElementById("Citymiss").innerHTML = "Which City are you in?";
        miss++;
    }
    else
    {
        document.getElementById("Citymiss").innerHTML = "";
    }
    var x = document.forms["registerForm"]["PCode"].value;
    var regex = new RegExp(/^[ABCEGHJKLMNPRSTVXY]\d[ABCEGHJKLMNPRSTVWXYZ]( )?\d[ABCEGHJKLMNPRSTVWXYZ]\d$/i);
    if (regex.test(x))
        document.getElementById("PCodemiss").innerHTML = "";
    else
    {
        miss++;
        document.getElementById("PCodemiss").innerHTML = "Postal Code not valid";
    }

    var x = document.getElementById("Province");																												//Waynell Lovell 300833478
    if (x.options[x.selectedIndex].text == null || x.options[x.selectedIndex].text == "Chose an Province") {                                                        
        document.getElementById("Provincemiss").innerHTML = "Which part of canada your from?";
        miss++;
    }
    else
    {
        document.getElementById("Provincemiss").innerHTML = "";
    }
    var x = document.forms["registerForm"]["Age"].value;
    if (x == null || x == "") {
        document.getElementById("Agemiss").innerHTML = "Please Enter an Age(Number)";
        miss++;
    }
    else if(x<18)
    {
        document.getElementById("Agemiss").innerHTML = "You must be 18 or Older to be a member.";
        miss++;
    }
    else
    {
        document.getElementById("Agemiss").innerHTML = "";
    }
    var x = document.forms["registerForm"]["Password"].value
    var y = document.forms["registerForm"]["Cpassword"].value

    if (x == null || x == "") {
        document.getElementById("Passwordmiss").innerHTML = "Please enter a password";
        miss++;
        num = false;
    }
    else {
        num = true;
    }
    if (num)
    {
        var passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
        if (x.match(passw)) {
            num = true;
        }
        else {
            num = false;
            miss++;
            document.getElementById("Passwordmiss").innerHTML = "Please Enter a Password with Atleast Capital, a number and 6 characters in lenght";
        }
    }
        if (num) {
            document.getElementById("Passwordmiss").innerHTML = "";
            miss = 0;
        }
    if (x != y) {
        document.getElementById("Cpasswordmiss").innerHTML = "Passwords do not match.";
        miss++;
    }
    else {
        document.getElementById("Cpasswordmiss").innerHTML = "";
    }
    var x = document.forms["registerForm"]["Email"].value;
    if (validateEmail(x)) {
        document.getElementById("Emailmiss").innerHTML = "";
    } else {
        miss++;
        document.getElementById("Emailmiss").innerHTML = "Email not valid";
    }
    
    if (miss > 0) {
        alert("We have found a few errors in you membership form.")
        miss = 0;
    }
    else {
        MakePreview();
    }
}

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}
function MakePreview() {

    var btn = document.createElement("BUTTON");
    var submit=document.createElement("INPUT");
    var text1 = document.createTextNode("Signup");
    var text2 = document.createTextNode("Preview");
    var button = document.getElementById("SignUp");

    button.parentNode.removeChild(button);
    
    submit.setAttribute("id", "SignUp");
    submit.setAttribute("type","Submit");
    submit.setAttribute("value","Submit");
    submit.appendChild(text1);
    document.getElementById("buttons").appendChild(submit);
    
    btn.setAttribute("onclick", "OpenPreview();");
    btn.setAttribute("id", "Previewbtn");
    btn.setAttribute("value", "Preview");
    btn.setAttribute("type", "button");
    btn.setAttribute("name", "cmdPreview");
    btn.appendChild(text2);
    document.getElementById("buttons").appendChild(btn);
}
function OpenPreview(){
var propertyWidth = 960;
   var propertyHeight  = 600;
   var winLeft = ((screen.width - propertyWidth) / 2);
   var winTop = ((screen.height - propertyHeight) / 2);
   var winOptions = "width=960,height=600";
   winOptions += ",left=" + winLeft;
   winOptions += ",top=" + winTop;
   var previewWindow = window.open("Preview.html","Previewwin", winOptions);
   previewWindow.focus();

}
function Submit() {
    alert("You have register for Membership");
}

//Waynell Lovell 300833478