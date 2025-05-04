function section1(cc) {
    let term1 = cc / 4;
    let term2 = -2 * cc;
    let term3 = -1;
  
    return term1 + term2 + term3;
  }
  
  function section2(yy) {
    let term1 = yy * 5;
    return term1 / 4;
  }
  
  function section3(mm) {
    let term1 = 26;
    let term2 = mm + 1;
    let term3 = term1 * term2;
    return term3 / 10;
  }
  
  function submitForm() {
    console.log("form submited");
    let genderInput = document.getElementById("gender_input").value;
    let dob = document.getElementById("date_input").value;
    let akan_name_el = document.getElementById("akan_name");
  
    if (!genderInput || !dob) {
      return;
    }
  
    let CC = dob.slice(0, 2);
    console.log("CC is", CC);
    let YY = dob.slice(2, 4);
    console.log("YY is ", YY);
    let MM = dob.slice(5, 7);
    let DD = dob.slice(8, 10);
    console.log("MM is ", MM);
    console.log("DD is ", DD);
  
    CC = parseInt(CC);
    YY = parseInt(YY);
    MM = parseInt(MM);
    DD = parseInt(DD);
  
    let sol = parseInt(section1(CC) + section2(YY) + section3(MM) + DD);
    console.log("initial", sol);
    sol = sol % 7;
  
    console.log(sol);
  
    let name = "";
  
    if (sol === 0) {
      if (genderInput === "male") {
        name = "Kwasi";
      } else {
        name = "Akosua";
      }
    } else if (sol === 1) {
      if (genderInput === "male") {
        name = "Kwadwo";
      } else {
        name = "Adwoa";
      }
    } else if (sol === 2) {
      if (genderInput === "male") {
        name = "Kwabena";
      } else {
        name = "Abenaa";
      }
    } else if (sol === 3) {
      if (genderInput === "male") {
        name = "Kwaku";
      } else {
        name = "Akua";
      }
    } else if (sol === 4) {
      if (genderInput === "male") {
        name = "Yaw";
      } else {
        name = "Yaa";
      }
    } else if (sol === 5) {
      if (genderInput === "male") {
        name = "Kofi";
      } else {
        name = "Afua";
      }
    } else if (sol === 6) {
      if (genderInput === "male") {
        name = "Kwaku";
      } else {
        name = "Akua";
      }
    } else {
      if (genderInput === "male") {
        name = "Kwame";
      } else {
        name = "Ama";
      }
    }
  
    akan_name_el.innerHTML = name;
  }