const form = document.querySelector(".survey-form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let firstName = document.getElementById("first-name").value;
  let lastName = document.getElementById("last-name").value;
  let genderInputs = document.getElementsByName("gender");
  let gender;
  for (let input of genderInputs) {
    if (input.checked) {
      gender = input.value;
      break;
    }
  }
  let choiceOFFood = document.getElementById("choice-of-food").value;
  let address = document.getElementById("address").value;
  let pincode = document.getElementById("pincode").value;

  let table = document.getElementById("survey-table");
  let row = table.insertRow();
  let cell1 = row.insertCell(0);
  let cell2 = row.insertCell(1);
  let cell3 = row.insertCell(2);
  let cell4 = row.insertCell(3);
  let cell5 = row.insertCell(4);
  let cell6 = row.insertCell(5);


  cell1.innerText = firstName;
  cell2.innerText = lastName;
  cell3.innerText = gender;
  cell4.innerText = choiceOFFood;
  cell5.innerText = address;
  cell6.innerText = pincode;


  form.reset();
});
