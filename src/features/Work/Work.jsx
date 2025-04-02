import { useRef, useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import about from '../../Assets/About.jpg'



export const Work = ({ images, className }) => {
  const { t, i18n } = useTranslation()
  const portfolioItems = [
  {
    id: 1,
    title: "Logo Design",
    category: "Logos",
    image: about,
    link: "#/Logos",
  },
  {
    id: 2,
    title: "Global Art Festival",
    category: "Logo Design",
    image: about,
    link: "/portfolio/global-art",
  },
  {
    id: 3,
    title: "Logos",
    category: "Logo Design",
    image: "/placeholder.svg",
    link: "/portfolio/logos",
  },
  {
    id: 4,
    title: "Sloopy Noodles",
    category: "Flyer",
    image: "/placeholder.svg",
    link: "/portfolio/sloopy-noodles",
  },
  {
    id: 5,
    title: "WHO AM I",
    category: "Social Media Design",
    image: "/placeholder.svg",
    link: "/portfolio/who-am-i",
  },
  {
    id: 6,
    title: "Corporate Brochure",
    category: "Print Design",
    image: "/placeholder.svg",
    link: "/portfolio/corporate-brochure",
  },
];
  
  return (

    <div className="bg-black min-h-screen pt-28 text-white">

      {/* -----Heading----- */}
      <div className="bg-black py-20 px-6">
      <div className="max-w-7xl">
        <div className="flex items-center justify-start relative">
          <div className="w-32 h-[1px] bg-white mr-4"></div>
          <h2 className="text-sm tracking-widest text-white uppercase">{t("OUR WORK")}</h2>
        </div>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white md:mx-36 mt-6">{t("PORTFOLIO")}</h1>
        <p className="text-white md:mx-36 max-w-2xl mt-6">
          Explore our creative portfolio showcasing a diverse range of design projects across various categories.
        </p>
      </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
          {portfolioItems.map((item) => (
            <div key={item.id} className="relative overflow-hidden group">
              <a href={item.link} className="block">
                <div className="relative h-[400px] overflow-hidden">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                  />

                  {/* Overlay that appears on hover */}
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-500 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100">
                    <h3 className="text-2xl font-bold text-white mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-300 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                      {item.category}
                    </p>
                    <div className="mt-4 w-10 h-10 rounded-full border border-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                      <span className="text-white">+</span>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    
    </div>
  );
};


export default Work;