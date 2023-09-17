// document.getElementById("submitButton").addEventListener("click", function () {
//   if (selectedValue) {
//     // Скрываем контейнер с кнопкой и элементами списка
//     document.getElementById("container").style.display = "none";

//     // Показываем контейнер с результатом и изображением
//     var resultContainer = document.getElementById("result");
//     resultContainer.style.display = "block";

//     let selectedRate = document.getElementById("selectedRate");
//     selectedRate.innerHTML = `You selected ${selectedValue} out of 5`;
//   } else {
//     alert("Please select an item.");
//   }
// });

// const form = document.getElementById("form");
// const email = document.getElementById("email");

// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   validateInputs();
// });

// const setError = (element, message) => {
//   const inputControl = element.parentElement;
//   const errorDisplay = inputControl.querySelector(".error");

//   errorDisplay.innerText = message;
//   errorDisplay.style.display = "block";
//   inputControl.classList.add("error");
// };

// const setSuccess = (element) => {
//   const inputControl = element.parentElement;
//   const errorDisplay = inputControl.querySelector(".error");

//   errorDisplay.innerText = "";
//   inputControl.classList.remove("error");
// };

// const isValidEmail = (email) => {
//   const re =
//     /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//   return re.test(String(email).toLowerCase());
// };

// const validateInputs = () => {
//   const emailValue = email.value.trim();

//   if (!isValidEmail(emailValue)) {
//     setError(email, "Please provide a valid email address");
//   } else {
//     setSuccess(email);
//   }
// };

const form = document.getElementById("form");
const email = document.getElementById("email");

form.addEventListener("submit", (e) => {
  e.preventDefault();
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
