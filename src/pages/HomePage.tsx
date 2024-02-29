import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useCounterStore } from "../zustand/store";

const HomePage = () => {
  const { t } = useTranslation();
  const { count, increment, decrement } = useCounterStore();
  return (
    <>
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
      <div className="flex flex-col justify-center items-center">
        <p className="text-xl font-semibold mb-2">Count: {count}</p>
        <div className="flex space-x-4">
          <button
            onClick={increment}
            className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded"
          >
            Increment
          </button>
          <button
            onClick={decrement}
            className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white font-semibold rounded"
          >
            Decrement
          </button>
        </div>
      </div>
    </>
  );
};

export default HomePage;
