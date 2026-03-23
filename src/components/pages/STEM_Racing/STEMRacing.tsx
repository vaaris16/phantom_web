import STEMInfo from "./StemInfo";
import CompetitionInfo from "./CompetitionInfo";
import FlashCards from "./FlashCards";

export default function STEMRacing() {
  return (
    <section className="flex flex-col gap-60 justify-center items-center">
      <STEMInfo></STEMInfo>
      <CompetitionInfo></CompetitionInfo>
      <FlashCards></FlashCards>
    </section>
  );
}
