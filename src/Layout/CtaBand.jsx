import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { track } from "../analytics";

// Closing call to action shown above the footer on every page except /contact.
const CtaBand = () => {
  const { t } = useTranslation();
  const { pathname } = useLocation();
  if (pathname.toLowerCase().startsWith("/contact")) return null;
  return (
    <section className="bg-black text-white text-center px-6 py-16 border-t border-white/10">
      <h2 className="text-2xl md:text-4xl font-bold">{t("CtaBandTitle")}</h2>
      <p className="mt-3 text-gray-300">{t("CtaBandText")}</p>
      <Link
        to="/contact"
        onClick={() => track("cta_clicked", { location: "cta-band" })}
        className="inline-block mt-8 rounded-full border border-white px-8 py-3 hover:bg-white hover:text-black transition-colors"
      >
        {t("CtaBandButton")}
      </Link>
    </section>
  );
};

export default CtaBand;
