export default function CarShowCase() {
  return (
    <section className="flex flex-col justify-center items-center animate-reveal-y gap-20">
      <div className="flex flex-col justify-center items-center md:gap-10 gap-5">
        <div className="relative inline-block overflow-visible">
          <h1
            aria-hidden="true"
            className="absolute inset-0 z-0 md:text-7xl text-3xl text-bold blur-2xl opacity-100 text-phantom"
          >
            Meet The Spectre X9
          </h1>

          <h1 className="relative z-10 md:text-7xl text-3xl font-bold text-phantom">
            Meet The Spectre X9
          </h1>
        </div>

        <h1 className="md:text-2xl text-base italic text-(--secondary-color)">
          "If you can dream it, you can do it." - Enzo Ferrari
        </h1>
      </div>

      <div className="inline-block relative overflow-visible">
        <div className="absolute w-75 h-65 md:w-250 md:h-150 rounded-4xl -z-1 inset-0 blur-xl bg-phantom opacity-70"></div>
        <div className="relative flex flex-col justify-center items-center w-75 h-65 md:w-250 md:h-150 rounded-4xl -z-1 inset-0 bg-black">
          <img
            className="rounded-4xl w-75 h-65 md:h-150 md:w-250"
            loading="lazy"
            src="/images/home/car_showcase.png"
            alt="car_showcase"
          />
        </div>
      </div>
    </section>
  );
}
