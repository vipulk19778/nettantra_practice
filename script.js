const form = document.querySelector("form");
const nextBtn = form.querySelector(".nextBtn");
const backBtn = form.querySelector(".backBtn");
const allInput = form.querySelectorAll(".first input");

// nextBtn.addEventListener("click", () => {
//   allInput.forEach((input) => {
//     if (input.value !== "") {
//       form.classList.add("secActive");
//     } else {
//       form.classList.remove("secActive");
//     }
//   });
// });

// backBtn.addEventListener("click", () => form.classList.remove("secActive"));

// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   const inputs = [];
//   form.querySelectorAll("input").forEach((input) => {
//     const { name, value } = input;
//     inputs.push({ name, value });
//   });
//   console.log(inputs);
//   form.reset();
// });

// document.getElementById("contactForm").addEventListener("submit", save());

function formData1() {
  var fullName = document.getElementById("fullName").value;
  var dateOfBirth = document.getElementById("dateOfBirth").value;
  var email = document.getElementById("email").value;

  var fathersName = document.getElementById("fathersName").value;
  var mothersName = document.getElementById("mothersName").value;
  var gender = document.getElementById("gender").value;

  var nationality = document.getElementById("nationality").value;
  var homeAddress = document.getElementById("homeAddress").value;
  var city = document.getElementById("city").value;

  var country = document.getElementById("country").value;
  var telephoneHome = document.getElementById("telephoneHome").value;
  var telephoneMobile = document.getElementById("telephoneMobile").value;

  //localstorage

  var f_name = localStorage.setItem("Full_Name", fullName);
  var date_of_birth = localStorage.setItem("Date", dateOfBirth);
  var e_mail = localStorage.setItem("Email", email);

  var fathers_name = localStorage.setItem("Fathers_Name", fathersName);
  var mothers_name = localStorage.setItem("Mothers_Name", mothersName);
  var user_gender = localStorage.setItem("Gender", gender);

  var user_nationality = localStorage.setItem("Nationality", nationality);
  var user_homeAddress = localStorage.setItem("HomeAddress", homeAddress);
  var user_city = localStorage.setItem("City", city);

  var user_country = localStorage.setItem("Country", country);
  var user_telephonehome = localStorage.setItem(
    "Telephone_Home",
    telephonehome
  );
  var user_telephonemobile = localStorage.setItem(
    "Telephone_Mobile",
    telephonemobile
  );
}

function formData2() {
  var hsc_name = document.getElementById("hsc_name").value;
  var hsc_board = document.getElementById("hsc_board").value;
  var hsc_percent = document.getElementById("hsc_percent").value;

  var ssc_name = document.getElementById("ssc_name").value;
  var ssc_board = document.getElementById("ssc_board").value;
  var ssc_percent = document.getElementById("ssc_percent").value;

  var currentlyPursuing = document.getElementById("currentlyPursuing").value;
  var currentEducational = document.getElementById("currentEducational").value;
  var overallPercent = document.getElementById("OverallPercent").value;
  var cuurentBacklog = document.getElementById("cuurentBacklog").value;

  //localstorage

  var user_hsc = localStorage.setItem("HSC_Name", hscname);
  var user_hscboard = localStorage.setItem("HSC_Board", hscboard);
  var user_hsepercentage = localStorage.setItem(
    "HSC_Percentage",
    hscpercentage
  );

  var user_ssc = localStorage.setItem("SSC_Name", sscname);
  var user_sscboard = localStorage.setItem("SSC_Board", sscboard);
  var user_sscpercentage = localStorage.setItem(
    "SSC_Percentage",
    sscpercentage
  );

  var user_currentlypursuing = localStorage.setItem(
    "Currently_Pursuing",
    currentlypursuing
  );
  var user_currenteducationinstitutionname = localStorage.setItem(
    "Current_Education_Institution_Name",
    currentEducational
  );
  var user_overall = localStorage.setItem("Overall_Percent", overallPercent);
  var user_backlogs = localStorage.setItem("Backlogs", cuurentBacklog);
}

function formData3() {
  var photo = document.getElementById("photo").document;
  var hsc_marksheet = document.getElementById("hsc_marksheet").document;
  var ssc_marksheet = document.getElementById("ssc_marksheet").document;
  var all_marksheet = document.getElementById("all_marksheet").document;

  //localstorage
  var user_photo = localStorage.setItem("Photo", photo);
  var user_hsc_marksheet = localStorage.setItem("HSC_Marksheet", hsc_marksheet);
  var user_ssc_marksheet = localStorage.setItem("SSC_Marksheet", ssc_marksheet);
  var user_all_marksheet = localStorage.setItem("All_Marksheet", all_marksheet);
}
