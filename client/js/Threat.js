import { LANGUAGES, getDateText } from "./utils.js";

export default class Threat extends HTMLElement {
  constructor(
    username = "Unknown",
    avatarSrc = "https://imgs.search.brave.com/vI1304ZL2SONebrY8UW2MHejwuMVIy5KXzd-7tJ1Trw/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly93d3cu/cG5nYWxsLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvNS9Qcm9m/aWxlLnBuZw",
    date = new Date(),
    ranks = [],
    mode = "ranked",
    languages = [],
    voiceChat = false,
    otherInfo = []
  ) {
    super();

    const header = document.createElement("div");
    header.classList.add("threatHeader");

    const img = document.createElement("img");
    img.src = avatarSrc;
    header.appendChild(img);

    const usernameElement = document.createElement("h2");
    usernameElement.innerText = username;
    header.appendChild(usernameElement);

    const dateElement = document.createElement("div");
    const dateText = getDateText(date);
    dateElement.innerText = dateText;

    header.appendChild(dateElement);

    this.appendChild(header);

    const body = document.createElement("div");
    body.classList.add("threatBody");

    // ranks
    if (ranks.length > 0) {
      const ranksElement = document.createElement("div");
      const ranksTitle = document.createElement("h3");
      ranksTitle.innerText = "Ranks";
      ranksElement.appendChild(ranksTitle);

      const ranksList = document.createElement("ul");
      ranks.forEach((rank) => {
        const rankElement = document.createElement("li");
        rankElement.innerText = rank;
        ranksList.appendChild(rankElement);
      });

      ranksElement.appendChild(ranksList);
      body.appendChild(ranksElement);
    }

    // languages
    if (languages.length > 0) {
      const languagesElement = document.createElement("div");
      const languagesTitle = document.createElement("h3");
      languagesTitle.innerText = "Languages";
      languagesElement.appendChild(languagesTitle);

      const languagesList = document.createElement("div");
      languagesList.classList.add("languagesList");
      languages.forEach((language) => {
        const img = document.createElement("img");
        img.src = LANGUAGES[language];
        languagesList.appendChild(img);
      });

      languagesElement.appendChild(languagesList);
      body.appendChild(languagesElement);
    }

    // other info
    const otherInfoElement = document.createElement("div");
    const otherInfoTitle = document.createElement("h3");
    otherInfoTitle.innerText = "Other info";
    otherInfoElement.appendChild(otherInfoTitle);
    const otherInfoList = document.createElement("ul");

    const voiceChatElement = document.createElement("li");
    voiceChatElement.innerHTML = `<b>Voice chat:</b> ${
      voiceChat ? voiceChat : "-"
    }`;
    otherInfoList.appendChild(voiceChatElement);

    const modeElement = document.createElement("li");
    modeElement.innerHTML = `<b>Mode:</b> ${mode}`;
    otherInfoList.appendChild(modeElement);

    otherInfo.forEach((info) => {
      const infoElement = document.createElement("li");
      infoElement.innerText = info;
      otherInfoList.appendChild(infoElement);
    });


    otherInfoElement.appendChild(otherInfoList);
    body.appendChild(otherInfoElement);

    this.appendChild(body);
  }
}

customElements.define("threat-element", Threat);
