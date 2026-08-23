import React from 'react'
import { useTranslation } from "react-i18next";
import { Link } from 'react-router-dom';
import Web from '../../Assets/web.jpg'

const Web_UI_UX_Design_Service = () => {
  const { t } = useTranslation();

  return (
    <div className="top-1 ">
      <div className="min-h-screen bg-black text-white">

        {/* Hero Section */}
        <section className="container mx-auto px-4 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <h1 className="text-4xl sm:text-6xl pl-2 md:pl-20 font-bold  animate-fade-in">
              {t("Web_UIUX_Design")}
            </h1>
            <p className="text-gray-300 pr-2 md:pr-28 leading-relaxed">
              {t("ServiceText")}
            </p>
          </div>
        </section>

        {/* Bottom Content Section */}
        <section className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <img 
              src= {Web}
              alt="Collaboration" 
              className="w-fit rounded-xl"
            />
          </div>
          <div className="space-y-8 content-center">
            <p className="text-gray-300">
              {t("Web_Content")}
            </p>
            <p className="text-gray-300">
             {t("Web_Content_Two")}
            </p>
            <p className="text-gray-300">
             {t("Web_Content_Three")}
            </p>
            <p className="text-gray-300">
             {t("Web_Content_Four")}
            </p>
          </div>
        </div>
      </section>


        {/* -----let's Talk----- */}
        <section className=" bg-black flex flex-col items-center justify-center px-4 py-20">
          <div className="inline-block px-6 py-2 border border-white rounded-full mb-8 transition-colors duration-300">
            <span className="text-white text-sm tracking-wider uppercase">
             {t("WORKWITHUS")}
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-5xl text-white font-bold text-center max-w-4xl mb-16 leading-tight">
            {t("We would love to hear more")}
            <span className="block">{t("about your project")}</span>
          </h2>
          <Link
            to="/contact"
            className="group relative inline-flex items-center justify-center px-8 py-4 bg-transparent border border-white/20 text-white hover:border-white transition-colors duration-300 hover:shadow-[0_0_15px_rgba(255,255,255,0.5)] rounded-md"
          >
            <span className="text-sm mr-2">{t("LetTalk")}</span>
            <svg
              className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>
        </section>
      </div>
    </div>
  );
};

export default Web_UI_UX_Design_Service;
