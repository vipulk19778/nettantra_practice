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

  var user_hsc = localStorage.setItem("HSC_Name", hsc_name);
  var user_hscboard = localStorage.setItem("HSC_Board", hsc_board);
  var user_hsepercentage = localStorage.setItem("HSC_Percentage", hsc_percent);

  var user_ssc = localStorage.setItem("SSC_Name", ssc_name);
  var user_sscboard = localStorage.setItem("SSC_Board", ssc_board);
  var user_sscpercentage = localStorage.setItem("SSC_Percentage", ssc_percent);

  var user_currentlypursuing = localStorage.setItem(
    "Currently_Pursuing",
    currentlyPursuing
  );
  var user_currenteducationinstitutionname = localStorage.setItem(
    "Current_Education_Institution_Name",
    currentEducational
  );
  var user_overall = localStorage.setItem("Overall_Percent", overallPercent);
  var user_backlogs = localStorage.setItem("Backlogs", cuurentBacklog);
}
