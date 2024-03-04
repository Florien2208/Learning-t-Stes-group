import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useCounterStore } from "../zustand/store";
import useSWR from "swr";

interface UserData {
  name: string;
}

const fetcher = (args: string) =>
  fetch(args).then((response) => response.json());
const HomePage = () => {
  const { t } = useTranslation();
  const { count, increment, decrement } = useCounterStore();
  const { data, error } = useSWR("", fetcher);
  if (error) return <h1>{error}</h1>;
  return (
    <>
      <div className="flex">
        <img
          src="data:image/jpeg;base64,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" // Replace with your image path
          alt="Company Image"
          className="w-90 h-80  ml-80"
        />
        <div className="bg-blue-950-100 min-h-screen flex ">
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
      </div>
      <div>
        {data ? (
          data.map((user: UserData) => {
            return <h1>{user.name}</h1>;
          })
        ) : (
          <h1>loading...</h1>
        )}
      </div>
      <div className="flex flex-col justify-center items-center">
        <p className="text-xl font-semibold mb-2">
          {t("Count")} {count}
        </p>
        <div className="flex space-x-4">
          <button
            onClick={increment}
            className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded"
          >
            {t("Increment")}
          </button>
          <button
            onClick={decrement}
            className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white font-semibold rounded"
          >
            {t("Decrement")}
          </button>
        </div>
      </div>
    </>
  );
};

export default HomePage;
