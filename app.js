// Task 1 - Add Data in local storage

function logFormData(event) {
  event.preventDefault();
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let phno = document.getElementById("phno").value;
  let date = document.getElementById("tfc-date").value;
  let time = document.getElementById("tfc-time").value;

  let user = {
    name: name,
    email: email,
    phno: phno,
    date: date,
    time: time,
  };

  let userData = JSON.stringify(user);

  localStorage.setItem(`${email}`, userData);

  // Task 2 - Show User's Data on Webpage

  let items = document.getElementById("items-group");
  let item = document.createElement("li");
  let text = `Patient name: ${name} Email: ${email} Phone: ${phno} Date: ${date} Time: ${time}`;

  item.textContent = text;

  items.appendChild(item);

  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("phno").value = "";
  document.getElementById("tfc-date").value = "";
  document.getElementById("tfc-time").value = "";
}
