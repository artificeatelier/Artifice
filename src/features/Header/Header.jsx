import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import logo from "../../Assets/Artifice Studio.jpeg";
import { ActionIcon, rem } from "@mantine/core";
import { IconBrandInstagram, IconBrandGmail, IconPhone } from "@tabler/icons-react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const { t, i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);
  const dropdownRefs = useRef([]);

  useEffect(() => {
    setCurrentLanguage(i18n.language);
  }, [i18n.language]);

  const getNavItems = () => [
    { to: "/", text: t("Accueil") },
    { to: "/about", text: t("À propos de nous") },
    { to: "/Work", text: t("Portefeuille de travail") },
    {
      text: t("Prestations"),
      dropdown: [
        { to: "/branding", text: t("Branding & Design") },
        { to: "/LogoDesign", text: t("LogoDesign") },
        { to: "/WebDesign", text: t("WebDesign") },
      ],
    },
    { to: "/contact", text: t("Contactez-nous") },
  ];

  const navItems = getNavItems();

  useEffect(() => {
    dropdownRefs.current = dropdownRefs.current.slice(0, navItems.length);
  }, [navItems.length]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setCurrentLanguage(lng);
  };

  const renderNavLinks = (isMobile = false) => {
    const currentNavItems = getNavItems();
    return (
      <>
        {currentNavItems.map(({ to, text, dropdown }, index) => (
          <div
            key={to || text}
            className={`relative ${isMobile ? "w-full border-b border-gray-700 last:border-b-0" : ""}`}
          >
            {dropdown ? (
              <div
                className={`${isMobile ? "group w-full flex flex-col justify-center items-center" : "group w-full inline-block"}`}
                ref={(el) => (dropdownRefs.current[index] = el)}
              >
                <button
                  className={`${
                    isMobile
                      ? "w-full flex items-center justify-between px-4 py-3 text-left text-base font-medium text-white transition-colors"
                      : "text-white hover:text-gray-400 transition-colors py-2 px-4 rounded-md inline-flex items-center"
                  }`}
                  onClick={() => toggleDropdown(index)}
                >
                  <span>{text}</span>
                  <svg
                    className={`h-5 w-5 transition-transform ${activeDropdown === index ? "rotate-180" : ""}`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                {((isMobile && activeDropdown === index) || (!isMobile && activeDropdown === index)) && (
                  <div
                    className={`${
                      isMobile
                        ? "w-full bg-black"
                        : "absolute left-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                    }`}
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="menu-button"
                  >
                    <div className={`${isMobile ? "py-2" : "py-1"}`} role="none">
                      {dropdown.map(({ to, text }) => (
                        <Link
                          key={to}
                          to={to}
                          className={`${
                            isMobile
                              ? "block w-full px-4 py-2 text-sm text-gray-300 hover:bg-black hover:text-white transition-colors"
                              : "text-gray-700 block px-4 py-2 text-sm hover:bg-black hover:text-white transition-colors"
                          }`}
                          role="menuitem"
                          onClick={() => {
                            if (isMobile) toggleMenu();
                            setActiveDropdown(null);
                          }}
                        >
                          {text}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link
                to={to}
                className={`${
                  isMobile
                    ? "block w-full px-4 py-3 text-base font-medium text-white hover:bg-black transition-colors"
                    : "text-white hover:text-gray-400 transition-colors py-2 px-4 rounded-md"
                }`}
                onClick={isMobile ? toggleMenu : null}
              >
                {text}
              </Link>
            )}
          </div>
        ))}

        {/* Language Selector with Flag Buttons for Desktop */}
        {!isMobile && (
          <div className="flex space-x-2">
            <button
              onClick={() => changeLanguage("en")}
              className={`${
                currentLanguage === "en"
                  ? "p-1 border-2 border-white"
                  : "p-1 hover:border-gray-400 transition-all"
              }`}
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg/250px-Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg.png"
                alt="English"
                className="w-10 h-7"
              />
            </button>
            <button
              onClick={() => changeLanguage("fr")}
              className={`${
                currentLanguage === "fr"
                  ? "p-1 border-2 border-white"
                  : "p-1 hover:border-gray-400 transition-all"
              }`}
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/Flag_of_France.svg/250px-Flag_of_France.svg.png"
                alt="Français"
                className="w-10 h-7"
              />
            </button>
          </div>
        )}
      </>
    );
  };

  return (
    <div className="w-full z-50 top-0">
      <div className="bg-black shadow-lg">
        <div className="flex flex-row justify-between items-center pt-4 px-4 md:px-16 lg:px-16 transition-all duration-300">
          {/* Logo */}
          <Link to="/">
            <div className="flex flex-row items-center cursor-pointer space-x-3">
              <img
                src={logo || "/placeholder.svg"}
                alt="Artifice Graphic"
                className="w-24 h-24 md:w-20 md:h-20 object-contain"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex flex-row items-center text-base lg:text-lg font-medium space-x-6 lg:space-x-8">
            {renderNavLinks()}
          </nav>

          {/* Mobile & Tablet Menu Button */}
          <div className="lg:hidden flex items-center space-x-3">
            <div className="flex space-x-1">
              <button
                onClick={() => changeLanguage("en")}
                className={`${
                  currentLanguage === "en"
                    ? "p-1 border-2 border-white"
                    : "p-1 hover:border-gray-400 transition-all"
                }`}
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg/250px-Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg.png"
                  alt="English"
                  className="w-7 h-5"
                />
              </button>
              <button
                onClick={() => changeLanguage("fr")}
                className={`${
                  currentLanguage === "fr"
                    ? "p-1 border-2 border-white"
                    : "p-1 hover:border-gray-400 transition-all"
                }`}
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/Flag_of_France.svg/250px-Flag_of_France.svg.png"
                  alt="Français"
                  className="w-7 h-5"
                />
              </button>
            </div>

            {/* Menu Toggle Button */}
            <button
              className="text-white hover:text-gray-400 transition-colors focus:outline-none"
              onClick={toggleMenu}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile & Tablet Navigation Menu - Overlay */}
        {isMenuOpen && (
          <div className="lg:hidden fixed inset-0 bg-black z-50 overflow-y-auto">
            <div className="flex justify-end p-4">
              <button
                className="text-white hover:text-gray-400 transition-colors focus:outline-none"
                onClick={toggleMenu}
                aria-label="Close menu"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="flex flex-col items-stretch justify-start min-h-screen pb-16 pt-4">
              {renderNavLinks(true)}

              <div className="flex justify-center space-x-6 mt-8">
                <a href="mailto:contact@artificeatelier.com" target="_blank" rel="noopener noreferrer">
                  <ActionIcon size="lg" color="gray" variant="subtle">
                    <IconBrandGmail style={{ width: rem(30), height: rem(30) }} stroke={1.5} />
                  </ActionIcon>
                </a>
                <a href="https://www.instagram.com/artifice_atelier?igsh=MWtiMmlyNTV4b2h4dw==" target="_blank" rel="noopener noreferrer">
                  <ActionIcon size="lg" color="gray" variant="subtle">
                    <IconBrandInstagram style={{ width: rem(30), height: rem(30) }} stroke={1.5} />
                  </ActionIcon>
                </a>
                <a href="tel:+33668672365">
                  <ActionIcon size="lg" color="gray" variant="subtle">
                    <IconPhone style={{ width: rem(30), height: rem(30) }} stroke={1.5} />
                  </ActionIcon>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
