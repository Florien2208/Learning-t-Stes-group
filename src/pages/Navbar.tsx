import React, { useState } from "react";
import { useTranslation } from "react-i18next";

interface NavLink {
  label: string;
  href: string;
}

const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Login", href: "/login" },
];

const languages = [
  { code: "en", label: "English" },
  { code: "fr", label: "French" },
  { code: "kin", label: "Kinyarwanda" },
];

const Navbar: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState("en");

  const handleLanguageChange = (code: string) => {
    i18n.changeLanguage(code);
    setSelectedLanguage(code);
  };

  return (
    <>
      <nav className="fixed top-0 w-full bg-gray-800 flex flex-col md:flex-row justify-between text-white p-9 z-10">
        <h1 className="text-2xl font-bold md:text-3xl">{t("App")}</h1>
        <ul className="flex space-x-4 md:space-x-8">
          {navLinks.map((link) => (
            <li key={link.label} className="hover:text-gray-400">
              <a href={link.href} className="active:text-primary">
                {t(link.label)}
              </a>
            </li>
          ))}
          <li className="hover:text-gray-400">
            <select
              className="active:text-primary bg-transparent border-none"
              value={selectedLanguage}
              onChange={(e) => handleLanguageChange(e.target.value)}
            >
              {languages.map((lang) => (
                <option key={lang.code} value={lang.code}>
                  {lang.label}
                </option>
              ))}
            </select>
          </li>
        </ul>
      </nav>
      {/* Add some padding to simulate the content scrolling */}
      <div className="h-20 md:h-40" />
    </>
  );
};

export default Navbar;
