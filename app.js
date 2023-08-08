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

  axios
    .post(
      "https://crudcrud.com/api/1a1019a4e1ce482e9e9445cc88df0d59/appointmentData",
      user
    )
    .then((res) => console.log(res))
    .catch((err) => console.log(err));

  // let userData = JSON.stringify(user);

  // localStorage.setItem(`${user.email}`, userData);

  let items = document.getElementById("items-group");
  let item = document.createElement("li");
  let text = `Patient name: ${name} Email: ${email} Phone: ${phno} Date: ${date} Time: ${time}`;

  // Task 3 - Add a delete buton and delete functionality
  let deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.className = "deleteButton";

  // Task 4 - Add Edit button and Edit functionality

  let editButton = document.createElement("button");
  editButton.textContent = "Edit";
  editButton.className = "editButton";

  item.setAttribute("data-email", email);

  item.textContent = text;

  item.addEventListener("click", deleteUser);
  editButton.addEventListener("click", editUser);

  item.appendChild(deleteButton);
  item.appendChild(editButton);
  items.appendChild(item);

  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("phno").value = "";
  document.getElementById("tfc-date").value = "";
  document.getElementById("tfc-time").value = "";
}

function deleteUser(event) {
  if (event.target.classList.contains("deleteButton")) {
    if (confirm("Are You Sure?")) {
      let li = event.target.parentElement;
      let email = li.getAttribute("data-email");
      localStorage.removeItem(email);
      li.remove();
    }
  }
}

// Task 4 - Edit button function

function editUser(event) {
  if (event.target.classList.contains("editButton")) {
    let li = event.target.parentElement;
    let email = li.getAttribute("data-email");
    let userData = localStorage.getItem(email);
    let user = JSON.parse(userData);
    localStorage.removeItem(email);
    li.remove();

    document.getElementById("name").value = user.name;
    document.getElementById("email").value = user.email;
    document.getElementById("phno").value = user.phno;
    document.getElementById("tfc-date").value = user.date;
    document.getElementById("tfc-time").value = user.time;
  }
}
