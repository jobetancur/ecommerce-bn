import { Link } from "react-router-dom";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

function Nav() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="flex justify-between items-center pt-4 w-full max-w-screen-2xl h-[120px] px-10">
      {/* Logo */}
      <img
        src="src/assets/images/logo_beauty.png"
        alt="logo Beauty nature"
        className="w-20 pt-3"
      />

      {/* Desktop Menu */}
      <ul className="hidden md:flex justify-center gap-16 text-base font-normal">
        <li className="hover:underline decoration-[#A67744] decoration-4 underline-offset-8">
          <Link to="/about" className="text-[#354E57]">
            Acerca de
          </Link>
        </li>
        <li className="hover:underline decoration-[#A67744] decoration-4 underline-offset-8">
          <Link to="/shipments" className="text-[#354E57]">
            Envíos
          </Link>
        </li>
        <li className="hover:underline decoration-[#A67744] decoration-4 underline-offset-8">
          <Link to="/tracking" className="text-[#354E57]">
            Sigue tu pedido
          </Link>
        </li>
        <li className="hover:underline decoration-[#A67744] decoration-4 underline-offset-8">
          <Link to="/store" className="text-[#354E57]">
            Tienda
          </Link>
        </li>
        <li className="hover:underline decoration-[#A67744] decoration-4 underline-offset-8">
          <Link to="/visit-us" className="text-[#354E57]">
            Visítanos
          </Link>
        </li>
      </ul>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button onClick={toggleMobileMenu} aria-label="Toggle menu">
          {isMobileMenuOpen ? (
            <FaTimes className="text-2xl text-[#354E57]" />
          ) : (
            <FaBars className="text-2xl text-[#354E57]" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-0 left-0 w-full h-screen bg-white z-10 flex flex-col items-center justify-center gap-6">
          {/* Botón para cerrar el menú con un ícono de "X" */}
          <button
            className="absolute top-5 right-5 text-3xl text-[#354E57]"
            onClick={toggleMobileMenu}
            aria-label="Cerrar menú"
          >
            <FaTimes />
          </button>

          {/* Links del menú */}
          <ul className="flex flex-col gap-4 text-base font-normal text-center">
            <li>
              <Link
                to="/about"
                className="text-[#354E57]"
                onClick={toggleMobileMenu}
              >
                Acerca de
              </Link>
            </li>
            <li>
              <Link
                to="/shipments"
                className="text-[#354E57]"
                onClick={toggleMobileMenu}
              >
                Envíos
              </Link>
            </li>
            <li>
              <Link
                to="/tracking"
                className="text-[#354E57]"
                onClick={toggleMobileMenu}
              >
                Sigue tu pedido
              </Link>
            </li>
            <li>
              <Link
                to="/store"
                className="text-[#354E57]"
                onClick={toggleMobileMenu}
              >
                Tienda
              </Link>
            </li>
            <li>
              <Link
                to="/visit-us"
                className="text-[#354E57]"
                onClick={toggleMobileMenu}
              >
                Visítanos
              </Link>
            </li>
          </ul>

          {/* Links adicionales (CARRITO y LOGIN) */}
          <div className="flex gap-4 text-xs mt-6">
            <Link
              to="/cart"
              className="text-[#354E57] font-bold"
              onClick={toggleMobileMenu}
            >
              CARRITO
            </Link>
            <Link
              to="/login"
              className="text-[#354E57] font-bold"
              onClick={toggleMobileMenu}
            >
              LOGIN
            </Link>
          </div>
        </div>
      )}

      {/* Search & Cart Links (Desktop) */}
      <div className="hidden md:flex items-start gap-8">
        <FaSearch className="text-[#354E57]" />
        <ul className="flex justify-center gap-8 text-xs">
          <li>
            <Link to="/cart" className="text-[#354E57] font-bold">
              CARRITO
            </Link>
          </li>
          <li>
            <Link to="/login" className="text-[#354E57] font-bold">
              LOGIN
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
