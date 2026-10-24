import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

const SITE = "https://www.artificeatelier.com";

// Per-route metadata: [title, description] for each language.
const PAGES = {
  "/": {
    fr: ["Artifice Atelier | Studio créatif à Paris : branding, UI/UX & web", "Artifice Atelier — Studio créatif à Paris spécialisé en branding, UI/UX, web design et storytelling de marques de luxe. Contactez-nous pour projets sur mesure."],
    en: ["Artifice Atelier | Creative studio in Paris: branding, UI/UX & web", "Artifice Atelier is a Paris creative studio specialising in branding, UI/UX, web design and luxury brand storytelling. Contact us for bespoke projects."],
  },
  "/about": {
    fr: ["À propos | Artifice Atelier", "Découvrez Artifice Atelier : notre mission, notre vision, nos valeurs et notre approche créative pour les marques de luxe à Paris."],
    en: ["About us | Artifice Atelier", "Meet Artifice Atelier: our mission, vision, values and creative approach for luxury brands in Paris."],
  },
  "/contact": {
    fr: ["Contact | Artifice Atelier", "Parlez-nous de votre projet de branding, de design graphique ou de site web. Artifice Atelier vous répond rapidement."],
    en: ["Contact | Artifice Atelier", "Tell us about your branding, graphic design or web project. Artifice Atelier replies quickly."],
  },
  "/work": {
    fr: ["Portfolio | Artifice Atelier", "Portfolio d'Artifice Atelier : logos, réseaux sociaux, cartes de visite, flyers, packaging, identités de marque et web design."],
    en: ["Portfolio | Artifice Atelier", "Artifice Atelier portfolio: logos, social media, business cards, flyers, packaging, brand identities and web design."],
  },
  "/branding": {
    fr: ["Branding & Design | Artifice Atelier", "Création d'identité de marque complète : stratégie, logo, charte graphique et supports pour marques de luxe et entreprises."],
    en: ["Branding & Design | Artifice Atelier", "Complete brand identity creation: strategy, logo, visual guidelines and collateral for luxury brands and businesses."],
  },
  "/logo-design": {
    fr: ["Création de logo | Artifice Atelier", "Logos sur mesure, mémorables et intemporels, conçus par Artifice Atelier pour donner une identité forte à votre marque."],
    en: ["Logo design | Artifice Atelier", "Custom, memorable and timeless logos designed by Artifice Atelier to give your brand a strong identity."],
  },
  "/web-ui-ux-design-service": {
    fr: ["Web & UI/UX Design | Artifice Atelier", "Conception de sites web et d'interfaces UI/UX modernes, centrées utilisateur, par le studio Artifice Atelier."],
    en: ["Web & UI/UX design | Artifice Atelier", "Modern, user-centred website and UI/UX design by the Artifice Atelier studio."],
  },
  "/logos": {
    fr: ["Portfolio logos | Artifice Atelier", "Sélection de logos créés par Artifice Atelier pour des marques et entreprises."],
    en: ["Logo portfolio | Artifice Atelier", "A selection of logos created by Artifice Atelier for brands and businesses."],
  },
  "/business-cards": {
    fr: ["Cartes de visite | Artifice Atelier", "Cartes de visite élégantes et professionnelles conçues par Artifice Atelier."],
    en: ["Business cards | Artifice Atelier", "Elegant, professional business card designs by Artifice Atelier."],
  },
  "/flyers": {
    fr: ["Flyers & print | Artifice Atelier", "Flyers, affiches et supports imprimés conçus par Artifice Atelier."],
    en: ["Flyers & print | Artifice Atelier", "Flyers, posters and print collateral designed by Artifice Atelier."],
  },
  "/real-estate-rodeo": {
    fr: ["Real Estate Rodeo, identité de marque | Artifice Atelier", "Étude de cas : identité de marque et supports créés pour Real Estate Rodeo."],
    en: ["Real Estate Rodeo brand identity | Artifice Atelier", "Case study: brand identity and collateral created for Real Estate Rodeo."],
  },
  "/packaging": {
    fr: ["Design packaging | Artifice Atelier", "Conception de packagings soignés par Artifice Atelier pour valoriser vos produits."],
    en: ["Packaging design | Artifice Atelier", "Refined packaging design by Artifice Atelier to showcase your products."],
  },
  "/social-media": {
    fr: ["Design réseaux sociaux | Artifice Atelier", "Visuels et templates pour réseaux sociaux conçus par Artifice Atelier."],
    en: ["Social media design | Artifice Atelier", "Social media visuals and templates designed by Artifice Atelier."],
  },
  "/web-ui-ux-design": {
    fr: ["Portfolio Web & UI/UX | Artifice Atelier", "Projets de web design et d'interfaces UI/UX réalisés par Artifice Atelier."],
    en: ["Web & UI/UX portfolio | Artifice Atelier", "Web design and UI/UX interface projects by Artifice Atelier."],
  },
};

const GALLERIES = ["/logos", "/business-cards", "/flyers", "/real-estate-rodeo", "/packaging", "/social-media", "/web-ui-ux-design"];

const ORG = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Artifice Atelier",
  url: SITE,
  logo: `${SITE}/logo512.png`,
  image: `${SITE}/og-image.png`,
  email: "contact@artificeatelier.com",
  telephone: "+33668672365",
  areaServed: "FR",
  address: { "@type": "PostalAddress", addressLocality: "Paris", addressCountry: "FR" },
  sameAs: ["https://www.instagram.com/artifice_atelier"],
};

const Seo = () => {
  const { pathname } = useLocation();
  const { i18n } = useTranslation();
  const lang = i18n.language === "en" ? "en" : "fr";
  const path = (pathname.length > 1 ? pathname.replace(/\/$/, "") : "/").toLowerCase();
  const page = PAGES[path];
  if (!page) return null; // NotFound sets its own tags
  const [title, description] = page[lang];
  const url = SITE + path;

  return (
    <>
    {GALLERIES.includes(path) && <h1 className="sr-only">{title.split(" | ")[0]}</h1>}
    <Helmet defer={false}>
      <html lang={lang} />
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Artifice Atelier" />
      <meta property="og:locale" content={lang === "en" ? "en_US" : "fr_FR"} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={`${SITE}/og-image.png`} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${SITE}/og-image.png`} />
      {path === "/" && (
        <script type="application/ld+json">
          {JSON.stringify(ORG).replace(/</g, "\\u003c")}
        </script>
      )}
    </Helmet>
    </>
  );
};

export default Seo;
