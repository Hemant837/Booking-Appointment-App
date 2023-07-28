function logFormData(event) {
  event.preventDefault();
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let phno = document.getElementById("phno").value;
  let date = document.getElementById("tfc-date").value;
  let time = document.getElementById("tfc-time").value;

  localStorage.setItem("Name", name);
  localStorage.setItem("Email", email);
  localStorage.setItem("Phno", phno);
  localStorage.setItem("Date", date);
  localStorage.setItem("Time", time);

  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("phno").value = "";
  document.getElementById("tfc-date").value = "";
  document.getElementById("tfc-time").value = "";
}
