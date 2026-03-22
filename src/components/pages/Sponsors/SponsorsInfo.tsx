import { SquareArrowOutUpRight } from "lucide-react";
import { SponsorsList } from "../../../constants";

export default function SponsorsInfo() {
  return (
    <section className="pt-24 flex flex-col justify-center items-center animate-fade-in-y">
      <h1 className="font-Montserrat font-bold text-7xl ">Meet our Sponsors</h1>

      <p className="pt-5 text-center font-Montserrat font-medium text-(--secondary-color)">
        We're grateful for the support of our sponsors who make our racing
        dreams
        <br />a reality. Their partnership enables us to push innovation
        forward.
      </p>

      <div className="grid grid-cols-2 mt-20 gap-6 animate-reveal-y">
        {SponsorsList.map(({ name, description, website, level }) => (
          <div className="relative group">
            <div
              aria-hidden="true"
              className="absolute w-150 h-50 rounded-4xl blur-xl opacity-0 bg-phantom transition-all duration-500 group-hover:opacity-100 group-hover:-translate-y-3"
            ></div>
            <div className="relative w-150 h-50 bg-(--cards-color) py-6 px-6 flex flex-row transition-all duration-500 group-hover:opacity-100 group-hover:-translate-y-3 items-center rounded-4xl">
              <div className="w-20 h-20 p-6 rounded-2xl bg-white"></div>
              <div className="px-8 flex flex-col">
                <h1 className="text-xl pt-3 font-Montserrat font-bold">
                  {name}
                </h1>
                <p className="text-sm pt-2 text-(--accents) font-Montserrat">
                  {level}
                </p>
                <p className="pt-3 font-Montserrat text-(--secondary-color) font-base">
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
