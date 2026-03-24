export default function Title() {
  return (
    <section className="flex flex-col mt-20 justify-center ml-4 items-center">
      <div className="relative font-Montserrat font-bold text-6xl md:text-7xl">
        <h1 className="absolute">Join Our Community</h1>
        <h1 className="relative text-phantom blur-2xl md:blur-3xl opacity-100">
          Join Our Community
        </h1>
      </div>

      <p className="font-Montserrat font-medium md:text-center pt-4 text-(--secondary-color)">
        Get exclusive updates, behind-the-scenes content, and early access to
        <br />
        team news. Join hundreds of STEM racing enthusiasts.
      </p>
    </section>
  );
}
