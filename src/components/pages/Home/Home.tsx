import CarShowCase from "./CarShowCase";
import PhantomInfo from "./PhantomInfo";
import SocialMedia from "./SocialMedia";
import Hero from "./Hero";

export default function Home() {
  return (
    <section className="flex flex-col min-h-screen justify-center items-center">
      <Hero></Hero>
      <div className="flex flex-col justify-center items-center gap-60 md:gap-100">
        <CarShowCase></CarShowCase>
        <PhantomInfo></PhantomInfo>
        <SocialMedia></SocialMedia>
      </div>
    </section>
  );
}
