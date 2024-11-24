import { Menu, X } from "lucide-react";
import { useState } from "react";

import { navItems } from "@/constants";
import logo from "@/assets/logo.png";

export function Header() {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-teal-400/100">
      <div className="container px-4 mx-auto relative text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <img className="h-10 w-10 mr-2" src={logo} alt="logo" />
            <span className="text-xl tracking-tight">SUDS</span>
          </div>
          <ul className="hidden lg:flex ml-14 space-x-12">
            {navItems.map((item, index) => (
              <li key={index}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
          <div className="hidden lg:flex justify-center space-x-12 items-center">
            <a href="#" className="py-2 px-3 border rounded-md">
              Ingresar
            </a>
            <a
              href="#"
              className="bg-gradient-to-r from-teal-400 to-teal-600 py-2 px-3 rounded-md"
            >
              Registrarse
            </a>
          </div>
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 bg-white w-full p-12 flex flex-col justify-center items-center lg:hidden">
            <ul className="mb-6">
              {navItems.map((item, index) => (
                <li key={index} className="py-4">
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
            <div className="flex space-x-4">
              <a href="#" className="py-2 px-3 border rounded-md">
                Ingresar
              </a>
              <a
                href="#"
                className="py-2 px-3 rounded-md bg-gradient-to-r from-teal-400 to-teal-600"
              >
                Registrarse
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
