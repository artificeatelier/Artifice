import React, { useState } from "react";
import { useTranslation } from "react-i18next";



const Work = () => {
  const { t, i18n } = useTranslation()

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

    </div>
  );
};

export default Work;
