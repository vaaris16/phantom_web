import { Zap } from "lucide-react";

export default function OurValues() {
  return (
    <section className="flex flex-col w-250 justify-center items-center">
      <div className="relative">
        <h1 className="absolute uppercase font-Montserrat font-bold text-8xl">
          our values
        </h1>
        <h1 className="relative uppercase text-phantom blur-3xl opacity-100 font-Montserrat font-bold text-8xl">
          our values
        </h1>
      </div>

      <div className="relative group">
        <div className="absolute h-full w-full bg-phantom blur-3xl opacity-0 group-hover:opacity-100" />
        <div className="relative flex flex-row justify-center items-center gap-15">
          <div className="rounded-4xl flex flex-col p-10 bg-black border-2 border-[#0e272e]">
            <div className="w-20 h-20 flex flex-col justify-center items-center bg-[#0e272e] rounded-xs">
              <Zap size={32}></Zap>
            </div>
            <h1 className="font-Montserrat font-bold pt-6 text-7xl text-(--cyan)">
              Innovation
            </h1>
            <p className="font-Montserrat text-xl pt-6 text-(--secondary-color)">
              Constantly challenging ourselves to
              <br />
              develop breakthrough solutions that
              <br />
              create competitive advantages on and
              <br />
              off the track. We leverage cutting-edge
              <br />
              technology to push the boundaries of
              <br />
              what's possible.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
