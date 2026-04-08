export default function WhatIsPhantom() {
  return (
    <section className="flex flex-col justify-center items-center">
      <div className="relative">
        <div className="absolute bg-phantom blur-xl opacity-100 h-150 w-250 rounded-4xl"></div>
        <div className="relative bg-white h-150 w-250 rounded-4xl"></div>
      </div>

      <div className="flex flex-col gap-10 w-250 h-150">
        <h1 className="font-Montserrat text-8xl font-bold pt-30">
          What is Phantom
        </h1>
        <p className="font-Montserrat font-medium text-xl text-(--secondary-color)">
          PHANTOM is a movement. A collective of driven students redefining the
          future of racing through innovation and sustainable engineering. We
          compete in STEM racing competitions across the nation, pushing the
          boundaries of what's possible in student motorsport.
          <br />
          <br />
          We design and build high-performance electric race cars from the
          ground up—every component crafted with precision and purpose. From
          aerodynamic bodywork to advanced battery systems, we engineer complete
          racing machines that compete at the highest levels.
          <br />
          <br />
          We don't just build cars—we engineer experiences. Every design
          decision is backed by data, every component is tested to its limits,
          and every innovation is driven by our commitment to excellence.
          <br />
          <br />
          Founded in 2021, PHANTOM has grown from 8 passionate students in a
          garage to a nationally recognized team. Our 3rd place national finish
          proves that innovation and dedication can compete with any established
          program.
        </p>
      </div>
    </section>
  );
}
