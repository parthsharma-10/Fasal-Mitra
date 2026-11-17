import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { sendChatMessage } from "../../services/api/chatApi";
import { speakText } from "../../utils/speech";

const LANG_SPEECH_MAP = {
  en: "en-US",
  hi: "hi-IN",
  mr: "mr-IN",
  gu: "gu-IN",
  ta: "ta-IN",
  te: "te-IN",
};

function FloatingChatbot() {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [listening, setListening] = useState(false);
  const recognitionRef = useRef(null);
  const listRef = useRef(null);

  useEffect(() => {
    if (!listRef.current) return;
    listRef.current.scrollTop = listRef.current.scrollHeight;
  }, [messages, open]);

  const pushBot = (text) => {
    setMessages((prev) => [...prev, { role: "bot", text }]);
    speakText(text);
  };

  const sendUser = async (text) => {
    const trimmed = text.trim();
    if (!trimmed || loading) return;
    setMessages((prev) => [...prev, { role: "user", text: trimmed }]);
    setInput("");
    setLoading(true);
    try {
      const activeLang = localStorage.getItem("leafx-language") || "en";
      const reply = await sendChatMessage(trimmed, activeLang);
      pushBot(reply);
    } catch (e) {
      setMessages((prev) => [
        ...prev,
        { role: "bot", text: e?.message || t("chat_error_generic") },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const startMic = () => {
    const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SR) {
      alert("Speech recognition is not supported in this browser. Please use Google Chrome or Microsoft Edge.");
      return;
    }

    try {
      if (recognitionRef.current) {
        recognitionRef.current.abort();
      }
    } catch {
      /* ignore */
    }

    const recognition = new SR();
    const activeLang = localStorage.getItem("leafx-language") || "en";
    recognition.lang = LANG_SPEECH_MAP[activeLang] || "en-US";
    recognition.interimResults = true;
    recognition.maxAlternatives = 1;

    recognition.onstart = () => setListening(true);
    recognition.onend = () => setListening(false);
    recognition.onerror = () => setListening(false);

    recognition.onresult = (event) => {
      let interim = "";
      let final = "";
      for (let i = event.resultIndex; i < event.results.length; ++i) {
        if (event.results[i].isFinal) {
          final += event.results[i][0].transcript;
        } else {
          interim += event.results[i][0].transcript;
        }
      }
      const recognized = (final || interim).trim();
      if (recognized) {
        setInput(recognized);
      }
      if (final.trim()) {
        void sendUser(final.trim());
      }
    };

    recognitionRef.current = recognition;

    try {
      recognition.start();
    } catch {
      setListening(false);
    }
  };

  return (
    <div className="fixed bottom-24 right-4 z-50 md:bottom-6 md:right-6">
      {open && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-panel mb-3 flex w-[min(100vw-2rem,22rem)] flex-col rounded-2xl p-4"
        >
          <p className="text-xs tracking-[0.16em] text-leafPrimary">{t("chatbot_title")}</p>
          <p className="mt-1 text-xs text-slate-400">{t("chatbot_hint")}</p>
          <div
            ref={listRef}
            className="mt-3 max-h-56 space-y-2 overflow-y-auto rounded-xl border border-white/10 bg-black/25 p-2 text-sm"
          >
            {messages.length === 0 && (
              <p className="text-slate-500">{t("chatbot_empty")}</p>
            )}
            {messages.map((m, i) => (
              <p
                key={i}
                className={
                  m.role === "user"
                    ? "whitespace-pre-wrap text-sky-200"
                    : "whitespace-pre-wrap text-emerald-100"
                }
              >
                {m.role === "user" ? "You: " : "AI: "}
                {m.text}
              </p>
            ))}
            {loading && <p className="text-xs text-slate-400">{t("chat_thinking")}</p>}
          </div>
          <div className="mt-2 flex gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && void sendUser(input)}
              placeholder={listening ? t("mic_listening") : t("chatbot_input_placeholder")}
              disabled={loading}
              className={`input-shell flex-1 py-2 text-sm ${listening ? "border-leafSecondary animate-pulse" : ""}`}
            />
            <button
              type="button"
              title={t("mic_speak")}
              onClick={startMic}
              disabled={loading}
              className={`rounded-xl border px-3 py-2 text-base transition-all ${
                listening
                  ? "border-red-500 bg-red-500/20 text-red-300 animate-pulse scale-105"
                  : "border-white/20 bg-white/[0.06] text-slate-200 hover:bg-white/10"
              } disabled:opacity-50`}
            >
              {"\u{1F3A4}"}
            </button>
            <button
              type="button"
              onClick={() => void sendUser(input)}
              disabled={loading || !input.trim()}
              className="rounded-xl border border-leafSecondary/50 bg-leafSecondary/15 px-3 py-2 text-xs font-semibold text-leafSecondary disabled:opacity-50 hover:bg-leafSecondary/25"
            >
              {t("chat_send")}
            </button>
          </div>
        </motion.div>
      )}
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="h-12 w-12 rounded-full border border-leafSecondary/60 bg-leafSecondary/15 text-leafSecondary shadow-glowSecondary transition hover:scale-105"
      >
        AI
      </button>
    </div>
  );
}

export default FloatingChatbot;
