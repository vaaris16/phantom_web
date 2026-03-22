import { NavLinks } from "../constants";
import { Link, useLocation } from "react-router-dom";

export default function NavBar() {
  const location = useLocation();

  return (
    <header className="sticky top-0 left-0 right-0 z-999 bg-black/75 backdrop-blur-3xl w-full h-auto animate-fade-in-y">
      <nav className="flex flex-row py-4 items-center justify-between px-4 md:px-28">
        <h1 className="font-Montserrat font-bold text-2xl">PHANTOM</h1>

        <ul className="hidden md:flex flex-row gap-6">
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

        <div className="md:hidden">
          <button className="text-white focus:outline-none">
            {/* Simple hamburger icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
}
