export default function PhantomInfo() {
  return (
    <section className="flex flex-row gap-25 justify-center items-center">
      <div className="flex flex-col gap-6">
        <div className="relative">
          <h1
            aria-hidden="true"
            className="absolute  blur-3xl opacity-65 text-phantom font-Montserrat text-8xl font-bold"
          >
            INOVATION
            <br />
            MEETS SPEED
          </h1>

          <h1 className="relative text-phantom font-Montserrat text-8xl font-bold">
            INOVATION
            <br />
            MEETS SPEED
          </h1>
        </div>

        <h1 className="font-Montserrat text-3xl font-thin">
          PHANTOM is a student-led team focused
          <br />
          on precision, innovation, and performance.
          <br />
          We combine engineering, design, and
          <br />
          technology to build, test, and
          <br />
          refine ideas that compete at the highest level.
        </h1>
      </div>

      <div className="relative inline-block">
        <div className="absolute -z-1 w-125 h-80 bg-phantom blur-xl opacity-100"></div>

        <div className="relative w-125 h-80 rounded-2xl bg-red-50 "></div>
      </div>
    </section>
  );
}
