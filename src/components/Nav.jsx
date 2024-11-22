import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

function Nav() {
  return (
    <nav className="flex justify-between pt-4 w-full max-w-screen-2xl h-[120px] px-10">
      <img
        src="src/assets/images/logo_beauty.png"
        alt="logo Beauty nature"
        className="w-20 pt-3"
      />
      <div className="flex items-end mb-5">
        <ul className="flex justify-center gap-16 text-base font-normal">
          <li className=" hover:underline decoration-[#A67744] decoration-4 underline-offset-8">
            <Link to="/about" className="text-[#354E57]">
              Acerca de
            </Link>
          </li>
          <li className=" hover:underline decoration-[#A67744] decoration-4 underline-offset-8">
            <Link to="/shipments" className="text-[#354E57]">
              Envíos
            </Link>
          </li>
          <li className=" hover:underline decoration-[#A67744] decoration-4 underline-offset-8">
            <Link to="/tracking" className="text-[#354E57]">
              Sigue tu pedido
            </Link>
          </li>
          <li className=" hover:underline decoration-[#A67744] decoration-4 underline-offset-8">
            <Link to="/store" className="text-[#354E57]">
              Tienda
            </Link>
          </li>
          <li className=" hover:underline decoration-[#A67744] decoration-4 underline-offset-8">
            <Link to="/visit-us" className="text-[#354E57]">
              Visítanos
            </Link>
          </li>
        </ul>
      </div>
      <div className="flex items-start gap-8">
        <FaSearch className="text-[#354E57] " />
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
