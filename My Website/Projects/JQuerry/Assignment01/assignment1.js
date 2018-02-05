var globalmeasurement="none";
function calculate(workout) {
    var total = 0;
    var bmr=0;
    var gender = document.getElementById("gender");
    var pounds = document.getElementById("pounds").value;
    var inches = document.getElementById("inches").value;
    var kilograms = document.getElementById("kilograms").value;
    var centimeters = document.getElementById("centimeters").value;
    var age = document.getElementById("age").value;

    if (gender.options[gender.selectedIndex].text == null || gender.options[gender.selectedIndex].text == "Select" || globalmeasurement == "none") {
        alert("Please fill out form before submitting");
    }
    else {
        if (globalmeasurement == "imperial") {
            if (gender.options[gender.selectedIndex].text == "Male") {
                bmr = 66 + (6.2 * pounds) + (12.7 * inches) - (6.76 * age);
            }
            if (gender.options[gender.selectedIndex].text == "Female") {
                bmr = 655.1 + (4.35 * pounds) + (4.7 * inches) - (4.7 * age);
            }
            total = bmr * workout;
            bmr = bmr.toFixed();
            total = total.toFixed();
            document.getElementById("Response").value = "Gender: " + gender.options[gender.selectedIndex].text + "\nPounds: " + pounds + "\nInches: " + inches + "\nAge: " + age + "\nBMR: " + bmr + "\nDetermine Recommended Intake: " + total + "\nMade by Waynell Lovell.\nServer: Sara v210";
        }

        if (globalmeasurement == "metric") {
            if (gender.options[gender.selectedIndex].text == "Male") {
                bmr = 66.5 + (13.75 * kilograms) + (5.003 * centimeters) - (6.755 * age);
            }
            if (gender.options[gender.selectedIndex].text == "Female") {
                bmr = 655.1 + (9.563 * kilograms) + (1.850 * centimeters) - (4.676 * age);
            }
            total = bmr * workout;
            bmr = bmr.toFixed();
            total = total.toFixed();
            document.getElementById("Response").value = "Gender: " + gender.options[gender.selectedIndex].text + "\nKilograms: " + kilograms + "\nCentimeters: " + centimeters + "\nAge: " + age + "\nBMR: " + bmr + "\nDetermine Recommended Intake: " + total + "\nMade by Waynell Lovell.\nServer: Sara v210";
        }
    }
}

function Metric() {
    globalmeasurement = "metric";
}
function Imperial() {
    globalmeasurement = "imperial";
}