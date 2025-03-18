import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

export default function Work() {
  const { t, i18n } = useTranslation()

  return (

    <div className='pt-28 sm:pt-24 md:pt-28 lg:pt-28 xl:pt-28 top-1 '>

    {/* -----Heading----- */}
    <div className="bg-black py-20 px-6">
      <div className="max-w-7xl">
        <div className="flex items-center justify-start relative">
          <div className="w-32 h-[1px] bg-white mr-4"></div>
          <h2 className="text-sm tracking-widest text-white uppercase">{t("OUR WORK")}</h2>
        </div>
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white md:mx-36 mt-6">{t("PORTFOLIO")}</h1>
      </div>
    </div>

    </div>
  )
}

