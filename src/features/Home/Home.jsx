import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { FaPenFancy, FaFacebookF,FaBoxOpen, FaLaptopCode, FaClipboard } from 'react-icons/fa';
import { Link } from 'react-router-dom';


import about from '../../Assets/About.jpg';
import hero from '../../Assets/hero.png'
import Testimonial1 from '../../Assets/Testimonial1.jpg'
import Testimonial2 from '../../Assets/Testimonial2.jpg'
import Testimonial3 from '../../Assets/Testimonial3.jpg'
import Testimonial4 from '../../Assets/Testimonial4.jpg'
import { FaGlobe } from "react-icons/fa6";
import { DiIllustrator } from "react-icons/di";


const Home = () => {
    const { t } = useTranslation(); 
    const canvasRef = useRef(null);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 640);
    const [showText, setShowText] = useState(false);
    const [showImages, setShowImages] = useState(false);


  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    ctx.fillStyle = 'rgba(0, 0, 0, 0.8)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }, []);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowText(true);
      setShowImages(true);
    }, 500);

    return () => clearTimeout(timeoutId);
  }, []);

  const testimonials = [
  {
    id: 1,
    name: 'MATHIEU LAURENT',
    content: t("Testimonial1"),
  },
  {
    id: 2,
    name: 'JULIAN DAIK',
    content: t("Testimonial2")
  },
  {
    id: 3,
    name: 'EWA HOLIK ',
    content: t("Testimonial3")
  },
];
 
const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % testimonials.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + testimonials.length) % testimonials.length);
  };


const services = [
  {
    icon: <FaPenFancy />,
    title: t("Branding"),
    description: t("BrandingDetail"),
    link: "/Real_Estate_Rodeo"
  },
  {
    icon: <FaFacebookF />,
    title: t("SocialMediaDesign"),
    description: t("SocialMediaDetail"),
    link: "/Social_Media"
  },
  {
    icon: <FaClipboard />,
    title: t("PrintingDesign"),
    description: t("PrintingDetail"),
    link: "/Flyers"
  },
  {
    icon: <FaLaptopCode />,
    title: t("WebDesign"),
    description: t("webDetail"),
    link: "#"
  },
  {
    icon: <DiIllustrator />,
    title: t("LogoDesign"),
    description: t("LogoDesignDetail"),
    link: "/Logos"
  },
  {
    icon: <FaBoxOpen />,
    title: t("PackagingDesign"),
    description: t("PackagingDesignDetail"),
    link: "/Packging"
  }
];


  const countData = [
  { label: t("YearOfExp"), target: 10 },
  { label: t("HappyClient"), target: 1000 },
  { label: t("ProjectsAccomplished"), target: 1500 },
  { label: t("TeamMembers"), target: 50 },
] 
 
 const [counts, setCounts] = useState(countData.map(() => 0))

  useEffect(() => {
    const interval = setInterval(() => {
      setCounts(prevCounts =>
        prevCounts.map((count, index) => {
          if (count < countData[index].target) {
            return count + Math.ceil(countData[index].target / 100)
          }
          return countData[index].target
        })
      )
    }, 50)

    return () => clearInterval(interval)
  }, [])
  

    
  return (
    <div className="pt-28 sm:pt-24 md:pt-28 lg:pt-28 xl:pt-28 top-1 ">
    <div className="landing-page">

    {/* -----Hero Section----- */}
    <section className="py-12 bg-black sm:pb-16 lg:pb-20 xl:pb-24">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
            <div className="relative">
                <div className="lg:w-2/3">
                    <p className="text-lg font-normal tracking-widest text-gray-300 uppercase">{t("FirstLine")}</p>
                    <h1 className="mt-6 text-5xl  text-white sm:mt-10 sm:text-5xl lg:text-7xl xl:text-8xl font-bold ">ARTIFICE <br/> ATELIER</h1>
                    <p className="max-w-lg mt-4 text-xl font-normal text-white sm:mt-8">{t("description")}</p>
                    <div className="relative inline-flex items-center justify-center mt-8 sm:mt-12 group">
                        <div className="absolute transition-all duration-200 rounded-full -inset-px bg-gradient-to-tl from-black to-white group-hover:shadow-lg group-hover:shadow-white/50"></div>
                        <Link
                          to="/contact" 
                          title="Start Exploring Inspiration"
                          className="relative inline-flex items-center justify-center px-8 py-3 text-base font-normal text-white bg-black border border-transparent rounded-full"
                        >
                          {t("Contactez-nous")}
                        </Link>
                    </div>
                </div>

                <div className="mt-4 md:absolute md:mt-0 md:top-32 lg:top-0 md:right-0">
                    <img className="w-full max-w-xs mx-auto lg:max-w-lg xl:max-w-xl" src={hero} alt="" />
                </div>
            </div>
        </div>
    </section>


    {/* -----Service Section----- */}
    <section className="py-10 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl md:text-5xl font-bold text-center mb-5">{t("WhatWeProvide")}</h1>
        <div className="text-center mb-8">
          <p className="max-w-4xl mx-auto">{t("WhatWeProvideDetail")}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {services.map((service, index) => (
            <Link key={index} to={service.link} >
              <div className="bg-white/5 rounded-lg p-6 transition-transform transform hover:scale-105 cursor-pointer text-white shadow-lg flex flex-col h-full">
                <div className="text-5xl mb-4 text-center">{service.icon}</div>
                <h3 className="text-2xl font-semibold text-center">{service.title}</h3>
                <p className="text-white py-3 text-center transition-colors duration-300 flex-grow">{service.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>


    {/* -----Counter----- */}
    <section className="bg-black py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-4xl font-bold text-center text-white mb-12">{t("CounterHead")}</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {countData.map((item, index) => (
            <div key={item.label} className="text-center">
              <span className="text-6xl font-bold text-white">{counts[index]}</span>
              <span className="text-2xl font-bold text-white">+</span>
              <p className="mt-4 text-xl font-semibold text-white">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>


    {/* -----About Us Section----- */}
    <section className="min-h-screen bg-black py-16">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex flex-col lg:flex-row gap-12">
      {/* Static Image Side */}
      <div className="w-full h-96 lg:w-1/2 lg:sticky lg:top-16 lg:h-[calc(100vh-4rem)]">
        <div className="relative h-full  overflow-hidden">
          <img
            src={about}
            alt="About Us"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Scrolling Text Side */}
      <div className="w-full lg:w-1/2">
        <div className="space-y-16 text-white">
          <div>
            <h2 className="text-4xl font-bold mb-6">{t("WhoWeAre")}</h2>
            <p className="text-lg text-gray-300 mb-8">{t("DecribeWhoWeAre")}</p>
          </div>

          <div className="space-y-16">
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-6 p-4 rounded-xl bg-white/5 dark:bg-white/5 border border-gray-100 dark:border-gray-900">
                <span className="rounded-full bg-gray-900 dark:bg-gray-100 text-gray-100 dark:text-gray-900 w-max p-3 flex">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                  </svg>
                </span>
                <h2 className="font-semibold text-xl text-white dark:text-white">{t("OurMission")}</h2>
                <p>{t("OurMissionText")}</p>
              </div>

              <div className="space-y-6 p-4 rounded-xl bg-white/5 dark:bg-white/5 border border-gray-100 dark:border-gray-900">
                <span className="rounded-full bg-gray-900 dark:bg-gray-100 text-gray-100 dark:text-gray-900 w-max p-3 flex">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </span>
                <h2 className="font-semibold text-xl text-white dark:text-white">{t("OurVision")}</h2>
                <p>{t("OurVisionText")}</p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-6 p-4 rounded-xl bg-white/5 dark:bg-white/5 border border-gray-100 dark:border-gray-900">
                {/* New Icon for Our Values: Heart */}
                <span className="rounded-full bg-gray-900 dark:bg-gray-100 text-gray-100 dark:text-gray-900 w-max p-3 flex">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 0 1-.982-3.172M9.497 14.25a7.454 7.454 0 0 0 .981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 0 0 7.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 0 0 2.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 0 1 2.916.52 6.003 6.003 0 0 1-5.395 4.972m0 0a6.726 6.726 0 0 1-2.749 1.35m0 0a6.772 6.772 0 0 1-3.044 0" />
                  </svg>
                </span>
                <h2 className="font-semibold text-xl text-white dark:text-white">{t("OurValue")}</h2>
                <p>{t("OurValueText")}</p>
              </div>

              <div className="space-y-6 p-4 rounded-xl bg-white/5 dark:bg-white/5 border border-gray-100 dark:border-gray-900">
                <span className="rounded-full bg-gray-900 dark:bg-gray-100 text-gray-100 dark:text-gray-900 w-max p-3 flex">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 13l-7 7-7-7M5 6l7 7 7-7" />
                  </svg>
                </span>
                <h2 className="font-semibold text-xl text-white dark:text-white">{t("OurApproach")}</h2>
                <p>{t("OurApproachText")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    </section>


    {/* -----Testimonial Section----- */}
    <section>
        <div className="bg-black text-white min-h-screen flex items-center justify-center relative">
      {/* Images - Hidden on mobile/tablet */}
      <img src={ Testimonial1 } alt="Top Left" className="h-48 w-auto  absolute top-20 left-24 hidden lg:block" style={{ margin: '20px' }} />
      <img src={ Testimonial2 } alt="Bottom Left" className="h-32 w-auto  absolute bottom-32 left-1 hidden lg:block" style={{ margin: '20px' }} />
      <img src={ Testimonial3 } alt="Right Middle" className="h-auto w-52  absolute top-24 right-28 transform -translate-y-1/2 hidden lg:block" style={{ margin: '20px' }} />
      <img src={ Testimonial4 } alt="Right Middle" className="h-auto w-52  absolute top-1/3 right-2 transform -translate-y-1/2 hidden lg:block" style={{ margin: '20px' }} />


      <div className="w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-5xl font-extrabold text-center mb-8 sm:mb-12">{t("WhatOurClientsSay")}</h2>
        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0">
                  <div className="text-center px-4 sm:px-8">
                    <div className="mb-4 sm:mb-8">
                      <svg className="w-12 h-12 sm:w-16 sm:h-16 mx-auto text-white opacity-25" fill="currentColor" viewBox="0 0 32 32">
                        <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                      </svg>
                    </div>
                    <p className="text-base sm:text-xl mb-4 sm:mb-8">{testimonial.content}</p>
                    <p className="font-bold text-sm sm:text-base">{testimonial.name}</p>
                    <p className="text-sm sm:text-base">{testimonial.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center mt-8 space-x-4">
          <button
            onClick={prevSlide}
            className="bg-white text-black rounded-full p-2 hover:bg-gray-200 focus:outline-none transition-colors duration-200"
            aria-label="Previous testimonial"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="bg-white text-black rounded-full p-2 hover:bg-gray-200 focus:outline-none transition-colors duration-200"
            aria-label="Next testimonial"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
    </section>

    </div>
    </div>
  );
};

export default Home;
