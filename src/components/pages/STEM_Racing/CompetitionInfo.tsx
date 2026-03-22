export default function CompetitionInfo() {
  return (
    <section className="flex flex-row gap-30 justify-center items-center">
      <div className="flex gap-6 flex-col justify-center animate-reveal-x">
        <div className="relative">
          <h1 className="absolute text-7xl blur-3xl opacity-100 font-Montserrat font-bold text-phantom">
            Competition
          </h1>
          <h1 className="relative text-7xl font-Montserrat font-bold text-phantom">
            Competition
          </h1>
        </div>

        <h1 className="text-xl max-w-125 font-Montserrat font-medium text-(--secondary-color)">
          STEM Racing competitions challenge student teams to design, build, and
          race formula-style vehicles. Teams compete in events testing
          acceleration, endurance, efficiency, and design innovation. It's not
          just about speed—it's about engineering excellence, teamwork, and
          pushing the boundaries of what's possible with sustainable racing
          technology.
        </h1>
      </div>

      <div className="relative animate-reveal-x">
        <div className="absolute bg-phantom blur-xl opacity-100 rounded-4xl w-125 h-80 bg-white"></div>
        <img
          className="relative w-125 h-80 rounded-4xl"
          src="/images/stem_racing/stem_racing logo.jpg"
          alt="stem racing logo"
        />
      </div>
    </section>
  );
}
