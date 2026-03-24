import Title from "./Title";
import Subscribe from "./Subscribe";
import Benefits from "./Benefits";

export default function Community() {
  return (
    <section className="flex flex-col gap-10 justify-center items-center">
      <Title></Title>
      <div className="flex flex-col md:flex-row gap-12">
        <Subscribe></Subscribe>
        <Benefits></Benefits>
      </div>
    </section>
  );
}
