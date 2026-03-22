export default function CarShowCase() {
  return (
    <section className="flex flex-col justify-center items-center animate-reveal-y gap-20">
      <div className="flex flex-col justify-center items-center gap-10">
        <div className="relative inline-block overflow-visible">
          <h1
            aria-hidden="true"
            className="absolute inset-0 z-0 text-7xl text-bold blur-xl opacity-100 text-phantom"
          >
            Meet The Spectre X9
          </h1>

          <h1 className="relative z-10 text-7xl font-bold text-phantom">
            Meet The Spectre X9
          </h1>
        </div>

        <h1 className="text-2xl italic text-(--secondary-color)">
          "If you can dream it, you can do it." - Enzo Ferrari
        </h1>
      </div>
      <div className="relative inline-block overflow-visible">
        <div className="absolute w-250 h-150 rounded-4xl -z-1 inset-0 blur-xl bg-phantom opacity-70"></div>
        <div className="w-250 h-150 bg-white rounded-4xl"></div>
      </div>
    </section>
  );
}
