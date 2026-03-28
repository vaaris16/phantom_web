export default function PhantomInfo() {
  return (
    <section className="flex flex-col md:flex-row gap-25 justify-center items-center animate-reveal-x">
      <div className="flex flex-col gap-6">
        <div className="relative">
          <h1
            aria-hidden="true"
            className="absolute blur-2xl opacity-65 text-phantom font-Montserrat ml-3 text-5xl md:text-8xl font-bold"
          >
            INOVATION
            <br />
            MEETS SPEED
          </h1>

          <h1 className="relative text-phantom font-Montserrat ml-3 md:text-8xl text-5xl font-bold">
            INOVATION
            <br />
            MEETS SPEED
          </h1>
        </div>

        <h1 className="font-Montserrat md:text-3xl ml-3 text-lg font-thin">
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
        <div className="absolute -z-1 w-75 h-65 md:w-125 md:h-80 bg-phantom blur-xl opacity-100"></div>
        <img
          className="w-75 h-65 md:w-125 md:h-80 rounded-4xl"
          loading="lazy"
          src="/images/home/phantom_logo.png"
          alt="Phantom Logo"
        />
      </div>
    </section>
  );
}
