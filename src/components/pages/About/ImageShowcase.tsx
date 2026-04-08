import { ImageShowCaseValues } from "./about_data";

export default function ImageShowCase() {
  return (
    <section className="grid grid-cols-2 gap-10 w-250">
      {ImageShowCaseValues.map(({ path }) => (
        <div className="relative group">
          <div className="absolute h-full w-full rounded-4xl bg-phantom transition-all duration-500 group-hover:opacity-100 group-hover:scale-103 opacity-0 blur-lg"></div>
          <img
            src={path}
            className="relative h-150 w-125 rounded-4xl bg-white transition-all duration-500 group-hover:scale-103"
          />
        </div>
      ))}
    </section>
  );
}
