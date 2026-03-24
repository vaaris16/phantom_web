import { MailCheck } from "lucide-react";
import { TextFieldsData } from "../../../constants";

export default function Subscribe() {
  return (
    <section className="flex flex-row justify-center items-center pt-10">
      <div className="w-80 h-130 md:w-120 md:h-120 bg-(--cards-color) flex flex-col rounded-4xl">
        <h1 className="text-3xl px-8 pt-8 font-bold font-Montserrat">
          Subscribe To Phantom
        </h1>
        <p className="font-Montserrat text-(--secondary-color) pt-4 px-8">
          Subscribe to receive weekly updates about our progress, competitions,
          and team achievements.
        </p>

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
            />
          </div>
        ))}
        <button className="w-65 md:w-100 font-Montserrat font-medium gap-2 h-12 text-black justify-center flex items-center bg-white rounded-xl ml-8 mt-6 transition-all duration-500 hover:scale-102">
          <MailCheck></MailCheck>
          Subscribe For Updates
        </button>
      </div>
    </section>
  );
}
