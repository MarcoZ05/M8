import login from "./login.js";
import register from "./register.js";

export default function initAuth() {
  const loginButton = document.getElementById("loginButton");
  loginButton.addEventListener("click", () => {
    const username = document.getElementById("loginUsername").value;
    const password = document.getElementById("loginPassword").value;

    login().then((res) => {
      res.text().then((text) => {
        if (text === "user not found" || text === "wrong password") {
          console.error(text);
          // [ ] show error
        } else {
          localStorage.setItem("user", text);
        }
      });
    });
  });
  const registerButton = document.getElementById("registerButton");
  registerButton.addEventListener("click", () => {
    const username = document.getElementById("loginUsername").value;
    const password = document.getElementById("loginPassword").value;

    register().then((res) => {
      res.text().then((text) => {
        if (text === "user already exists") {
          console.error(text);
          // [ ] show error
        } else {
          localStorage.setItem("user", text);
        }
      });
    });
  });
}
