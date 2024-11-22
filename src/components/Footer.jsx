import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { TfiYoutube } from "react-icons/tfi";

function Footer() {
  return (
    <footer className="bg-[#354E57] h-[736px] text-white flex flex-col justify-center items-center">
      <div className="flex pt-[151px] gap-36 w-full max-w-6xl justify-between">
        <div>
          <h2 className="text-[54px] mb-[13px]">
            Beauty Nature
          </h2>
          <p className="max-w-[420px] leading-5 mb-[34px]">
            Descubra nuestros innovadores productos para el cuidado de la piel
          </p>
          <div className="flex">
            <input type="text" className="border border-white outline-none p-[7px_15px] w-[280px] bg-transparent text-sm" placeholder="Tu correo electrónico..."/>
            <button className="bg-transparent text-white text-sm font-light p-[8px_28px] border border-white">
              Suscribirse
            </button>
          </div>
        </div>
        <div className="flex gap-20 pt-8">
          <div>
            <h3 className="font-semibold mb-[22px]">
              TIENDA
            </h3>
            <a href="" className="block text-sm font-extralight mb-2.5">
              Localizador de tiendas
            </a>
            <a href="" className="block text-sm font-extralight mb-2.5">
              Comprar en línea,
            </a>
            <a href="" className="block text-sm font-extralight">
              WhatsApp orders
            </a>
          </div>
          <div>
            <h3 className="font-semibold mb-[22px]">
              ACERCA DE
            </h3>
            <a href="" className="block text-sm font-extralight mb-2.5">
              Nosotros
            </a>
            <a href="" className="block text-sm font-extralight mb-2.5">
              Blog
            </a>
            <a href="" className="block text-sm font-extralight">
              Contacto
            </a>
          </div>
          <div>
            <h3 className="font-semibold mb-[22px]">
              MÁS
            </h3>
            <a href="" className="block text-sm font-extralight mb-2.5">
              Preguntas frecuentes
            </a>
            <a href="" className="block text-sm font-extralight mb-2.5">
              Política de privacidad
            </a>
            <a href="" className="block text-sm font-extralight">
              Términos y condiciones
            </a>
          </div>
        </div>
      </div>
      <hr 
        className="w-full max-w-6xl border-[#bebebe] border mt-[120px] mb-[43px]"
      />
      <div className="flex w-full max-w-6xl justify-between items-end">
        <div>
          <h3>
            BEAUTY NATURE ALL RIGHTS RESERVED
          </h3>
          <div className="flex mt-[18px] underline font-extralight">
            <div className="flex gap-12">
              <a href="">
                Política de privacidad
              </a>
              <a href="">
                Términos de uso
              </a>
              <a href="">
                Contactar
              </a>
            </div>
          </div>
        </div>
        <div className="flex gap-10 text-2xl">
          <a href="">
            <FaFacebook />
          </a>
          <a href="">
            <FaInstagram />
          </a>
          <a href="">
            <FaSquareXTwitter />
          </a>
          <a href="">
            <TfiYoutube />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;