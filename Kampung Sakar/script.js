// window.onload = function() {
//     var pageIcons = document.getElementsByClassName("page-icon");
//     for (var i = 0; i < pageIcons.length; i++) {
//       pageIcons[i].addEventListener("mouseenter", function() {
//         this.style.backgroundColor = "rgba(255, 255, 255, 0.8)";
//       });
//       pageIcons[i].addEventListener("mouseleave", function() {
//         this.style.backgroundColor = "white";
//       });
//     }
//   };
  const loginForm = document.getElementById("login-form");

loginForm.addEventListener("submit", function(event) {
  event.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  if (username === "mouri12" && password === "1234567") {
    window.location.href = "manage.html";
  } else {
    alert("Incorrect username or password");
  }
});
function showPopup() {
  if(confirm("Thank you for the table reservation you made! Your Reservation Ticket has been sent to Your Email. If You want to print or save PDF File of this page, please click 'OK'"))
  {
    window.print();
  }
}
