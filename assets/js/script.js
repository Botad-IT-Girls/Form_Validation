const forms = document.getElementById("FormValidation");

const input = document.querySelectorAll("input");
const ErrorMsgs = document.querySelectorAll("span");
const table = document.getElementById("Display-info");
const tableBody = document.getElementById("tBody");

// dob
$(document).ready(function () {
  // Initialize datepicker to field date of birth
  $("#DOB").datepicker();
});

forms.addEventListener("submit", (e) => {
  let isValid = true;
  input.forEach((input) => {
    // first name validate
    const FName = document.getElementById("fName").value;
    if (FName === "" || FName === null) {
      document.getElementById("fName-ErrorMsg").innerHTML =
        "*Pls Enter First Name";
      isValid = false;
    } else if (!isNaN(FName)) {
      document.getElementById("fName-ErrorMsg").innerHTML =
        "*Pls Enter Valid Name";
      isValid = false;
    } else {
      document.getElementById("fName-ErrorMsg").innerHTML = "";
    }

    // Last name validate
    const lName = document.getElementById("lName").value;
    if (lName === "" || lName === null) {
      document.getElementById("lName-ErrorMsg").innerHTML =
        "*pls Enter Last Name";
      isValid = false;
    } else if (!isNaN(lName)) {
      document.getElementById("lName-ErrorMsg").innerHTML = "*Enter Valid Name";
      isValid = false;
    } else {
      document.getElementById("lName-ErrorMsg").innerHTML = "";
    }

    // Gender validate
    const radio = document.querySelector('input[name="Gender"]:checked');
    if (radio === null) {
      document.getElementById("Gender-ErrorMsg").innerHTML =
        "*Pls Select Gender";
      isValid = false;
    } else {
      document.getElementById("Gender-ErrorMsg").innerHTML = "";
    }

    // email-id validate
    const EmailId = document.getElementById("emailId");
    if (EmailId.value === "" || EmailId.value === null) {
      document.getElementById("Email-ErrorMsg").innerHTML =
        "*Pls Enter Email Id";
      isValid = false;
    } else if (
      EmailId.value.indexOf("@") === -1 ||
      EmailId.value.indexOf(".") === -1
    ) {
      document.getElementById("Email-ErrorMsg").innerHTML =
        "*Pls Enter Valid Email-Id";
      isValid = false;
    } else {
      document.getElementById("Email-ErrorMsg").innerHTML = "";
    }

    // mobile no validate
    const MoNumber = document.getElementById("MoNumber");
    if (MoNumber.value === "" || MoNumber.value === null) {
      document.getElementById("MoNumber-ErrorMsg").innerHTML =
        "*pls Enter Mobile No";
      isValid = false;
    } else if (isNaN(MoNumber.value)) {
      document.getElementById("MoNumber-ErrorMsg").innerHTML =
        "*Pls Enter Valid Number";
      isValid = false;
    } else if (MoNumber.value.length < 10 || MoNumber.value.length > 10) {
      document.getElementById("MoNumber-ErrorMsg").innerHTML =
        "*Pls Enter 10 Digits";
      isValid = false;
    } else {
      document.getElementById("MoNumber-ErrorMsg").innerHTML = "";
    }

    // password validate
    const Password = document.getElementById("Password");
    if (Password.value === "" || Password.value === null) {
      document.getElementById("Password-ErrorMsg").innerHTML =
        "*Pls Enter Password";
      isValid = false;
    } else if (Password.value.length < 8) {
      document.getElementById("Password-ErrorMsg").innerHTML =
        "*Pls Enter Minimum 8 Character";
      isValid = false;
    } else {
      document.getElementById("Password-ErrorMsg").innerHTML = "";
    }

    // confirm password validate
    const ConPassword = document.getElementById("CPass");
    if (ConPassword.value === "" || ConPassword.value === null) {
      document.getElementById("Cpass-ErrorMsg").innerHTML =
        "*Pls Enter Confirm Password";
      isValid = false;
    } else if (Password.value !== ConPassword.value) {
      document.getElementById("Cpass-ErrorMsg").innerHTML =
        "*Pls Enter Same Password";
      isValid = false;
    } else {
      document.getElementById("Cpass-ErrorMsg").innerHTML = "";
    }

    // favriout food validate
    const checkBoxs = document.querySelectorAll('input[type="checkbox"]');
    let ischecked = false;

    checkBoxs.forEach((checkbox) => {
      if (checkbox.checked) {
        ischecked = true;
      }
    });
    if (!ischecked) {
      document.getElementById("CheckBox-ErrorMsg").innerHTML =
        "*Pls Select Favriout Food";
      isValid = false;
    } else {
      document.getElementById("CheckBox-ErrorMsg").innerHTML = "";
    }
  });

  if (!isValid) {
    e.preventDefault();
  }
});
