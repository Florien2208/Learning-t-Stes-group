import React from "react";
import { useForm, Controller } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Link } from "react-router-dom"; // Assuming you're using React Router for navigation


const Login: React.FC = () => {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  const { t } = useTranslation();

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   // Add your login logic here
  //   console.log("Login with:", email, password);
  // };

  const schema = yup.object().shape({
    email: yup.string().email(t("enter email")).required(t("yu2")),
    password: yup.string().required(t("yu3")),
   
  });
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            {t("Signupdes")}
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit(() => {})}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label
                htmlFor="email-address"
                className="block text-90 font-medium text-gray-700"
              >
                {t("Email")}
              </label>
              <Controller
                name="email"
                control={control}
                render={({ field }) => (
                  <input
                    {...field}
                    id="email-address"
                    type="email"
                    autoComplete="email"
                    placeholder={t("Email")}
                    className="h-12 border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 block w-full px-3 py-2 rounded-md shadow-sm text-sm placeholder-gray-400"
                  />
                )}
              />
              {errors.email && (
                <p className="text-red-500 text-50 italic">
                  {errors.email.message}
                </p>
              )}
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-90 font-medium text-gray-700"
              >
                {t("yui4")}
              </label>
              <Controller
                name="password"
                control={control}
                render={({ field }) => (
                  <input
                    {...field}
                    id="password"
                    type="password"
                    autoComplete="email"
                    placeholder={t("yui4")}
                    className="h-12 border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 block w-full px-3 py-2 rounded-md shadow-sm text-sm placeholder-gray-400"
                  />
                )}
              />
              {errors.password && (
                <p className="text-red-500 text-50 italic">
                  {errors.password.message}
                </p>
              )}
            </div>
          </div>

          <div className="flex justify-center">
            <Link
              to="/signup"
              className="text-indigo-600 hover:text-indigo-900"
            >
              {t("don")}
            </Link>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              {t("Sign")}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
