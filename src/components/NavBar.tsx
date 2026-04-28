import { NavLinks } from "../constants";
import { Link, useLocation } from "react-router-dom";
import { Menu } from "lucide-react";
import { useState } from "react";

export default function NavBar() {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 left-0 right-0 z-999 bg-black/70 backdrop-blur-2xl w-full h-auto animate-fade-in-y">
      <nav className="flex flex-row py-4 items-center justify-between px-4 md:px-28">
        <h1 className="font-Montserrat font-bold text-2xl">PHANTOM</h1>

        <ul className="hidden md:flex flex-row gap-6">
          {NavLinks.map(({ label, href }) => (
            <li key={label}>
              <Link
                className={`font-Montserrat font-thin transition-colors duration-400 hover: ${location.pathname === href ? "" : "text-[#9ba1ae]"}`}
                to={href}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="md:hidden inline-block relative">
          <button onClick={() => setOpen((prev) => !prev)}>
            <Menu></Menu>
          </button>

          {open && (
            <div className="absolute right-0 mt-2 w-40 z-50">
              <div className="absolute top-0.75 -z-10 rounded-xl bg-phantom blur-xs w-40 h-full opacity-100" />
              <div className="relative mt-2 w-40 p-4 bg-black rounded-xl">
                <ul className="flex flex-col mx-3 mt-4 gap-6">
                  {NavLinks.map(({ label, href }) => (
                    <li key={label}>
                      <Link
                        className={`font-Montserrat font-thin transition-colors duration-400 hover: ${location.pathname === href ? "" : "text-[#9ba1ae]"}`}
                        to={href}
                        onClick={() => setOpen(false)}
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
