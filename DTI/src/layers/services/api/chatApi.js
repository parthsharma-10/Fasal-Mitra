import { fetchJson } from "./apiClient";

export async function sendChatMessage(message, language = null) {
  const lang = language || localStorage.getItem("leafx-language") || "en";
  const data = await fetchJson("/chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message, language: lang }),
  });
  return data.reply || "";
}
