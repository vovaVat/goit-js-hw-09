const form = document.querySelector(".feedback-form");
const emailInput = form.querySelector("input[name='email']");
const messageInput = form.querySelector("textarea[name='message']");

let formData = {
  email: "",
  message: ""
};

loadFormDataFromStorage();

form.addEventListener('input', onInputForm);
form.addEventListener('submit', onSubmitForm);

function onInputForm(event) {
  const { name, value } = event.target;
  formData[name] = value.trim();

  localStorage.setItem("feedback-form-state", JSON.stringify(formData));
}

function onSubmitForm(event) {
  event.preventDefault();

  if (!formData.email || !formData.message) {
    alert('Fill please all fields');
    return;
  }

  console.log(formData);

  localStorage.removeItem('feedback-form-state');
  formData = { email: "", message: "" };
  form.reset();
}

function loadFormDataFromStorage() {
  const savedData = localStorage.getItem('feedback-form-state');
  if (savedData) {
    formData = JSON.parse(savedData);
    emailInput.value = formData.email || '';
    messageInput.value = formData.message || '';
  }
}
