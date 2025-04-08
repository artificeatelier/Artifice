import React, { useState } from 'react'
import FAQ from '../../Assets/FAQs.jpg'
import { useTranslation } from "react-i18next";
import Img_1 from '../../Assets/ottico brand/1.jpg'
import Img_2 from '../../Assets/ottico brand/2.jpg'
import Img_3 from '../../Assets/ottico brand/3.jpg'
import Img_4 from '../../Assets/ottico brand/4.jpg'
import Img_5 from '../../Assets/ottico brand/5.jpg'
import Img_6 from '../../Assets/ottico brand/6.jpg'


const Branding = () => {

  const { t, i18n } = useTranslation()
  const faqs = [
  {
    question: "What creative services does Artifice Studio offer?",
    answer: "Artifice Studio offers a comprehensive range of creative services including brand identity design, UI/UX design, motion graphics, 3D visualization, digital illustration, and custom artwork creation. We specialize in crafting unique visual experiences that help brands stand out in the digital landscape."
  },
  {
    question: "How does your design process work?",
    answer: "Our design process begins with an in-depth consultation to understand your vision and objectives. We then move through research, conceptualization, design development, and refinement phases. We maintain open communication throughout the process, ensuring your feedback is incorporated at every stage to deliver results that exceed expectations."
  },
  {
    question: "What makes Artifice Studio different from other design studios?",
    answer: "Artifice Studio combines technical expertise with artistic innovation. We don't just create designs; we craft experiences that tell stories and evoke emotions. Our team's diverse skill set allows us to approach each project from multiple creative angles, ensuring unique and impactful solutions for every client."
  },
  {
    question: "How long does a typical project take to complete?",
    answer: "Project timelines vary depending on scope and complexity. A basic brand identity might take 2-3 weeks, while a comprehensive design system could take 6-8 weeks. We provide detailed timelines during our initial consultation and keep you updated on progress throughout the project."
  },
  {
    question: "Do you offer ongoing design support after project completion?",
    answer: "Yes, we provide continued support and maintenance packages for our clients. This includes design updates, asset creation, and technical support to ensure your visual content remains fresh and effective. We believe in building long-term partnerships with our clients."
  }
  ]

   const services = [
    {
      title: t("Brand Identity & Strategy"),
      description: t("As the business landscape evolves, the ongoing importance of brand identity and strategy remains a beacon for businesses striving to leave a lasting imprint in the hearts and minds of their audience.")
    },
    {
      title: t("Graphic Design"),
      description: t("graphic design is more than aesthetics – it's a language that speaks to the hearts and minds of the audience.")
    },
    {
      title: t("PrintingDesign"),
      description: t("PrintingDetail")
    },
    {
      title: t("Packaging Design"),
      description: t("packaging design remains a linchpin in the competitive market, where first impressions matter.")
    }
  ]

  const portfolioItems = [
  {
    id: 1,
    image: Img_1,
  },
  {
    id: 2,
    image: Img_2,
  },
  {
    id: 3,
    image: Img_3,
  },
  {
    id: 4,
    image: Img_4,
  },
  {
    id: 5,
    image: Img_5,
  },
  {
    id: 6,
    image: Img_6,
  },
  
];

 const [openIndex, setOpenIndex] = useState(null)

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }
 
  return (
    <div className='pt-28 sm:pt-24 md:pt-28 lg:pt-28 xl:pt-28 top-1 '>

    <div className="min-h-screen bg-black text-white">

    {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <h1 className="text-6xl pl-2 md:pl-20 font-bold  animate-fade-in">
            {t("Branding")} & <br/>
            {t("Design")}
          </h1>
          <p className="text-gray-300 pr-2 md:pr-28 leading-relaxed">
            {t("ServiceText")}
          </p>
        </div>
      </section>


    {/* ------Service Section----- */}
      <section className="bg-black  flex items-center justify-center px-4 sm:px-6 py-1 sm:py-16">
      <div className="max-w-7xl mx-auto">
        {/* Timeline dots and line */}
        <div className="md:relative flex justify-between mb-16">
          <div className="absolute top-1/2 left-0 right-0 h-[1px] md:bg-white/20 -translate-y-1/2 w-full" />
          {[0, 1, 2, 3].map((dot) => (
            <div
              key={dot}
              className="w-2 h-2 md:bg-white rounded-full relative z-10"
            />
          ))}
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-white text-xl font-semibold leading-tight min-h-[60px]">
                {service.title}
              </h3>
              <p className="text-white/80 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      </section>


      <section>
        <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-1">
          {portfolioItems.map((item) => (
            <div key={item.id} className="relative overflow-hidden group">
              <a href={item.link} className="block">
                <div className="relative h-full overflow-hidden">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>  
              </a>
            </div>
          ))}
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
      </section> */}


    {/* -----let's Talk----- */}
      <section className=" bg-black flex flex-col items-center justify-center px-4 py-20">
      <div className="inline-block px-6 py-2 border border-white rounded-full mb-8 transition-colors duration-300">
        <span className="text-white text-sm tracking-wider uppercase">{t("WORKWITHUS")}</span>
      </div>
      <h2 className="text-4xl md:text-5xl lg:text-5xl text-white font-bold text-center max-w-4xl mb-16 leading-tight">
        {t("We would love to hear more")} 
        <span className="block">{t("about your project")}</span>
      </h2>
      <a 
        href="/contact" 
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
      </a>
      </section>


    </div>

    </div>
  );
};

export default Branding;
