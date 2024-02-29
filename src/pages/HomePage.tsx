import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const HomePage: React.FC = () => {
    const { t } = useTranslation();
  return (
    <div className="bg-blue-950-100 min-h-screen flex items-center justify-center">
      <div className="max-w-lg p-8 bg-white shadow-lg rounded-lg">
        <h1 className="text-3xl font-semibold mb-4">{t("wel")}</h1>
        <p className="text-gray-700 mb-4">{t("welcomedes")}</p>
        <Link to="/login">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
            {t("GetStart")}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
