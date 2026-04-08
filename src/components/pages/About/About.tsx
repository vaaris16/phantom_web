import Title from "./Title";
import WhatIsPhantom from "./WhatIsPhantom";
import ImageShowCase from "./ImageShowcase";
import WhyPhantom from "./WhyPhantom";

export default function About() {
  return (
    <section className="flex flex-col gap-50 pt-50 justify-center items-center min-h-screen">
      <Title></Title>
      <WhatIsPhantom></WhatIsPhantom>
      <ImageShowCase></ImageShowCase>
      <WhyPhantom></WhyPhantom>
    </section>
  );
}
