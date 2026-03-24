import { CommunityBenefitData } from "../../../constants";

export default function Benefits() {
  return (
    <section className="flex flex-col justify-center gap-7 mb-10">
      <h1 className="md:text-5xl text-3xl font-Montserrat pb-4 font-bold">
        What You'll Get
      </h1>
      {CommunityBenefitData.map(({ title, content }) => (
        <div className="relative group">
          <div className="absolute w-80 md:w-150 h-full bg-phantom blur-sm transition-all duration-500 group-hover:opacity-100 group-hover:-translate-x-3 rounded-3xl opacity-100 md:opacity-0"></div>
          <div className="relative w-80 md:w-150 transition-all duration-500 group-hover:opacity-100 group-hover:-translate-x-3 bg-(--cards-color) flex flex-col p-5 rounded-3xl">
            <h1 className="font-Montserrat font-bold text-lg">{title}</h1>
            <p className="font-Montserrat pt-2 font-thin text-base">
              {content}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
}
