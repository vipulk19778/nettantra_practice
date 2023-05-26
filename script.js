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
    telephoneHome
  );
  var user_telephonemobile = localStorage.setItem(
    "Telephone_Mobile",
    telephoneMobile
  );
  if (
    fullName.replace(/\s/g, "").length <= 0 ||
    dateOfBirth.replace(/\s/g, "").length <= 0 ||
    email.replace(/\s/g, "").length <= 0 ||
    fathersName.replace(/\s/g, "").length <= 0 ||
    mothersName.replace(/\s/g, "").length <= 0 ||
    gender.replace(/\s/g, "").length <= 0 ||
    nationality.replace(/\s/g, "").length <= 0 ||
    homeAddress.replace(/\s/g, "").length <= 0 ||
    city.replace(/\s/g, "").length <= 0 ||
    country.replace(/\s/g, "").length <= 0 ||
    telephoneHome.replace(/\s/g, "").length <= 0 ||
    telephoneMobile.replace(/\s/g, "").length <= 0
  ) {
    alert("Fields can't be empty or can't contain white space");
    return false;
  } else {
    if (telephoneHome.length < 10 || telephoneMobile.length < 10) {
      alert("Digits of telephone number should be atleast 10 digits.");
      return false;
    } else return true;
  }
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

  if (
    hsc_name.replace(/\s/g, "").length <= 0 ||
    hsc_board.replace(/\s/g, "").length <= 0 ||
    hsc_percent.replace(/\s/g, "").length <= 0 ||
    ssc_name.replace(/\s/g, "").length <= 0 ||
    ssc_board.replace(/\s/g, "").length <= 0 ||
    ssc_percent.replace(/\s/g, "").length <= 0 ||
    currentlyPursuing.replace(/\s/g, "").length <= 0 ||
    currentEducational.replace(/\s/g, "").length <= 0 ||
    overallPercent.replace(/\s/g, "").length <= 0 ||
    cuurentBacklog.replace(/\s/g, "").length <= 0
  ) {
    alert("Fields can't be empty or can't contain white space");
    return false;
  } else return true;
}
