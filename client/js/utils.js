export function getDateText(date) {
  const now = new Date();
  const diff = now - date;
  const diffInMinutes = Math.floor(diff / 1000 / 60);
  const diffInHours = Math.floor(diffInMinutes / 60);
  const diffInDays = Math.floor(diffInHours / 24);

  if (diffInDays > 0) return `${diffInDays} days ago`;
  else if (diffInHours > 0) return `${diffInHours} hours ago`;
  else if (diffInMinutes > 0) return `${diffInMinutes} minutes ago`;
  return "Just now";
}

export const ERROR_DURATION = 3000;
export const ANIMATION_DURATION = 500;

export const RANKS = [
  "Iron",
  "Bronze",
  "Silver",
  "Gold",
  "Platinum",
  "Diamond",
  "Ascendant",
  "Immortal",
  "Radiant",
];

export const LANGUAGES = {
  Chinese: "https://flagcdn.com/w320/cn.png",
  Spanish: "https://flagcdn.com/w320/es.png",
  English: "https://flagcdn.com/w320/gb.png",
  American: "https://flagcdn.com/w320/us.png",
  Hindi: "https://flagcdn.com/w320/in.png",
  Arabic: "https://flagcdn.com/w320/ae.png",
  Portuguese: "https://flagcdn.com/w320/br.png",
  Russian: "https://flagcdn.com/w320/ru.png",
  Japanese: "https://flagcdn.com/w320/jp.png",
  German: "https://flagcdn.com/w320/de.png",
  French: "https://flagcdn.com/w320/fr.png",
  Korean: "https://flagcdn.com/w320/kr.png",
  Vietnamese: "https://flagcdn.com/w320/vn.png",
  Italian: "https://flagcdn.com/w320/it.png",
  Turkish: "https://flagcdn.com/w320/tr.png",
  Polish: "https://flagcdn.com/w320/pl.png",
  Urdu: "https://flagcdn.com/w320/pk.png",
  Persian: "https://flagcdn.com/w320/ir.png",
  Romanian: "https://flagcdn.com/w320/ro.png",
  Czech: "https://flagcdn.com/w320/cz.png",
  Swedish: "https://flagcdn.com/w320/se.png",
  Hungarian: "https://flagcdn.com/w320/hu.png",
  Greek: "https://flagcdn.com/w320/gr.png",
  Norwegian: "https://flagcdn.com/w320/no.png",
};

export const PLATFORMS = ["Discord", "TeamSpeak", "In-game", "Others"];
