let items = document.getElementById("items-group");
let item = document.createElement("li");

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

  let items = document.getElementById("items-group");
  let item = document.createElement("li");
  let text = `Patient name: ${name} Email: ${email} Phone: ${phno} Date: ${date} Time: ${time}`;

  // Task 3 - Add a delete buton and delete functionality
  let deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.className = "deleteButton";

  item.setAttribute("data-email", email);

  item.textContent = text;
  item.addEventListener("click", deleteUser);
  item.appendChild(deleteButton);
  items.appendChild(item);

  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("phno").value = "";
  document.getElementById("tfc-date").value = "";
  document.getElementById("tfc-time").value = "";
}

function deleteUser(event) {
  if (confirm("Are You Sure?")) {
    let li = event.target.parentElement;
    let email = li.getAttribute("data-email");
    localStorage.removeItem(email);
    li.remove();
  }
}
