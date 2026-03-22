import { EngineeringExcellence } from "../../../constants";

export default function Engineering() {
  return (
    <section className="flex flex-col justify-center items-center gap-20">
      <div className="relative overflow-visible animate-reveal-y">
        <h1
          aria-hidden="true"
          className="absolute uppercase text-7xl font-Montserrat text-phantom opacity-100 blur-3xl font-bold"
        >
          Engineering Excellence
        </h1>
        <h1 className="relative uppercase text-7xl font-Montserrat text-phantom font-bold">
          Engineering Excellence
        </h1>
      </div>

      <div className="flex flex-row gap-10 pb-28 items-center justify-center">
        {EngineeringExcellence.map(({ label, image }) => (
          <div className="relative group animate-reveal-y">
            <div className="absolute bg-phantom opacity-0 blur-xl w-80 h-80 transition-all duration-500 group-hover:opacity-70 group-hover:-translate-y-3"></div>
            <div className="relative group-hover:-translate-y-3 transition-all duration-500 flex items-end justify-start bg-gray-600 rounded-3xl w-80 h-80">
              <img
                src={image}
                alt={image}
                className="absolute rounded-4xl inset-0 w-full h-full object-cover"
              />
              <h1 className="text-white text-lg font-bold font-Montserrat m-5">
                {label}
              </h1>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
