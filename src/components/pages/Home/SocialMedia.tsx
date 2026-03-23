import { EngineeringExcellence } from "../../../constants";

export default function SocialMedia() {
  return (
    <section className="flex flex-col justify-center items-center gap-20">
      <div className="relative overflow-visible animate-reveal-y">
        <h1
          aria-hidden="true"
          className="absolute uppercase text-3xl md:text-8xl font-Montserrat md:blur-3xl text-phantom opacity-100 blur-xl font-bold"
        >
          Social Media
        </h1>
        <h1 className="relative uppercase text-4xl md:text-8xl font-Montserrat text-phantom font-bold">
          Social Media
        </h1>
      </div>

      <div className="flex flex-col md:flex-row gap-10 pb-28 items-center justify-center">
        {EngineeringExcellence.map(({ label, image, website }) => (
          <a href={website} className="relative group animate-reveal-y">
            <div className="absolute bg-phantom opacity-100 md:opacity-0 blur-lg md:blur-xl w-80 h-80 transition-all duration-500 group-hover:opacity-70 group-hover:-translate-y-3"></div>

            <div className="relative group-hover:-translate-y-3 transition-all duration-500 flex items-end justify-start bg-black rounded-3xl w-80 h-80">
              <img
                src={image}
                alt={image}
                className="absolute rounded-4xl inset-0 w-full h-full object-cover"
              />
              <h1 className="z-10 text-white text-lg font-bold font-Montserrat m-5">
                {label}
              </h1>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
