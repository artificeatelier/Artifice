import React from "react";
import logo from "../../Assets/Artifice Studio.jpeg";
import { Link } from "react-router-dom";
import { Container, ActionIcon, Group, rem } from '@mantine/core';
import { IconBrandInstagram, IconBrandGmail, IconPhone } from '@tabler/icons-react';
import { MdOutlineMailOutline } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { useTranslation } from "react-i18next";

export function Footer () {
 const {t} = useTranslation();
  return (
    <div className="bg-black text-white rounded-t-3xl shadow-2xl">
      <div className="container mx-auto p-8 md:p-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="">
            <div className="flex items-center space-x-4">
              <img
                src={logo}
                alt="Artifice Graphics"
                className="w-24 h-auto shadow-lg"
              />
              <h2 className="font-bold text-2xl text-white">
                {t("Artifice Studio")}
              </h2>
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
                {t("contactUs")}
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
                to="/WebDesign"
                className="block text-gray-400 hover:text-white transition duration-300"
              >
                {t("WebDesign")}
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
                className=" text-gray-400 hover:text-white transition duration-300 flex items-center"
              >
                <MdOutlineMailOutline className="text-xl mr-3" />
                {t("email")}
              </a>
              <a
                href={`tel:${t("phone")}`}
                className=" text-gray-400 hover:text-white transition duration-300 flex items-center"
              >
                <FaPhoneAlt className="text-sm mr-3" />
                {t("phone")}
              </a>
              <a
                href="https://goo.gl/maps/yourAddress"
                target="_blank"
                rel="noopener noreferrer"
                className=" text-gray-400 hover:text-white transition duration-300 flex items-start"
              >
                <IoLocationOutline className="text-3xl mr-3 mt-1" />
                <span>{t("address")}</span>
              </a>
            </nav>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            
      <Container>
        <Group
          gap={10}
          justify="flex-end"
          wrap="nowrap"
        >
          <ActionIcon size="lg" color="gray" variant="subtle">
            <IconBrandGmail
              style={{ width: rem(25), height: rem(25) }}
              stroke={1.5}
            />
          </ActionIcon>
          <ActionIcon size="lg" color="gray" variant="subtle">
            <IconBrandInstagram
              style={{ width: rem(25), height: rem(25) }}
              stroke={1.5}
            />
          </ActionIcon>
          <ActionIcon size="lg" color="gray" variant="subtle">
            <IconPhone
              style={{ width: rem(25), height: rem(25) }}
              stroke={1.5}
            />
          </ActionIcon>
        </Group>
      </Container>
          </div>
        </div>
      </div>
    </div>
  );
};
