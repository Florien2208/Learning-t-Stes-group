import { useForm, Controller } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const Signup = () => {
  const { t } = useTranslation();

  // Define Yup schema for form validation
  const schema = yup.object().shape({
    fullName: yup.string().required("Full Name is required"),
    email: yup.string().email("Invalid email").required("Email is required"),
    password: yup.string().required("Password is required"),
    country: yup.string().required("Country is required"),
    phoneNumber: yup.string().required("Phone Number is required"),
  });

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema), // Use yupResolver from '@hookform/resolvers/yup'
  });

  const onSubmit = (data) => {
    console.log("Signup with:", data);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            {t("Signup")}
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="full-name" className="sr-only">
                {t("Full Name")}
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
                    placeholder={t("Full Name")}
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  />
                )}
              />
              {errors.fullName && <p>{errors.fullName.message}</p>}
            </div>
            <div>
              <label htmlFor="email-address" className="sr-only">
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
                    placeholder={t("Email address")}
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  />
                )}
              />
              {errors.email && <p>{errors.email.message}</p>}
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                {t("Password")}
              </label>
              <Controller
                name="password"
                control={control}
                render={({ field }) => (
                  <input
                    {...field}
                    id="password"
                    type="password"
                    autoComplete="new-password"
                    placeholder={t("Password")}
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  />
                )}
              />
              {errors.password && <p>{errors.password.message}</p>}
            </div>
            <div>
              <label htmlFor="country" className="sr-only">
                {t("Country")}
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
                    placeholder={t("Country")}
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  />
                )}
              />
              {errors.country && <p>{errors.country.message}</p>}
            </div>
            <div>
              <label htmlFor="phone-number" className="sr-only">
                {t("Phone Number")}
              </label>
              <Controller
                name="phoneNumber"
                control={control}
                render={({ field }) => (
                  <input
                    {...field}
                    id="phone-number"
                    type="tel"
                    autoComplete="tel"
                    placeholder={t("Phone Number")}
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  />
                )}
              />
              {errors.phoneNumber && <p>{errors.phoneNumber.message}</p>}
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
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
