import React, {useEffect, useState } from 'react'
import { useTranslation } from "react-i18next";
import FAQ from '../../Assets/FAQs.jpg'
import { Link } from 'react-router-dom';

import Img_One from '../../Assets/Portfolio_Logo/1.png'
import Img_Two from '../../Assets/Portfolio_Logo/2.png'
import Img_Three from '../../Assets/Portfolio_Logo/3.png'
import Img_Four from '../../Assets/Portfolio_Logo/4.png'
import Img_Five from '../../Assets/Portfolio_Logo/5.png'
import Img_Six from '../../Assets/Portfolio_Logo/6.png'

export default function AboutUS() {

  const { t } = useTranslation();
  
   const services = [
    {
      title: t("BRANDINGDESIGN"),
      description: t("BrandnDesign"),
      items: [
        t("LogoDesign"),
        t("BrandIdentity"),
        t("Graphic Design"),
        t("Brochure Design"),
        t("PackagingDesign"),
        t("Letterhead Design"),
        "UI/UX"
      ]
    },
    {
      title: t("WEBDESING"),
      description: t("WebSite"),
      items: [
        t("Static Website"),
        t("Custom Website Devlopment"),
        t("E-Commerce Website"),
      ]
    }
  ]


  const faqs = [
  {
    question: t("About_Q1"),
    answer: t("About_A1"),
  },
  {
    question: t("About_Q2"),
    answer: t("About_A2"),
  },
  {
    question: t("About_Q3"),
    answer: t("About_A3"),
  },
  {
    question: t("About_Q4"),
    answer: t("About_A4"),
  },
]

 const [openIndex, setOpenIndex] = useState(null)

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  const images = [
  Img_One,
  Img_Two,
  Img_Three,
  Img_Four,
  Img_Five,
  Img_Six,
];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className='top-1 '>

  {/* -----Heading----- */}
    <div className="bg-black pt-12 px-6">
      <div className="max-w-7xl">
        <div className="flex items-center justify-start relative">
          <div className="w-32 h-[1px] bg-white mr-4"></div>
          <h2 className="text-sm tracking-widest text-white uppercase">{t("WhoWeAre")}</h2>
        </div>
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white md:mx-36 mt-6">{t("À propos de nous")}</h1>
      </div>
      <div className="bg-black text-white py-8">
  <div className="max-w-screen-lg mx-auto px-6">
    <div className="">
      <p className="text-lg">
        {t("AboutUsPFour")}
      </p>
      <br/>
      <p className="text-lg">
        {t("AboutUsPTwo")}  
      </p>
      <br />
      <p className="text-lg">
        {t("AboutUsPThree")}  
      </p>
    </div>
  </div>
    </div>
    </div>

  {/*-----Infinite Slider Section------ */}
    <section className="bg-black">
      <div className="relative w-full overflow-hidden">
      <div className="flex w-max animate-slide gap-0">
        {[...images, ...images].map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`slide-${index}`}
            className="h-96 w-auto object-cover"
          />
        ))}
      </div>
    </div>
    </section>


  {/* -----Transperent Section---- */}
    {/* <section>
    <div className="min-h-screen flex flex-col relative">

      <div className="relative md:absolute md:inset-0">
        <img
          src={aboutus}
          alt="Office Space"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 md:h-[calc(100vh)] flex items-start overflow-hidden">
        <div className="w-full  lg:w-1/3 md:ml-auto lg:ml-32 p-8 md:p-16 bg-black  md:bg-black md:bg-opacity-70 text-white min-h-[80vh] md:min-h-full flex flex-col justify-center overflow-hidden">
          <h1 className="text-4xl md:text-5xl mb-6 font-light">
            {t("HelloWeAre")}
          </h1>
          <p className="text-lg md:text-xl leading-relaxed opacity-90">
           {t("AboutUsPFour")}
          </p>
        </div>
      </div>
    </div>
    </section> */}


  {/*-----Service Section----- */}
    <div className="bg-black text-white">
    <h1 className="text-2xl md:text-5xl font-bold text-center mb-1 pt-8" > {t("WhatWeProvide")} </h1>
  {services.map((service, index) => (
    <section key={index} className="py-12 px-6 md:px-12 lg:px-24 relative border-b border-gray-600">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-[1fr,2fr] gap-12 items-start">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-1 leading-tight">
              {service.title}
            </h2>
          </div>
          <div>
            <p className="text-xl md:text-2xl mb-8 leading-relaxed">
              {service.description}
            </p>
            <div className="space-y-4">
              {service.items.map((item, itemIndex) => (
                <div key={itemIndex} className="flex items-center gap-2 text-lg">
                  <span className="text-xl">+</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <div className="mt-12 flex justify-end">
              {/* <button
                href="#"
                className="inline-flex items-center gap-2 text-lg hover:opacity-80 transition-opacity"
              >
                Details
                <span className="inline-block transform rotate-45">→</span>
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  ))}
    </div>

  {/* -----FAQ----- */}
    <section className="bg-black text-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="relative">
            <img
              src={FAQ}
              alt="FAQ Concept with Books and Question Marks"
              className="rounded-lg w-full h-full object-cover"
            />
          </div>

          <div>
            <h2 className="text-4xl font-bold mb-12">
              {t("FAQ")}
            </h2>

            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div 
                  key={index}
                  className="border-b border-gray-700 pb-6"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full text-left flex justify-between items-center group"
                  >
                    <h3 className="text-xl font-medium group-hover:text-gray-300 transition-colors duration-300">
                      {faq.question}
                    </h3>
                    <span className="text-2xl ml-4 transform transition-transform duration-300">
                      {openIndex === index ? '−' : '+'}
                    </span>
                  </button>
                  
                  <div 
                    className={`mt-4 text-gray-400 transition-all duration-300 overflow-hidden ${
                      openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <p className="leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>


  {/* -----let's Talk----- */}
    <section className=" bg-black flex flex-col items-center justify-center px-4 py-20">
      <div className="inline-block px-6 py-2 border border-white rounded-full mb-8 transition-colors duration-300">
        <span className="text-white text-sm tracking-wider uppercase">{t("WORKWITHUS")}</span>
      </div>
      <h2 className="text-4xl md:text-5xl lg:text-5xl text-white font-bold text-center max-w-4xl mb-10 leading-tight">
        {t("Elevate Your Brand with Expert Design")}
      </h2>
      <p className="text-xl text-white mb-6">{t("From logos to full brand identities, we craft designs that make you stand out")}</p>
      <Link 
        to="/contact" 
        className="group relative inline-flex items-center justify-center px-8 py-4 bg-transparent border border-white/20 text-white hover:border-white transition-colors duration-300 hover:shadow-[0_0_15px_rgba(255,255,255,0.5)] rounded-md"
      >
        <span className="text-sm mr-2">{t("Explore Our Services")}</span>
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
  );
}