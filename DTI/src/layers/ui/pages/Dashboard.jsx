import { useTranslation } from "react-i18next";
import Card from "../components/Card";

function Dashboard() {
  const { t } = useTranslation();

  return (
    <section className="page-shell space-y-6">
      <h2 className="text-3xl font-bold">{t("dashboard_title")}</h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <Card title={t("total_scans")} value="1,284" subtitle={t("monthly_ai_detections")} />
        <Card title={t("detection_accuracy")} value="97.8%" subtitle={t("model_confidence")} />
        <Card title={t("critical_alerts")} value="18" subtitle={t("high_severity")} />
      </div>
    </section>
  );
}

export default Dashboard;
