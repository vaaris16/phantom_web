import { FlashCardsList } from "../../../constants";

export default function FlashCards() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-8 pb-100 animate-reveal-y">
      {FlashCardsList.map(({ title, content, logo: Icon }) => (
        <div className="relative group">
          <div className="absolute bg-phantom opacity-100 md:opacity-0 blur-xs md:blur-xl w-75 h-100 rounded-4xl md:w-125 md:h-50 transition-all duration-500 group-hover:-translate-y-3 group-hover:opacity-100"></div>
          <div className="relative w-75 h-100 md:w-125 md:h-50 flex flex-col gap-5 bg-[#0d0d0d] rounded-4xl transition-all duration-500 group-hover:-translate-y-3">
            <Icon size={64} className="mt-6 mx-4 text-(--accents)" />
            <div className="mx-6 md:mt-0 mt-6 flex flex-col gap-2">
              <h1 className="font-Montserrat font-bold md:text-base text-4xl">
                {title}
              </h1>
              <p className="font-Montserrat md:mt-0 mt-6 font-thin/70 text-sm">
                {content}
              </p>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
