import { NavLinks } from "../constants";

export default function NavBar() {
  return (
    <header>
      <nav className="flex flex-row py-4 justify-between px-28">
        <h1 className="font-Montserrat font-bold text-2xl">PHANTOM</h1>

        <ul className="flex flex-row gap-6">
          {NavLinks.map(({ label }) => (
            <li key={label}>
              <a
                className="font-Montserrat font-thin text-[#9ba1ae] hover:text-white"
                href={label}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
