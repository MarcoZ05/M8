import { LANGUAGES } from "./utils.js";

export default function initFlags() {
  const container = document.getElementById("languageFlags");

  for (const key in LANGUAGES) {
    const flag = document.createElement("img");
    flag.src = LANGUAGES[key];
    flag.alt = key;
    flag.title = LANGUAGES[key];
    flag.addEventListener("click", () => {
      flag.classList.toggle("selected");
    });
    container.appendChild(flag);
  }
}
