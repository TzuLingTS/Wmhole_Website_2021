"use strict";

//URL轉址及取得參數
let emailInput = document.getElementById("email_input");
emailInput.value = getUrlVal("email");

function getUrlVal(val) {
  var query = window.location.search.substring(1);
  var vars = query.split("&");
  for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split("=");
    if (pair[0] == val) {
      return pair[1];
    }
  }
  return false;
}

//Back to Previous Page
function historyBack() {
  window.history.back(-1);
}

//Submit
let required = document.getElementsByClassName("required");
let checkboxRequired = document.getElementById("checkbox_required");
let uncheckMark = document.getElementById("uncheck_mark");
let i;
function formRequiredValue() {
  let isIllegal = false;
  for (i = 0; i < required.length; i++) {
    if (required[i].value == undefined || required[i].value == "") {
      required[i].style.border = "solid 2px #C84031";
      isIllegal = true;
    } else if (checkboxRequired.checked != true) {
      uncheckMark.style.textDecoration = "solid underline #C84031 3px";
      isIllegal = true;
    }
  }
  if (!isIllegal) {
    signupSubmit();
  }
}

//Form Submit Popup Window
let submitSection = document.querySelector(".submit_popup_section");
let signupSection = document.querySelector(".sign_up_section");

function signupSubmit() {
  submitSection.classList.remove("hidden");
  signupSection.classList.add("hidden");
}

//Send Email
