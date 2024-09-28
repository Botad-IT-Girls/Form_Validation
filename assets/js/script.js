const form = document.getElementById("FormValidation");
const table = document.getElementsByClassName("Display-info");
const tableBody = document.getElementById("tBody");

// date picker
$(document).ready(function () {
  $("#dob").datepicker({
    dateFormat: "dd-mm-yy",
  });
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const firstName = document.getElementById("first_name").value;
  const lastName = document.getElementById("last_name").value;
  const dob = document.getElementById("dob").value;
  const university = document.getElementById("university").value;
  const gender = document.querySelector('input[name="Gender"]:checked');
  const emailId = document.getElementById("email_id").value;
  const mobileNumber = document.getElementById("mobile_no").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirm_password").value;
  const fevFood = document.querySelectorAll('input[type="checkbox"]:checked');
  const msg = document.getElementById("msg").value;

  let isValid = true;

  // first name validate
  if (firstName === "" || firstName === null) {
    document.getElementById("first_name_errormsg").innerHTML =
      "*Pls Enter First Name";
    isValid = false;
  } else if (!isNaN(firstName)) {
    document.getElementById("first_name_errormsg").innerHTML =
      "*Pls Enter Valid Name";
    isValid = false;
  } else {
    document.getElementById("first_name_errormsg").innerHTML = "";
    document.getElementById("fname").innerHTML = firstName;
  }

  // Last name validate
  if (lastName === "" || lastName === null) {
    document.getElementById("last_name_errormsg").innerHTML =
      "*pls Enter Last Name";
    isValid = false;
  } else if (!isNaN(lastName)) {
    document.getElementById("last_name_errormsg").innerHTML =
      "*Enter Valid Name";
    isValid = false;
  } else {
    document.getElementById("last_name_errormsg").innerHTML = "";
    document.getElementById("lname").innerHTML = lastName;
  }

  // date of birth
  if (dob === "" || dob === null) {
    document.getElementById("dob_errormsg").innerHTML =
      "*pls Enter Date of Birth";
    isValid = false;
  } else {
    document.getElementById("dob_errormsg").innerHTML = "";
    document.getElementById("Dob").innerHTML = dob;
  }

  // Select Uni
  if (university === "") {
    document.getElementById("university_errormsg").innerHTML =
      "*Pls Select University";
    isValid = false;
  } else {
    document.getElementById("university_errormsg").innerHTML = "";
    document.getElementById("Uni").innerHTML = university;
  }

  // Gender validate
  if (gender === null) {
    document.getElementById("gender_errormsg").innerHTML = "*Pls Select Gender";
    isValid = false;
  } else {
    document.getElementById("gender_errormsg").innerHTML = "";
    document.getElementById("gen").innerHTML = gender.value;
  }

  // mobile no validate
  if (mobileNumber === "" || mobileNumber === null) {
    document.getElementById("mobile_no_errormsg").innerHTML =
      "*pls Enter Mobile No";
    isValid = false;
  } else if (isNaN(mobileNumber)) {
    document.getElementById("mobile_no_errormsg").innerHTML =
      "*Pls Enter Valid Number";
    isValid = false;
  } else if (mobileNumber.length < 10 || mobileNumber.length > 10) {
    document.getElementById("mobile_no_errormsg").innerHTML =
      "*Pls Enter 10 Digits";
    isValid = false;
  } else {
    document.getElementById("mobile_no_errormsg").innerHTML = "";
    document.getElementById("mob_no").innerHTML = mobileNumber;
  }

  // email-id validate
  if (emailId === "" || emailId === null) {
    document.getElementById("email_id_errormsg").innerHTML =
      "*Pls Enter Email Id";
    isValid = false;
  } else if (emailId.indexOf("@") === -1 || emailId.indexOf(".") === -1) {
    document.getElementById("email_id_errormsg").innerHTML =
      "*Pls Enter Valid Email-Id";
    isValid = false;
  } else {
    document.getElementById("email_id_errormsg").innerHTML = "";
    document.getElementById("emailid").innerHTML = emailId;
  }

  // password validate
  if (password === "" || password === null) {
    document.getElementById("password_errormsg").innerHTML =
      "*Pls Enter Password";
    isValid = false;
  } else if (password.length < 8) {
    document.getElementById("password_errormsg").innerHTML =
      "*Pls Enter Minimum 8 Character";
    isValid = false;
  } else {
    document.getElementById("password_errormsg").innerHTML = "";
    document.getElementById("Password").innerHTML = password;
  }

  // confirm password validate
  if (confirmPassword === "" || confirmPassword === null) {
    document.getElementById("confirm_password_errormsg").innerHTML =
      "*Pls Enter Confirm Password";
    isValid = false;
  } else if (password !== confirmPassword) {
    document.getElementById("confirm_password_errormsg").innerHTML =
      "*Pls Enter Same Password";
    isValid = false;
  } else {
    document.getElementById("confirm_password_errormsg").innerHTML = "";
    document.getElementById("con_pass").innerHTML = confirmPassword;
  }

  // favriout food validate
  let favFoodItems = [];
  fevFood.forEach((checkbox) => {
    ischecked = true;
    favFoodItems.push(checkbox.value);
  });
  if (fevFood.length === 0) {
    document.getElementById("food_errormsg").innerHTML =
      "*Pls Select Favriout Food";
    isValid = false;
  } else {
    document.getElementById("food_errormsg").innerHTML = "";
    document.getElementById("fev_food").innerHTML = favFoodItems.join(", ");
  }

  // msg validate
  if (msg === "") {
    document.getElementById("msg_errormsg").innerHTML =
      "*Pls Enter Your Massage";
    isValid = false;
  } else {
    document.getElementById("msg_errormsg").innerHTML = "";
    document.getElementById("Massage").innerHTML = msg;
  }

  if (isValid) {
    document.querySelector("table").classList.remove("hide");
  }
});
