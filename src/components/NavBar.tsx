import { NavLinks } from "../constants";
import { Link, useLocation } from "react-router-dom";

export default function NavBar() {
  const location = useLocation();

  return (
    <header className="sticky top-0 z-999 bg-black/75 backdrop-blur-3xl w-full h-auto animate-fade-in-y">
      <nav className="flex flex-row py-4 items-center justify-between px-28">
        <h1 className="font-Montserrat font-bold text-2xl">PHANTOM</h1>

        <ul className="flex flex-row gap-6">
          {NavLinks.map(({ label, href }) => (
            <li key={label}>
              <Link
                className={`font-Montserrat font-thin transition-colors duration-400 hover:text-white ${location.pathname === href ? "text-white" : "text-[#9ba1ae]"}`}
                to={href}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
