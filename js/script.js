const form = document.getElementById("form");
const email = document.getElementById("email");
const resultContainer = document.getElementById("success");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  resultContainer.style.display = "block";
  document.getElementById("signUp").style.display = "none";
  validateInputs();
});

const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = message;
  errorDisplay.style.display = "block";
  inputControl.classList.add("error");
};

const setSuccess = (element) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = "";
  inputControl.classList.remove("error");
};

const isValidEmail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

const validateInputs = () => {
  const emailValue = email.value.trim();

  if (!isValidEmail(emailValue)) {
    setError(email, "Valid email required");
  } else {
    setSuccess(email);
  }
};
