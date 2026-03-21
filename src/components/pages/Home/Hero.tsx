export default function Hero() {
  return (
    <section className="pt-64 flex flex-col min-h-screen items-center justify-center animate-fade-in-y">
      <div className="-translate-y-32 gap-4 flex flex-col justify-center items-center">
        <div className="relative overflow-visible">
          <h1 className="relative font-Montserrat font-bold text-9xl">
            PHANTOM
          </h1>
          <h1
            aria-hidden="true"
            className="absolute inset-0 z-0 text-9xl text-bold font-Montserrat blur-2xl opacity-100 text-phantom"
          >
            PHANTOM
          </h1>
        </div>

        <h1 className="font-Montserrat italic text-2xl text-[#757983]">
          "Seen to Late, Gone to Great" - By Phantom
        </h1>
      </div>

      <div className="-translate-y-24 flex flex-row gap-10 justify-center items-center">
        <button className="w-56 h-16 hover:scale-105 transition-transform duration-300 bg-white text-lg text-black font-Montserrat font-medium rounded-full">
          Join our Community
        </button>

        <button className="w-48 h-16 hover:scale-105 transition-transform duration-300 bg-black border-x border-y text-lg text-white font-Montserrat font-medium rounded-full">
          Learn More
        </button>
      </div>

      <div
        style={{
          borderImage: "linear-gradient(to bottom left, #00FFFF, #FF10F0) 1",
        }}
        id="arrow"
        className="w-10 h-10 my-28 border-r-4 border-b-4 rotate-45 animate-pulse"
      ></div>
    </section>
  );
}
