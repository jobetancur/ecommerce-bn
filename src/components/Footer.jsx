import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { TfiYoutube } from "react-icons/tfi";

function Footer() {
  return (
    <footer className="bg-[#354E57] lg:h-[736px] text-white flex flex-col items-center lg:justify-center py-10 px-4 ">
    {/* Contenedor Principal */}
    <div className="w-full max-w-6xl">
      {/* Suscripción y Títulos */}
      <div className="flex flex-col lg:flex-row justify-between gap-10 lg:gap-36">
        {/* Información y Suscripción */}
        <div>
          <h2 className="text-[32px] lg:text-[54px] mb-4 text-center lg:text-left">
            Beauty Nature
          </h2>
          <p className="text-sm lg:text-base max-w-[420px] leading-5 mb-4 text-center lg:text-left">
            Descubra nuestros innovadores productos para el cuidado de la piel
          </p>
          <div className="flex flex-col sm:flex-row gap-4 items-center lg:items-start">
            <input
              type="text"
              placeholder="Tu correo electrónico..."
              className="border border-white outline-none px-4 py-2 w-full sm:w-auto bg-transparent text-sm"
            />
            <button className="bg-transparent text-white text-sm font-light px-6 py-2 border border-white">
              Suscribirse
            </button>
          </div>
        </div>
  
        {/* Enlaces de Navegación */}
        <div className="flex justify-between gap-10 lg:gap-20 lg:mt-10">
          {/* Sección Tienda */}
          <div>
            <h3 className="font-semibold mb-4">TIENDA</h3>
            <a href="#" className="block text-sm font-extralight mb-2">
              Localizador de tiendas
            </a>
            <a href="#" className="block text-sm font-extralight mb-2">
              Comprar en línea
            </a>
            <a href="#" className="block text-sm font-extralight">
              WhatsApp orders
            </a>
          </div>
          {/* Sección Acerca de */}
          <div>
            <h3 className="font-semibold mb-4">ACERCA DE</h3>
            <a href="#" className="block text-sm font-extralight mb-2">
              Nosotros
            </a>
            <a href="#" className="block text-sm font-extralight mb-2">
              Blog
            </a>
            <a href="#" className="block text-sm font-extralight">
              Contacto
            </a>
          </div>
          {/* Sección Más */}
          <div>
            <h3 className="font-semibold mb-4">MÁS</h3>
            <a href="#" className="block text-sm font-extralight mb-2">
              Preguntas frecuentes
            </a>
            <a href="#" className="block text-sm font-extralight mb-2">
              Política de privacidad
            </a>
            <a href="#" className="block text-sm font-extralight">
              Términos y condiciones
            </a>
          </div>
        </div>
      </div>
  
      {/* Separador */}
      <hr className="w-full border-[#bebebe] border mt-10 lg:mt-20 mb-6" />
  
      {/* Derechos y Redes Sociales */}
      <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
        <div className="text-center lg:text-left">
          <h3 className="text-sm font-semibold">
            BEAUTY NATURE ALL RIGHTS RESERVED
          </h3>
          <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-2 text-xs underline font-extralight lg:gap-20">
            <a href="#">Política de privacidad</a>
            <a href="#">Términos de uso</a>
            <a href="#">Contactar</a>
          </div>
        </div>
        {/* Redes Sociales */}
        <div className="flex gap-6 text-xl">
          <a href="#" className="hover:text-gray-400">
            <FaFacebook />
          </a>
          <a href="#" className="hover:text-gray-400">
            <FaInstagram />
          </a>
          <a href="#" className="hover:text-gray-400">
            <FaSquareXTwitter />
          </a>
          <a href="#" className="hover:text-gray-400">
            <TfiYoutube />
          </a>
        </div>
      </div>
    </div>
  </footer>
  
  );
}

export default Footer;