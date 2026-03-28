export default function STEMInfo() {
  return (
    <section className="pt-20 flex flex-col justify-center items-center animate-fade-in-y">
      <div className="relative">
        <h1 className="absolute ml-4 md:ml-0 text-7xl text-white font-Montserrat font-bold uppercase">
          what is stem racing
        </h1>
        <h1 className="relative ml-4 text-7xl text-phantom blur-3xl opacity-100 text-white font-Montserrat font-bold uppercase">
          what is stem racing
        </h1>
      </div>

      <h1 className="pt-8 ml-4 md:text-center font-Montserrat font-medium text-(--secondary-color)">
        STEM Racing brings together Science, Technology, Engineering, and
        Mathematics,
        <br />
        challenging students to design, build, and race high-performance
        vehicles
        <br />
        while fostering innovation, teamwork, and real-world engineering skills.
      </h1>

      <div className="relative mt-14">
        <div className="absolute w-75 h-65 md:w-250 md:h-150 bg-phantom blur-xl opacity-100 rounded-4xl"></div>
        <img
          className="relative inset-0 w-75 h-65 md:w-250 md:h-150 rounded-4xl"
          loading="lazy"
          src="/images/stem_racing/stem_racing.webp"
          alt="stem racing image"
        />
      </div>
    </section>
  );
}
