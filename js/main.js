'use strict';

var checkWszystkie = document.getElementById("wszystkie-zgody");
var checkZgoda_1 = document.getElementById("zgoda-marketingowa-1");
var checkZgoda_2 = document.getElementById("zgoda-marketingowa-2");


var inputName = document.getElementById("name");
var inputEmail = document.getElementById("e-mail");
var inputWszystkieZgody = document.getElementById("WszystkieZgody");




document.getElementById("wyslij").addEventListener("click", validateForm);


function checkWszystkieChange() {

    if (checkWszystkie.checked) {
        checkZgoda_1.checked = true;
        checkZgoda_2.checked = true;
        checkZgoda_1.disabled = true;
        checkZgoda_2.disabled = true;



    } else {
        checkZgoda_1.checked = false;
        checkZgoda_2.checked = false;
        checkZgoda_1.disabled = false;
        checkZgoda_2.disabled = false;
    }

}

checkWszystkie.addEventListener("change", checkWszystkieChange);




function validateForm(e) {


    var textInputs = document.querySelectorAll('input[type=text]');
    console.log(textInputs);
    var firstAgreement = document.getElementById('zgoda-marketingowa-1');

    for (var i = 0; i < textInputs.length; i++) {
        if (textInputs[i].value == "") {
            e.preventDefault();

            var x = document.createElement("p");
            x.innerHTML = "To pole jest wymagane";
            textInputs[i].parentNode.replaceChild(x, textInputs[i].nextSibling);


        } else {
            
        }
    }

}