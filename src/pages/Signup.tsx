import { useForm, Controller } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const Signup = () => {
  const { t } = useTranslation();

  // Define Yup schema for form validation
  const schema = yup.object().shape({
    fullName: yup.string().required(t("yu1")),
    email: yup.string().email(t("enter email")).required(t("yu2")),
    password: yup.string().required(t("yu3")),
    country: yup.string().required(t("yu4")),
    phoneNumber: yup.string().required(t("yu5")),
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <div className=" flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            {t("Signup")}
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit(() => {})}>
          <div className="rounded-md shadow-sm space-y-4">
            <div>
              <label
                htmlFor="full-name"
                className="block text-90 font-medium text-gray-700"
              >
                {t("yui1")}
              </label>
              <Controller
                name="fullName"
                control={control}
                render={({ field }) => (
                  <input
                    {...field}
                    id="full-name"
                    type="text"
                    autoComplete="name"
                    placeholder={t("yui1")}
                    className="w-full h-12 border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 block px-3 py-2 rounded-md shadow-sm text-sm placeholder-gray-400"
                  />
                )}
              />
              {errors.fullName && (
                <p className="text-red-500 text-50 italic">
                  {errors.fullName.message}
                </p>
              )}
            </div>
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
                htmlFor="full-name"
                className="block text-90 font-medium text-gray-700"
              >
                {t("yui2")}
              </label>
              <Controller
                name="phoneNumber"
                control={control}
                render={({ field }) => (
                  <input
                    {...field}
                    id="phoneNumber"
                    type="text"
                    autoComplete="phoneNumber"
                    placeholder={t("yui2")}
                    className="h-12 border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 block w-full px-3 py-2 rounded-md shadow-sm text-sm placeholder-gray-400"
                  />
                )}
              />
              {errors.phoneNumber && (
                <p className="text-red-500 text-50 italic">
                  {errors.phoneNumber.message}
                </p>
              )}
            </div>
            <div>
              <label
                htmlFor="full-name"
                className="block text-90 font-medium text-gray-700"
              >
                {t("yui3")}
              </label>
              <Controller
                name="country"
                control={control}
                render={({ field }) => (
                  <input
                    {...field}
                    id="country"
                    type="text"
                    autoComplete="country"
                    placeholder={t("yui3")}
                    className="h-12 border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 block w-full px-3 py-2 rounded-md shadow-sm text-sm placeholder-gray-400"
                  />
                )}
              />
              {errors.country && (
                <p className="text-red-500 text-50 italic">
                  {errors.country.message}
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
            {/* Repeat similar pattern for other input fields */}
          </div>
          <div className="mt-6">
            <button
              type="submit"
              className="w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              {t("Signup")}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;

