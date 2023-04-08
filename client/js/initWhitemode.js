export default function initWhitemode() {
  const modeBtn = document.getElementById("modeBtn");
  const modeCss = document.getElementById("modeCss");

  modeBtn.addEventListener("click", () => {
    // change link href to white mode
    if (modeCss.href.includes("light"))
      return (modeCss.href = "css/dark.css");
    else return (modeCss.href = "css/light.css");
  });
}
