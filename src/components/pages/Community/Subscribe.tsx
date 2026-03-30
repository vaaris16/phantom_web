import { MailCheck } from "lucide-react";
import { CircleCheck } from "lucide-react";

import { TextFieldsData } from "../../../constants";
import sub from "./api/sub";

import { useState } from "react";

type Subscriber = {
  email: string;
  name: string;
};

export default function Subscribe() {
  const [value, setValue] = useState<Subscriber>({ email: "", name: "" });
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [loader, setLoader] = useState(false);

  async function handle_sub() {
    setLoader(true);
    const result = await sub(value.email, value.name);
    setLoader(false);

    if (!result.success) {
      setError(result.error);
    } else {
      setSuccess(true);
    }
  }

  return (
    <section className="flex flex-row justify-center items-center pt-10">
      <div className="w-80 h-145 md:w-120 md:h-120 bg-(--cards-color) flex flex-col rounded-4xl">
        <h1 className="text-3xl px-8 pt-8 font-bold font-Montserrat">
          Subscribe To Phantom
        </h1>
        <p className="font-Montserrat text-(--secondary-color) pt-4 px-8">
          Subscribe to receive weekly updates about our progress, competitions,
          and team achievements.
        </p>

        {success && (
          <div className="h-full w-full flex flex-col gap-10 justify-center items-center">
            <CircleCheck className="size-56" color="#50c861" />
            <p className="font-Montserrat px-5 text-center text-(--accents)">
              A verification email has been sent to your email
            </p>
          </div>
        )}

        {loader && (
          <div className="h-full w-full flex items-center justify-center">
            <div className="w-40 h-40 rounded-full border-8 animate-spin border-(--cards-color) border-t-(--accents)" />
          </div>
        )}

        {!loader && !success && (
          <>
            {TextFieldsData.map(({ placeholder, label, id, type }) => (
              <div key={id}>
                <label
                  htmlFor={id}
                  className="block text-sm font-thin font-Montserrat mt-6 ml-8 mb-3"
                >
                  {label}
                </label>
                <input
                  id={id}
                  className="w-65 md:w-100 h-12 ml-8 rounded-xl border-white border-[0.5px] px-5 bg-(--text-field) transition-all duration-500 focus:outline-none focus:border-purple-500"
                  placeholder={placeholder}
                  type={type}
                  onChange={(e) =>
                    setValue((prev) => ({ ...prev, [id]: e.target.value }))
                  }
                />

                {error && (
                  <p className="text-red-600 font-Montserrat text-sm font-thin ml-8 mt-1">
                    {error}
                  </p>
                )}
              </div>
            ))}
            <button
              onClick={handle_sub}
              disabled={loader}
              className="w-65 md:w-100 font-Montserrat font-medium gap-2 h-12 text-black justify-center flex items-center bg-white rounded-xl ml-8 mt-6 transition-all duration-500 hover:scale-102"
            >
              <MailCheck></MailCheck>
              Subscribe For Updates
            </button>
          </>
        )}
      </div>
    </section>
  );
}
