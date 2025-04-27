import React, { useState } from 'react'
import FAQ from '../../Assets/FAQs.jpg'
import { useTranslation } from "react-i18next";
import { Link } from 'react-router-dom';
import Web from '../../Assets/web.jpg'

const Web_UI_UX_Design_Service = () => {
  const { t, i18n } = useTranslation();
  const faqs = [
    {
      question: "What creative services does Artifice Studio offer?",
      answer:
        "Artifice Studio offers a comprehensive range of creative services including brand identity design, UI/UX design, motion graphics, 3D visualization, digital illustration, and custom artwork creation. We specialize in crafting unique visual experiences that help brands stand out in the digital landscape.",
    },
    {
      question: "How does your design process work?",
      answer:
        "Our design process begins with an in-depth consultation to understand your vision and objectives. We then move through research, conceptualization, design development, and refinement phases. We maintain open communication throughout the process, ensuring your feedback is incorporated at every stage to deliver results that exceed expectations.",
    },
    {
      question:
        "What makes Artifice Studio different from other design studios?",
      answer:
        "Artifice Studio combines technical expertise with artistic innovation. We don't just create designs; we craft experiences that tell stories and evoke emotions. Our team's diverse skill set allows us to approach each project from multiple creative angles, ensuring unique and impactful solutions for every client.",
    },
    {
      question: "How long does a typical project take to complete?",
      answer:
        "Project timelines vary depending on scope and complexity. A basic brand identity might take 2-3 weeks, while a comprehensive design system could take 6-8 weeks. We provide detailed timelines during our initial consultation and keep you updated on progress throughout the project.",
    },
    {
      question: "Do you offer ongoing design support after project completion?",
      answer:
        "Yes, we provide continued support and maintenance packages for our clients. This includes design updates, asset creation, and technical support to ensure your visual content remains fresh and effective. We believe in building long-term partnerships with our clients.",
    },
  ];


  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="top-1 ">
      <div className="min-h-screen bg-black text-white">

        {/* Hero Section */}
        <section className="container mx-auto px-4 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <h1 className="text-6xl pl-2 md:pl-20 font-bold  animate-fade-in">
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


        {/* -----FAQ----- */}
        {/* <section className="bg-black text-white min-h-screen py-20 px-4 sm:px-6 lg:px-8">
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
                    <div key={index} className="border-b border-gray-700 pb-6">
                      <button
                        onClick={() => toggleFAQ(index)}
                        className="w-full text-left flex justify-between items-center group"
                      >
                        <h3 className="text-xl font-medium group-hover:text-gray-300 transition-colors duration-300">
                          {faq.question}
                        </h3>
                        <span className="text-2xl ml-4 transform transition-transform duration-300">
                          {openIndex === index ? "−" : "+"}
                        </span>
                      </button>

                      <div
                        className={`mt-4 text-gray-400 transition-all duration-300 overflow-hidden ${
                          openIndex === index
                            ? "max-h-96 opacity-100"
                            : "max-h-0 opacity-0"
                        }`}
                      >
                        <p className="leading-relaxed">{faq.answer}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section> */}

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
