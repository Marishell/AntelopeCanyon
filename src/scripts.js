function subscibed() {
  let name = prompt("What is your name?");
  let email = prompt("What is your email?");

  if (name + email) {
    alert("Hi " + name + "! We'll be in touch! 😉");
  } else {
    alert("Sorry, didn't catch that! Try entering your name and email again.");
  }
}
let checkOut = document.querySelector("button");
checkOut.addEventListener("click", subscibed);
