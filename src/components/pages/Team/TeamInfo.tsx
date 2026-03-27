import { TeamData } from "../../../constants";

export default function TeamInfo() {
  return (
    <section className="flex flex-col gap-10 justify-center items-center">
      <div className="relative animate-fade-in-y">
        <h1
          className="absolute uppercase md:ml-0 ml-3 font-Montserrat font-bold md:text-8xl text-6xl"
          style={{ paddingTop: "5rem" }}
        >
          meet the team
        </h1>
        <h1
          aria-hidden="true"
          className="relative md:ml-0 ml-3 uppercase md:text-8xl font-Montserrat text-phantom blur-3xl opacity-100 font-bold text-6xl"
          style={{ paddingTop: "5rem" }}
        >
          meet the team
        </h1>
      </div>
      <p className="md:ml-0 ml-3 md:text-center text-(--secondary-color) font-Montserrat font-medium animate-fade-in-y">
        PHANTOM brings together student engineers focused on CAD design,
        <br />
        aerodynamics, manufacturing, and testing. Every decision is
        <br />
        driven by data, collaboration, and the pursuit of competitive
        <br />
        performance in STEM Racing.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-reveal-y">
        {TeamData.map(({ name, skill, role, image }) => (
          <div className="relative group">
            <div className="absolute w-85 h-150 md:w-100 md:h-160 rounded-4xl bg-phantom blur-sm md:blur-xl opacity-100 md:opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:-translate-y-3" />
            <div className="relative w-85 h-150 md:w-100 md:h-160 rounded-4xl bg-(--cards-color) flex flex-col gap-5 transition-all duration-500 group-hover:-translate-y-3">
              <img
                src={image}
                alt={image}
                className="w-full h-2/3 rounded-t-4xl bg-gray-400"
              />

              <div className="flex flex-col gap-5 px-6 pb-6">
                <h1 className="text-lg font-Montserrat font-bold ">{name}</h1>
                <h1 className="text-base text-(--accents) font-Montserrat font-medium">
                  {role}
                </h1>
                <h1 className="text-base font-Montserrat font-thin">{skill}</h1>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
