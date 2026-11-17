import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

const languageOptions = [
  { code: "en", label: "English" },
  { code: "hi", label: "हिंदी" },
  { code: "mr", label: "मराठी" },
  { code: "gu", label: "ગુજરાતી" },
  { code: "ta", label: "தமிழ்" },
  { code: "te", label: "తెలుగు" },
];

function Navbar() {
  const { t, i18n } = useTranslation();

  const links = [
    { to: "/", label: t("nav_home") },
    { to: "/scan", label: t("nav_scan") },
    { to: "/results", label: t("nav_results") },
    { to: "/weather", label: t("nav_weather") },
    { to: "/community", label: t("nav_community") },
    { to: "/shop", label: t("nav_shop") },
    { to: "/login", label: t("nav_login") },
  ];

  const handleLanguageChange = (event) => {
    const next = event.target.value;
    i18n.changeLanguage(next);
    localStorage.setItem("leafx-language", next);
  };

  const currentLanguage = languageOptions.find((item) => item.code === i18n.language)?.label || "English";

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-brand/80 backdrop-blur-xl">
      <nav className="page-shell flex items-center justify-between py-4">
        <p className="text-sm font-bold tracking-[0.12em] sm:text-base">{t("brand_name")}</p>
        <div className="hidden items-center gap-2 md:flex">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `rounded-full px-4 py-2 text-xs tracking-[0.12em] transition ${
                  isActive
                    ? "border border-leafPrimary/50 bg-leafPrimary/10 text-leafPrimary shadow-glowPrimary"
                    : "border border-transparent text-slate-300 hover:border-white/10 hover:bg-white/5"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        <div className="glass-panel flex items-center gap-2 rounded-xl px-3 py-2 transition hover:border-leafPrimary/40">
          <span className="text-sm">🌐</span>
          <label className="text-xs text-slate-300">{t("language_label")}</label>
          <span className="hidden text-xs text-leafSecondary sm:block">{currentLanguage}</span>
          <select
            value={i18n.language}
            onChange={handleLanguageChange}
            className="rounded-lg border border-white/10 bg-brand px-2 py-1 text-xs text-textSoft outline-none transition hover:border-leafPrimary/50"
          >
            {languageOptions.map((option) => (
              <option key={option.code} value={option.code}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
