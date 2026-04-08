export default function WhyPhantom() {
  return (
    <section className="flex flex-col justify-center items-center">
      <div className="relative">
        <h1 className="absolute uppercase font-Montserrat font-bold text-8xl">
          why phantom?
        </h1>
        <h1 className="relative uppercase font-Montserrat font-bold text-phantom blur-3xl opacity-100 text-8xl">
          why phantom?
        </h1>
        <p className="text-center text-lg pt-10 text-(--cyan)">
          <span className="text-(--secondary-color)">
            Like a phantom, we move with precision and speed, leaving our mark
            before others
            <br />
            even know we're there. Our skull logo embodies the fearless spirit
            of innovation—
            <br />
            unafraid to challenge conventions and push beyond traditional
            boundaries.
          </span>
          <br />
          <br />
          <br /> In racing, you're either visible or you're a phantom.
          <br />
          We choose to be both.
        </p>
      </div>
      <div className="pt-15">
        <div className="relative group">
          <div className="absolute h-full w-full rounded-4xl bg-phantom transition-all duration-500 group-hover:opacity-100 group-hover:scale-103 opacity-0 blur-lg"></div>
          <div
            className="relative h-150 w-250 rounded-4xl bg-white transition-all
          duration-500 group-hover:scale-103"
          ></div>
        </div>
      </div>
    </section>
  );
}
