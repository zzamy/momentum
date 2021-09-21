//grab
const loginForm = document.querySelector(".login-form");
const loginInput = document.querySelector(".login-form input");
const greeting = document.querySelector("#greeting");

//string
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

//function
function onLoginSubmit(event) {
  event.preventDefault();
  const username = loginInput.value;
  loginForm.classList.add(HIDDEN_CLASSNAME);
  console.log(username);
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
}

function paintGreetings(username) {
  greeting.classList.remove(HIDDEN_CLASSNAME);
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  let greetingChoice = hours;
  if ((hours > 4) & (hours < 12)) {
    greetingChoice = "Good morning";
  } else if ((hours >= 12) & (hours <= 18)) {
    greetingChoice = "Good afternoon";
  } else if ((hours > 18) & (hours <= 24)) {
    greetingChoice = "Good evening";
  } else if ((hours > 0) & (hours <= 4)) {
    greetingChoice = "Good night";
  }
  greeting.innerText = `${greetingChoice}, ${username}!`;
}

const savedUserName = localStorage.getItem(USERNAME_KEY);

if (savedUserName === null) {
  //show the form
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  //show the greeting
  paintGreetings(savedUserName);
}
