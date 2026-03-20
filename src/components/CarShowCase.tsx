import render_1 from "../assets/images/Rathus Render.png";
export default function CarShowCase() {
  return (
    <section className="flex flex-col justify-center items-center gap-20">
      <div className="flex flex-col justify-center items-center gap-10">
        <div className="relative inline-block overflow-visible">
          <h1
            aria-hidden="true"
            className="absolute inset-0 z-0 text-7xl text-bold font-Montserrat blur-xl opacity-100 bg-linear-to-r from-[#00FFFF] to-pink-500 bg-clip-text text-transparent"
          >
            Meet The Spectar X9
          </h1>

          <h1 className="relative z-10 text-7xl font-Montserrat font-bold bg-linear-to-r from-[#00FFFF] to-pink-500 bg-clip-text text-transparent">
            Meet The Spectar X9
          </h1>
        </div>

        <h1 className="text-2xl font-Montserrat italic text-[#757983]">
          "If you can dream it, you can do it." - Enzo Ferrari
        </h1>
      </div>
      <div className="relative inline-block overflow-visible">
        <div className="absolute w-250 h-150 rounded-4xl -z-1 inset-0 blur-3xl bg-linear-to-r from-[#00FFFF] to-pink-500 opacity-40"></div>
        <img
          className="w-250 h-150 rounded-4xl"
          src={render_1}
          alt="Car Render"
        />
      </div>
    </section>
  );
}
