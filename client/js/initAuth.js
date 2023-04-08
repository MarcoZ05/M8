import login from "./login.js";
import newError from "./newError.js";
import register from "./register.js";

export default function initAuth() {
  const loginButton = document.getElementById("loginButton");
  const registerButton = document.getElementById("registerButton");
  const usernameInput = document.getElementById("loginUsername");
  const passwordInput = document.getElementById("loginPassword");

  loginButton.addEventListener("click", () => {
    const username = usernameInput.value;
    const password = passwordInput.value;

    login().then((res) => {
      res.text().then((text) => {
        if (text === "user not found" || text === "wrong password") {
          newError(text);
        } else {
          localStorage.setItem(
            "user",
            JSON.stringify({ name: username, password })
          );
          window.location.reload();
        }
      });
    });
  });
  registerButton.addEventListener("click", () => {
    const username = usernameInput.value;
    const password = passwordInput.value;

    if (!username || !password) return newError("Please fill in all fields");
    else if (username.length < 3 || username.length > 20)
      return newError("Username must be between 3 and 20 characters");
    else if (password.length < 6 || password.length > 20)
      return newError("Password must be between 6 and 20 characters");
    else if (username.includes(" ") || password.includes(" "))
      return newError("Username and password cannot contain spaces");

    register().then((res) => {
      res.text().then((text) => {
        if (text === "user already exists") {
          newError(text);
        } else {
          localStorage.setItem(
            "user",
            JSON.stringify({ name: username, password })
          );
          window.location.reload();
        }
      });
    });
  });
  passwordInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      loginButton.click();
    }
  });
}
