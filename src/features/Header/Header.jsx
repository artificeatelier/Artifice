import { useState, useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"
import logo from "../../Assets/Artifice Studio.jpeg"
import { ActionIcon, rem } from "@mantine/core"
import { IconBrandInstagram, IconBrandGmail, IconPhone } from "@tabler/icons-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const { t, i18n } = useTranslation()
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language)
  const dropdownRefs = useRef([])

  useEffect(() => {
    setCurrentLanguage(i18n.language)
  }, [i18n.language])

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
  ]

  const navItems = getNavItems()

  useEffect(() => {
    dropdownRefs.current = dropdownRefs.current.slice(0, navItems.length)
  }, [navItems.length])

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index)
  }

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng)
    setCurrentLanguage(lng)
  }

  const renderNavLinks = () => {
    const currentNavItems = getNavItems()
    return (
      <>
        {currentNavItems.map(({ to, text, dropdown }, index) => (
          <div key={to || text} className="w-full border-b border-gray-700 last:border-b-0">
            {dropdown ? (
              <div className="group w-full flex flex-col justify-center items-center" ref={(el) => (dropdownRefs.current[index] = el)}>
                <button
                  className="w-full flex items-center justify-between px-4 py-3 text-left text-base font-medium text-white transition-colors"
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
                {activeDropdown === index && (
                  <div className="w-full bg-black" role="menu">
                    <div className="py-2" role="none">
                      {dropdown.map(({ to, text }) => (
                        <Link
                          key={to}
                          to={to}
                          className="block w-full px-4 py-2 text-sm text-gray-300 hover:bg-black hover:text-white transition-colors"
                          role="menuitem"
                          onClick={() => {
                            toggleMenu()
                            setActiveDropdown(null)
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
                className="block w-full px-4 py-3 text-base font-medium text-white hover:bg-black transition-colors"
                onClick={toggleMenu}
              >
                {text}
              </Link>
            )}
          </div>
        ))}
      </>
    )
  }

  return (
    <div className="fixed w-full z-50 top-0">
      <div className="bg-transparent shadow-lg">
        <div className="flex justify-between items-center p-4 px-6 transition-all duration-300">
          {/* Logo */}
          <Link to="/">
            <div className="flex items-center space-x-3">
              <img src={logo || "/placeholder.svg"} alt="Artifice Graphic" className="w-24 h-24 object-contain" />
            </div>
          </Link>

          {/* Right Side: Flags + Burger */}
          <div className="flex items-center space-x-4">
            {/* Language Switcher */}
            <div className="flex space-x-2">
              <button
                onClick={() => changeLanguage("en")}
                className={`${
                  currentLanguage === "en"
                    ? "p-1 rounded-full border-2 border-white"
                    : "p-1 rounded-full hover:border-gray-400 transition-all"
                }`}
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg/250px-Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg.png"
                  alt="English"
                  className="w-8 h-8 rounded-full"
                />
              </button>
              <button
                onClick={() => changeLanguage("fr")}
                className={`${
                  currentLanguage === "fr"
                    ? "p-1 rounded-full border-2 border-white"
                    : "p-1 rounded-full hover:border-gray-400 transition-all"
                }`}
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/Flag_of_France.svg/250px-Flag_of_France.svg.png"
                  alt="Français"
                  className="w-8 h-8 rounded-full"
                />
              </button>
            </div>

            {/* Burger Icon */}
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

        {/* Fullscreen Toggle Menu */}
        {isMenuOpen && (
          <div className="fixed inset-0 bg-black z-50 overflow-y-auto">
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
              {renderNavLinks()}
              <div className="flex justify-center space-x-6 mt-8">
                <a href="mailto:Contact@artificeatelier.com" target="_blank" rel="noopener noreferrer">
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
  )
}
