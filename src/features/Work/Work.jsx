import { useTranslation } from "react-i18next";
import Reveal from '../../Layout/Reveal';
import Logo from '../../Assets/Logo_Design.jpg'
import Social_Media from '../../Assets/Social_Media_Page.jpg'
import B_Card from '../../Assets/B_Card.jpg'
import Flyer from '../../Assets/Flyer/Racing_Mockup.jpg'
import REAL_ESTATE_RODEO from '../../Assets/REAL-ESTATE-RODEO/Logo.jpg'
import Packging from '../../Assets/Packging/Packging.jpg'
import UI_UX from '../../Assets/UI_UX/19.jpg'

export const Work = ({ images, className }) => {
  const { t } = useTranslation()
  const portfolioItems = [
  {
    id: 1,
    title: t("Logo Design"),
    image: Logo,
    link: "/logos",
  },
  {
    id: 2,
    title: t("SocialMediaDesign"),
    image: Social_Media,
    link: "/social-media",
  },
  {
    id: 3,
    title: t("Business Card"),
    image: B_Card,
    link: "/business-cards",
  },
  {
    id: 4,
    title: t("PrintingDesign"),
    image: Flyer,
    link: "/flyers",
  },
  {
    id: 5,
    title: t("BrandIdentity"),
    image: REAL_ESTATE_RODEO,
    link: "/real-estate-rodeo",
  },
  {
    id: 6,
    title: t("PackagingDesign"),
    image: Packging,
    link: "/packaging",
  },
  {
    id: 7,
    title: t("Web_UIUX_Design"),
    image: UI_UX,
    link: "/web-ui-ux-design",
  },
  
];
  
  return (

    <div className="bg-black min-h-screen text-white">

      {/* -----Heading----- */}
      <div className="bg-black py-12 px-6">
      <div className="max-w-7xl">
        <Reveal>
          <div className="flex items-center justify-start relative">
            <div className="w-32 h-[1px] bg-white mr-4"></div>
            <h2 className="text-sm tracking-widest text-white uppercase">{t("OUR WORK")}</h2>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white md:mx-36 mt-6">{t("PORTFOLIO")}</h1>
        </Reveal>
      </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
          {portfolioItems.map((item, index) => (
            <Reveal key={item.id} delay={(index % 3) * 0.1} className="relative overflow-hidden group">
              <a href={item.link} className="block">
                <div className="relative h-[250px] sm:h-[400px] overflow-hidden">
                  <img loading="lazy" decoding="async"
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
                  />

                  {/* Overlay that appears on hover */}
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-500 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100">
                    <h3 className="text-2xl font-bold text-white mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      {item.title}
                    </h3>
                    <div className="mt-4 w-10 h-10 rounded-full border border-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                      <span className="text-white">+</span>
                    </div>
                  </div>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    
    </div>
  );
};


export default Work;