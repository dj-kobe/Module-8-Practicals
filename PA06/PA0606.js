//Declaring Various variables

conference_name = "codetribe tech conference";

document.getElementById("conference_name").innerHTML = conference_name;

welcome_message = "Welcome to the Codetribe Tech Conference";

document.getElementById("welcome_messsage").innerHTML = welcome_message;

function clickMe() {
  console.log("Clicked");
}

//Validate Form

function ValidateForm() {
  const naam = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const age = document.getElementById("age").value;
  if (naam.length >= 3) {
    alert("It works");
  } else {
    alert("name must contain at least 3 characters");
  }
  if ((email = "")) {
    alert("Email is required");
  } else {
    alert("Email successfully entered");
  }
  if (age >= 18) {
    alert("You are within the age range");
  } else {
    alert("You must be 18 or older");
  }
  if (email == "") {
    alert("Please ensure you don't leave the email field empty");
  }
  if (interests.length === 0) {
    alert("Please select at least one conference interest.");
  }
}

//Retrieving data from an API

const apiUrl = "https://randomuser.me/api/?results=6";

fetch(apiUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });

speakers = {
  name: "Tshepo",
  surname: "Louw",
  age: "23",
  province: "Northern_cape",
  attendanceType: "Physical",
  topic: "Web development",
};

console.log(speakers);

const convertObjectIntoJson = JSON.stringify(speakers);
console.log(convertObjectIntoJson);

speakers = {
  name: "Tshepo",
  surname: "Louw",
  age: "23",
  province: "Northern_cape",
  attendanceType: "Physical",
  topic: "Web development",
};

//Refactoring the code using JQuery

$.ajax({
  url: "https://randomuser.me/api/?results=6",
  method: "Get",
  success: function (data) {
    console.log(data);
  },
  error: function (error) {
    console.log(error);
  },
});

//Handling Asynchronus Javascript tasks

async function getSpeakers() {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    console.log(data);
  } catch (error) {}
}
//Using XMLHttpRequests
const xhr = new XMLHttpRequest();
xhr.open(
  "GET", //GET = retrieve information
  apiUrl, //Where the request must be sent
  true, //true make the request asynchronus
);

//Handle the response
//Onload runs when the server has responded
xhr.onload = function () {
  //check whether the HTTP Request was successful

  if (xhr.status === 200) {
    console.log("Raw JSON", xhr.responseText);
  }
};
