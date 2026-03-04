const wrapper = document.querySelector(".wrapper");
const signupHeader = document.querySelector(".signup header");
const loginHeader = document.querySelector(".login header");

loginHeader.addEventListener("click", () => {
  wrapper.classList.add("active");
});

signupHeader.addEventListener("click", () => {
  wrapper.classList.remove("active");
});

// Continue as Guest Function (Redirect to Homepage)
function continueGuest() {
  window.location.href = "/index.html";
}
