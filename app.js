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
      "https://crudcrud.com/api/394f3167662f44b7a943abe22e308dbe/appointmentData",
      user
    )
    .then((res) => console.log(res))
    .catch((err) => console.log(err));

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
      let userId = li.getAttribute("data-id");
      axios
        .delete(
          `https://crudcrud.com/api/394f3167662f44b7a943abe22e308dbe/appointmentData/${userId}`
        )
        .then((response) => {
          console.log(response);
          li.remove();
        })
        .catch((err) => console.log(err));
    }
  }
}

// Task 4 - Edit button function

function editUser(event) {
  if (event.target.classList.contains("editButton")) {
    let li = event.target.parentElement;
    let userId = li.getAttribute("data-id");
    li.remove();
    axios
      .get(
        `https://crudcrud.com/api/394f3167662f44b7a943abe22e308dbe/appointmentData/${userId}`
      )
      .then((response) => {
        document.getElementById("name").value = response.data.name;
        document.getElementById("email").value = response.data.email;
        document.getElementById("phno").value = response.data.phno;
        document.getElementById("tfc-date").value = response.datadate;
        document.getElementById("tfc-time").value = response.datatime;

        let updateUSer = {
          name: document.getElementById("name").value,
          email: document.getElementById("email").value,
          phno: document.getElementById("phno").value,
          date: document.getElementById("tfc-date").value,
          time: document.getElementById("tfc-time").value,
        };
        axios.delete(
          `https://crudcrud.com/api/394f3167662f44b7a943abe22e308dbe/appointmentData/${userId}`
        );
      });
  }
}

window.addEventListener("DOMContentLoaded", () => {
  axios
    .get(
      "https://crudcrud.com/api/394f3167662f44b7a943abe22e308dbe/appointmentData"
    )
    .then((response) => {
      console.log(response.data);
      for (var i = 0; i < response.data.length; i++) {
        showUserOnScreen(response.data[i]);
      }
    })
    .catch((err) => console.log(err));
});

function showUserOnScreen(user) {
  let items = document.getElementById("items-group");
  let item = document.createElement("li");
  let text = `Patient name: ${user.name} Email: ${user.email} Phone: ${user.phno} Date: ${user.date} Time: ${user.time}`;

  // Delete buton
  let deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.className = "deleteButton";

  // Edit button
  let editButton = document.createElement("button");
  editButton.textContent = "Edit";
  editButton.className = "editButton";

  item.setAttribute("data-id", user._id);

  item.textContent = text;

  item.addEventListener("click", deleteUser);
  editButton.addEventListener("click", editUser);

  item.appendChild(deleteButton);
  item.appendChild(editButton);
  items.appendChild(item);
}
