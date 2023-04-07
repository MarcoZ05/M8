import { RANKS } from "./utils.js";
import initRankSlider from "./initRankSlider.js";
import initSideBar from "./initSideBar.js";
import initThread from "./initThread.js";
import newThreat from "./newThreat.js";
import initAuth from "./initAuth.js";
import initFilter from "./initFilter.js";
import login from "./login.js";

const threatView = document.getElementById("threatView");

const reportBtn = document.getElementById("report");
// [ ] report threat
const bugBtn = document.getElementById("bug");
// [ ] report bug

let user = JSON.parse(localStorage.getItem("user"));
await login(user.name, user.password).then((res) => {
  res.text().then((text) => {
    if (text === "user not found" || text === "wrong password") {
      localStorage.removeItem("user");
      user = false;
    }
  });
});

newThreat(threatView);
initThread(threatView);

if (user) {
  initSideBar();
  initFilter();
  document.getElementById("loginContainer").remove();
} else {
  initAuth();
}

initRankSlider(document.getElementById("rankSlider"), RANKS);
