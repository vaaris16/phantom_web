import CarShowCase from "./CarShowCase";
import PhantomInfo from "./PhantomInfo";
import Engineering from "./Engineering";
import Hero from "./Hero";

export default function Home() {
  return (
    <section className="flex flex-col min-h-screen justify-center items-center">
      <Hero></Hero>
      <div className="flex flex-col justify-center items-center gap-75 md:gap-100">
        <CarShowCase></CarShowCase>
        <PhantomInfo></PhantomInfo>
        <Engineering></Engineering>
      </div>
    </section>
  );
}
