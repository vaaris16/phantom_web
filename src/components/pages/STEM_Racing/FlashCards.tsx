import { FlashCardsList } from "../../../constants";

export default function FlashCards() {
  return (
    <section className="grid grid-cols-2 gap-8 pb-100 animate-reveal-y">
      {FlashCardsList.map(({ title, content, logo: Icon }) => (
        <div className="relative group">
          <div className="absolute bg-phantom opacity-0 blur-xl w-125 h-50 transition-all duration-500 group-hover:-translate-y-3 group-hover:opacity-100"></div>
          <div className="relative w-125 h-50 flex flex-col gap-5 bg-[#0d0d0d] rounded-4xl transition-all duration-500 group-hover:-translate-y-3">
            <Icon size={64} className="mt-6 mx-4 text-[#b87efe]" />
            <div className="mx-6 flex flex-col gap-2">
              <h1 className="font-Montserrat font-bold text-white">{title}</h1>
              <p className="font-Montserrat font-thin text-white/70 text-sm">
                {content}
              </p>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
