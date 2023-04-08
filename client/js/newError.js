import { ERROR_DURATION } from "./utils.js";

export default function newError(err) {
  const error = document.createElement("div");
  error.classList.add("error");
  error.innerHTML = err;
  document.body.appendChild(error);
  setTimeout(() => {
    error.remove();
  }, ERROR_DURATION);
}
