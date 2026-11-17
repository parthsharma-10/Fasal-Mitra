import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { fetchDiseaseRecommendation } from "../../services/api/recommendationApi";

function Results() {
  const { t } = useTranslation();
  const [image, setImage] = useState("");
  const [result, setResult] = useState(null);
  const [aiRecommendation, setAiRecommendation] = useState("");
  const [recLoading, setRecLoading] = useState(false);
  const [recError, setRecError] = useState("");

  useEffect(() => {
    const storedImg =
      localStorage.getItem("leafx-image") ||
      sessionStorage.getItem("leafx-image") ||
      "";
    setImage(storedImg);

    const raw =
      localStorage.getItem("leafx-result") ||
      sessionStorage.getItem("leafx-result");
    if (raw) {
      try {
        const parsed = JSON.parse(raw);
        setResult(parsed);
        if (!storedImg && parsed?.annotatedImage) {
          setImage(parsed.annotatedImage);
        }
      } catch {
        setResult(null);
      }
    }
  }, []);

  useEffect(() => {
    if (!result?.disease) return undefined;
    let cancelled = false;
    const cacheKey = `leafx-ai-rec:${result.disease}:${result.severity}:${result.plantHealth}:${result.confidence}`;
    const cached = sessionStorage.getItem(cacheKey);
    if (cached) {
      setAiRecommendation(cached);
      return undefined;
    }
    setRecLoading(true);
    setRecError("");
    fetchDiseaseRecommendation({
      disease: result.disease,
      severity: Number(result.severity) || 0,
      plantHealth: Number(result.plantHealth) || 0,
      confidence: Number(result.confidence) || 0,
      staticHint: String(result.suggestion || "").trim(),
    })
      .then((text) => {
        if (cancelled || !text) return;
        setAiRecommendation(text);
        sessionStorage.setItem(cacheKey, text);
      })
      .catch((err) => {
        if (!cancelled) {
          setRecError(err?.message || t("rec_ai_failed"));
        }
      })
      .finally(() => {
        if (!cancelled) setRecLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, [result]);

  const healthScale = useMemo(() => {
    if (!result) return 0;
    return result.plantHealth / 100;
  }, [result]);

  return (
    <section className="page-shell space-y-6">
      <h2 className="text-3xl font-bold">{t("results_title")}</h2>
      {!image || !result ? (
        <div className="glass-panel rounded-2xl p-6 text-slate-300">{t("results_empty")}</div>
      ) : (
        <>
          <div className="glass-panel rounded-2xl p-4">
            <div className="relative overflow-hidden rounded-xl border border-leafPrimary/40">
              <img
                src={result.annotatedImage || image}
                alt={t("leaf_scan_alt")}
                className="aspect-video w-full object-cover"
              />
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="premium-card space-y-2">
              <p className="text-sm text-slate-300">
                {t("disease_name")}: <span className="text-leafSecondary">{result.disease}</span>
              </p>
              <p className="text-sm text-slate-300">
                Confidence: <span className="text-textSoft">{Number(result.confidence || 0).toFixed(2)}%</span>
              </p>
              <p className="text-sm text-slate-300">
                {t("plant_health")}: <span className="text-textSoft">{Number(result.plantHealth || 0).toFixed(2)}%</span>
              </p>
              <p className="text-sm text-slate-300">
                {t("severity")}: <span className="text-textSoft">{Number(result.severity || 0).toFixed(2)}%</span>
              </p>
              <div className="pt-3">
                <div className="h-3 overflow-hidden rounded-full bg-white/10">
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: healthScale }}
                    className="h-full origin-left bg-gradient-to-r from-leafPrimary to-leafSecondary"
                  />
                </div>
              </div>
            </div>
            <div className="premium-card">
              <p className="text-xs tracking-[0.2em] text-leafPrimary">{t("recommendation")}</p>
              {recLoading && (
                <p className="mt-3 text-sm text-slate-400">{t("rec_loading")}</p>
              )}
              {recError && !aiRecommendation && (
                <p className="mt-3 text-sm text-amber-300/90">{recError}</p>
              )}
              {aiRecommendation ? (
                <div className="mt-3 whitespace-pre-wrap text-sm leading-relaxed text-slate-200">
                  {aiRecommendation}
                </div>
              ) : (
                !recLoading && (
                  <p className="mt-3 text-sm leading-relaxed text-slate-200">
                    {result.suggestion || t("rec_empty_fallback")}
                  </p>
                )
              )}
              {aiRecommendation && result.suggestion && (
                <p className="mt-4 border-t border-white/10 pt-3 text-xs text-slate-500">
                  <span className="text-leafPrimary/80">{t("rec_quick_tip")}: </span>
                  {result.suggestion}
                </p>
              )}
            </div>
          </div>
        </>
      )}
    </section>
  );
}

export default Results;
