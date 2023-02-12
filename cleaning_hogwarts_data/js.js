"use strict";

window.addEventListener("DOMContentLoaded", start);

const allStudents = [];

function start() {
  console.log("ready");

  loadJSON();
}

function loadJSON() {
  fetch("students.json")
    .then(response => response.json())
    .then(jsonData => {
      // when loaded, prepare objects
      prepareObjects(jsonData);
    });
  displayList();
}

function prepareObjects(jsonData) {
  jsonData.forEach(jsonObject => {
    const Student = {
      firstName: "",
      lastName: "",
      middleName: "",
      nickName: "Null",
      image: "",
      house: "",
    };

    /* putter data ind i container */
    const student = Object.create(Student);

    /* First name */
    let fullnameString = jsonObject.fullname;
    let result = "";
    // Removes spaces in front of first names
    let trimmedString1 = fullnameString.trimStart();

    result = trimmedString1.substring(0, trimmedString1.indexOf(" "));
    // If the fullname is Leanne, just show the fullname
    if (fullnameString === "Leanne") {
      result = fullnameString;
    }
    // Capitalizes the first letter of the first name
    student.firstName = result.charAt(0).toUpperCase() + result.slice(1).toLowerCase();

    console.log(student.firstName);

    /* Student middlename */
    let middlename = "";
    let trimmedString3 = "";
    let result3 = "";
    // Trims the whole name
    trimmedString3 = fullnameString.trim();
    // Trims the spaces around the middlename
    result3 = trimmedString3
      .substring(trimmedString3.indexOf(" "), trimmedString3.lastIndexOf(" "))
      .trim();

    middlename = result3;
    // Capitalizes the first letter of the middlename
    student.middleName = middlename.charAt(0).toUpperCase() + middlename.slice(1).toLowerCase();

    // If the student doesn't have middlename, return blank
    if (student.middleName === "" || student.middleName === student.firstName) {
      student.middleName = "";
    }
    // If the student has a nickname, return blank
    else if (student.middleName.includes(`"`)) {
      student.middleName = "";
    }
    // Capitalizes the names before and after "-"
    else if (student.middleName.includes("-")) {
      student.middleName =
        middlename.charAt(indexOf("-") + 1).toUpperCase() +
        middlename.slice(indexOf("-") + 2).toLowerCase();
    }
    console.log(student.middleName);

    /* House names */
    let houseName = jsonObject.house;
    // Removes spaces from the housenames
    houseName = houseName.trimStart();
    houseName = houseName.trimEnd();
    // Capitalizes the first letter of the housename
    student.house = houseName.charAt(0).toUpperCase() + houseName.slice(1).toLowerCase();

    console.log(student.house);

    /* Student lastname */
    let trimmedString2 = "";
    let result2 = "";
    // Trim the end of fullname property string, so no spaces after last letter
    trimmedString2 = fullnameString.trimEnd();
    // Make substring starting from last read space +1
    result2 = trimmedString2.substring(trimmedString2.lastIndexOf(" ") + 1);
    student.lastName = result2.charAt(0).toUpperCase() + result2.slice(1).toLowerCase();
    // If lastname has - in it
    if (student.lastName.includes("-")) {
      student.lastName =
        // Start by getting first part before -
        result2.substring(0, result2.lastIndexOf("-") + 1) +
        // Then get first char after - and ONLY THE FIRST CHAR, make capital
        result2
          .substring(result2.lastIndexOf("-") + 1, result2.lastIndexOf("-") + 2)
          .toUpperCase() +
        // Get rest of lastname in lowercase
        result2.substring(result2.lastIndexOf("-") + 2).toLowerCase();
    }
    console.log(student.lastName);

    /* Student nickname */
    // Finds the names inside of quotationmarks
    let result4 = fullnameString.substring(
      fullnameString.indexOf(`"`),
      fullnameString.lastIndexOf(`"`) + 1
    );
    // Removes the quotationmarks
    student.nickName = result4.replaceAll(`"`, ``);
    console.log(student.nickName);

    /* Student Picture */

    // Creates a new image object
    let imageSrc = new Image(100, 100);

    // Defines the student image as imageSrc
    student.image = imageSrc;
    // Makes the last name lower case
    let lastnameL = student.lastName.toLowerCase();
    // Takes the first letter of the firstname and makes it lower case
    let firstnameL = student.firstName.charAt(0).toLowerCase();
    // Defines the image src
    imageSrc.src = "images/" + lastnameL + "_" + firstnameL + ".png";

    // Fjerner billede fra Leanne
    if (lastnameL === "leanne") {
      imageSrc.src = "";
    }
    // Adds the full firstname to the the students with matching lastnames
    else if (lastnameL.includes("patil")) {
      imageSrc.src = "images/" + lastnameL + "_" + student.firstName.toLowerCase() + ".png";
    }
    // Pushes the objects into the array
    else allStudents.push(student);
    console.log(allStudents);
  });

  displayList();
}

function displayList() {
  // fjerner listen
  document.querySelector("#list tbody").innerHTML = "";

  // laver den nye liste
  allStudents.forEach(displayStudent);
}

function displayStudent(student) {
  // laver en klon af den nye liste via templaten
  const clone = document.querySelector("template#student").content.cloneNode(true);

  // bestemmer hvad der skal vises
  clone.querySelector("[data-field=firstName]").textContent = student.firstName;
  clone.querySelector("[data-field=middleName]").textContent = student.middleName;
  clone.querySelector("[data-field=lastName]").textContent = student.lastName;
  clone.querySelector("[data-field=nickName]").textContent = student.nickName;
  clone.querySelector("#studentImage").src = student.image;
  clone.querySelector("[data-field=house]").textContent = student.house;

  // append clone to list
  document.querySelector("#list tbody").appendChild(clone);
}
