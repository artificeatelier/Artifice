import React from "react";
import logo from "../../Assets/Artifice Studio.jpeg";
import { Link } from "react-router-dom";
import { Container, ActionIcon, Group, rem } from '@mantine/core';
import { IconBrandInstagram, IconBrandGmail, IconPhone } from '@tabler/icons-react';
import { LuMail } from "react-icons/lu";
import { HiOutlinePhoneArrowUpRight } from "react-icons/hi2";
import { RiMapPinLine } from "react-icons/ri";
import { useTranslation } from "react-i18next";

export function Footer () {
 const {t} = useTranslation();
  return (
    <div className="bg-black text-white shadow-2xl">
      <div className="container mx-auto p-8 md:p-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="">
            <div className="flex items-center space-x-4">
              <img
                src={logo}
                alt="Artifice Atelier"
                className="w-24 h-auto shadow-lg"
              />
            </div>
            <p className="text-gray-400">{t("description")}</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-6">
              {t("navigation")}
            </h2>
            <nav className="space-y-3">
              <Link
                to="/"
                className="block text-gray-400 hover:text-white transition duration-300"
              >
                {t("home")}
              </Link>
              <Link
                to="/about"
                className="block text-gray-400 hover:text-white transition duration-300"
              >
                {t("aboutUs")}
              </Link>
              <Link
                to="/Work"
                className="block text-gray-400 hover:text-white transition duration-300"
              >
                {t("Portfolio")}
              </Link>
              <Link
                to="/contact"
                className="block text-gray-400 hover:text-white transition duration-300"
              >
                {t("contact")}
              </Link>
            </nav>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-6">
              {t("ourservices")}
            </h2>
            <nav className="space-y-3">
              <Link
                to="/branding"
                className="block text-gray-400 hover:text-white transition duration-300"
              >
                {t("Branding & Design")}
              </Link>
              <Link
                to="/LogoDesign"
                className="block text-gray-400 hover:text-white transition duration-300"
              >
                {t("LogoDesign")}
              </Link>
              <Link
                to="/Web_UI_UX_Design_Service"
                className="block text-gray-400 hover:text-white transition duration-300"
              >
                {t("Web_UIUX_Design")}
              </Link>
            </nav>
          </div>

          <div>
  <h2 className="text-2xl font-bold text-white mb-6">
    {t("contacte")}
  </h2>
  <nav className="space-y-4">
    <a
      href={`mailto:${t("email")}`}
      className="text-gray-400 hover:text-white transition duration-300 flex items-center"
    >
      <LuMail className="text-xl mr-3" />
      {t("email")}
    </a>
    <a
      href={`tel:${t("phone")}`}
      className="text-gray-400 hover:text-white transition duration-300 flex items-center"
    >
      <HiOutlinePhoneArrowUpRight className="text-xl mr-3" />
      {t("phone")}
    </a>
    <a
      href="https://maps.app.goo.gl/6wE2n1YL7TubHcq87"
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-400 hover:text-white transition duration-300 flex items-center"
    >
      <RiMapPinLine className="text-xl mr-3" />
      <span>{t("address")}</span>
    </a>
  </nav>
</div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            
      <Container>
  <Group gap={10} justify="flex-end" wrap="nowrap">
    <ActionIcon
      component="a"
      href="mailto:contact@artificeatelier.com"
      target="_blank"
      size="lg"
      color="gray"
      variant="subtle"
    >
      <IconBrandGmail style={{ width: rem(25), height: rem(25) }} stroke={1.5} />
    </ActionIcon>
    <ActionIcon
      component="a"
      href="https://www.instagram.com/artifice_atelier?igsh=MWtiMmlyNTV4b2h4dw=="
      target="_blank"
      size="lg"
      color="gray"
      variant="subtle"
    >
      <IconBrandInstagram style={{ width: rem(25), height: rem(25) }} stroke={1.5} />
    </ActionIcon>
    <ActionIcon
      component="a"
      href="tel:+33668672365"
      size="lg"
      color="gray"
      variant="subtle"
    >
      <IconPhone style={{ width: rem(25), height: rem(25) }} stroke={1.5} />
    </ActionIcon>
  </Group>
</Container>

          </div>
        </div>
      </div>
    </div>
  );
};
