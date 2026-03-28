import { SquareArrowOutUpRight } from "lucide-react";
import { SponsorsList } from "../../../constants";

export default function SponsorsInfo() {
  return (
    <section className="pt-24 flex flex-col justify-center items-center">
      <div className="relative">
        <h1 className="absolute font-Montserrat font-bold text-7xl ml-3 md:ml-0">
          Meet our Sponsors
        </h1>
        <h1
          aria-hidden="true"
          className="relative text-phantom md:blur-3xl blur-xl opacity-100 ml-3 md:ml-0 font-Montserrat font-bold text-7xl "
        >
          Meet our Sponsors
        </h1>
      </div>

      <p className="pt-5 pr-4 ml-3 md:ml-0 md:text-center font-Montserrat font-medium text-(--secondary-color)">
        We're grateful for the support of our sponsors who make our racing
        dreams
        <br />a reality. Their partnership enables us to push innovation
        forward.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 mt-20 mb-20 gap-14 md:gap-6">
        {SponsorsList.map(({ name, description, website, image, level }) => (
          <div className="relative group">
            <div
              aria-hidden="true"
              className="absolute w-80 h-100 md:w-150 md:h-60 rounded-4xl blur-xs md:blur-xl opacity-100 md:opacity-0 bg-phantom transition-all duration-500 group-hover:opacity-100 group-hover:-translate-y-3"
            ></div>
            <div className="relative w-80 h-100 md:w-150 md:h-60 bg-(--cards-color) py-3 md:py-6 px-6 flex flex-col md:flex-row transition-all duration-500 group-hover:opacity-100 group-hover:-translate-y-3 items-center rounded-4xl">
              <img
                className="w-40 h-40 md:w-30 md:h-30 p-6 rounded-2xl"
                src={image}
                loading="lazy"
                alt={image}
              />
              <div className=" md:px-8 flex flex-col">
                <h1 className="md:text-lg text-xl pt-3 font-Montserrat font-bold">
                  {name}
                </h1>
                <p className="text-sm pt-2 text-(--accents) font-Montserrat">
                  {level}
                </p>
                <p className="pt-2 font-Montserrat text-(--secondary-color) font-base">
                  {description}
                </p>
                <div className="flex items-center gap-2 pt-4 group">
                  <a
                    href={website}
                    className="text-base font-Montserrat font-base transition-all duration-500 group-hover:translate-x-3 group-hover:text-(--accents)"
                  >
                    Visit Website
                  </a>
                  <SquareArrowOutUpRight className="w-4 h-4 transition-all duration-500 group-hover:translate-x-3 group-hover:text-(--accents)" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
