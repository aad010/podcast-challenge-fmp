const requestAccess = document.querySelector(".info-button");
const errorMessage = document.querySelector(".info-error-msg");

requestAccess.addEventListener("click", () => {
  const userEmail = document.querySelector(".info-input");
  const emailAddress = userEmail.value;
  // console.log(emailAddress);
  const pattern = /^[A-Za-z0-9]+@[A-Za-z0-9]+(\.)[a-zA-Z]{3}$/;
  if (!pattern.test(emailAddress)) {
    errorMessage.style.display = "block";
  } else if (pattern.test(emailAddress)) {
    errorMessage.style.display = "none";
  }
});
