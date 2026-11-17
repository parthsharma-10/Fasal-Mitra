/** Strip simple markdown / noise for speech synthesis */
export function textForSpeech(text) {
  return String(text)
    .replace(/\*\*|__/g, "")
    .replace(/[#*`]/g, "")
    .trim();
}

const LANG_VOICE_MAP = {
  en: "en-US",
  hi: "hi-IN",
  mr: "mr-IN",
  gu: "gu-IN",
  ta: "ta-IN",
  te: "te-IN",
};

export function speakText(text, langCode = null) {
  if (typeof window === "undefined" || !window.speechSynthesis) return;
  window.speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(textForSpeech(text));
  const code = langCode || localStorage.getItem("leafx-language") || "en";
  u.lang = LANG_VOICE_MAP[code] || "en-US";

  try {
    const voices = window.speechSynthesis.getVoices();
    const match = voices.find(
      (v) =>
        v.lang === u.lang ||
        v.lang.startsWith(code) ||
        v.lang.startsWith(u.lang.slice(0, 2))
    );
    if (match) {
      u.voice = match;
    }
  } catch {
    /* fallback to default */
  }

  window.speechSynthesis.speak(u);
}
