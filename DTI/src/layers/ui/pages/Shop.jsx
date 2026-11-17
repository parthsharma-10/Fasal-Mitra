import { useTranslation } from "react-i18next";
import { shopProducts } from "../../services/data/shopData";

function Shop() {
  const { t } = useTranslation();

  return (
    <section className="page-shell space-y-6">
      <h2 className="text-3xl font-bold">{t("shop_title")}</h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {shopProducts.map((item) => (
          <article key={item.nameKey} className="premium-card">
            <p className="text-xs tracking-[0.18em] text-leafPrimary">{t(item.categoryKey)}</p>
            <h3 className="mt-3 text-xl font-semibold">{t(item.nameKey)}</h3>
            <p className="mt-2 text-sm text-slate-300">{t("shop_subtitle")}</p>
            <p className="mt-4 text-leafSecondary">{item.price}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Shop;
