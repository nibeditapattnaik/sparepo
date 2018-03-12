var student = {
    name : "",
    type : "student"
};

document.addEventListener('DOMContentLoaded', contenntLoaded);

function contenntLoaded(event) {
    document.getElementById('name').addEventListener("keyup", keyup);
}

function keyUp(event) {
    calculateNumericOutput();
}

function calculateNumericOutput() {
    student.name = documentgetElementById('name').value;


    var totalNamevalue = 0;
    for( var i = 0; i < student.name.length; i++) {
        totalNameValue += student.name.charCodeAt(i);
    }
    //Insert Result into Page
    var output = "Totl Numeric value of person's name is " + totalNameValue;
    document.getElementById('output').innerText = output;
}