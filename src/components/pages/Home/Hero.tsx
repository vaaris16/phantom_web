import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section className="pt-64 flex flex-col min-h-screen items-center justify-center animate-fade-in-y">
      <div className="-translate-y-32 gap-4 flex flex-col justify-center items-center">
        <div className="relative overflow-visible">
          <h1 className="relative font-Montserrat font-bold md:text-9xl text-6xl">
            PHANTOM
          </h1>
          <h1
            aria-hidden="true"
            className="absolute inset-0 z-0 md:text-9xl text-6xl text-bold font-Montserrat blur-xl opacity-100 text-phantom"
          >
            PHANTOM
          </h1>
        </div>

        <h1 className="font-Montserrat italic text-center md:text-2xl text-lg text-(--secondary-color)">
          "Seen too Late , Gone too Great " - By Phantom
        </h1>
      </div>

      <div className="-translate-y-24 flex flex-row gap-5 justify-center items-center">
        <button
          onClick={() => navigate("/stem_racing")}
          className="w-40 h-14 md:w-56 md:h-16 hover:scale-105 transition-transform duration-300 bg-white text-lg text-black font-Montserrat font-medium rounded-full"
        >
          Stem Racing
        </button>

        <button
          onClick={() => navigate("/team")}
          className="w-40 h-14 md:w-48 md:h-16 hover:scale-105 transition-transform duration-300 bg-black border-x border-y text-lg text-white font-Montserrat font-medium rounded-full"
        >
          Learn More
        </button>
      </div>

      <div
        style={{
          borderImage:
            "linear-gradient(to bottom left, var(--cyan), var(--neon-pink)) 1",
        }}
        id="arrow"
        className="w-10 h-10 my-28 border-r-4 border-b-4 rotate-45 animate-pulse"
      ></div>
    </section>
  );
}
