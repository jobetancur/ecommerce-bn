import { Link } from "react-router-dom";
import Ad from "../components/ad";
import Nav from "../components/Nav";
import MostPopular from "../components/MostPopular";
import RecommendedProducts from "../components/RecommendedProducts";
import { BiStoreAlt } from "react-icons/bi";
import { MdOutlineLocalGroceryStore } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Ad />
      <header  className="bg-[url('src/assets/images/header_completo.png')] h-screen bg-cover bg-[65%_0%] lg:bg-center w-full flex justify-center">
        <Nav />
      </header>
      <main>
        {/* Introducción */}
        <section className="bg-[#EEF3F4] flex justify-center items-center min-h-[141px] border border-[#547665] px-4">
          <div className="text-center">
            <h2 className="text-[#354E57] text-[22px] md:text-[28px] font-bold">
              Soluciones para la salud de la piel
            </h2>
            <p className="text-[#354E57] text-sm md:text-base mt-2">
              Descubra nuestros innovadores productos para el cuidado de la piel
            </p>
          </div>
        </section>

        {/* Más Popular */}
        <section className="bg-[#EEF3F4] flex justify-center w-full pt-10 pb-16">
          <div className="w-full max-w-6xl px-4">
            <div className="flex justify-between items-center mb-6">
              <p className="text-[#2E2E22] font-bold text-sm">Más popular</p>
              <Link to="/store" className="text-[#2E2E22] font-bold text-sm">
                Ver todos los productos
              </Link>
            </div>
            <MostPopular />
          </div>
        </section>

        {/* Productos Limpios */}
        <section className="flex flex-col lg:flex-row bg-[#547665] text-white md:h-[731px]">
          <div className="w-full lg:w-1/2 p-8 lg:pl-28 lg:pr-8 flex flex-col justify-center">
            <h2 className="text-[28px] md:text-[36px] lg:text-[40px] font-semibold leading-snug lg:max-w-[571px]">
              Productos limpios que ofrecen mejores soluciones
            </h2>
            <p className="text-sm md:text-base font-light mt-4 lg:w-[490px]">
              Una piel más sana desde el interior. Nos hemos abastecido de los
              ingredientes más limpios para crear una línea de tratamientos
              limpios para el cuidado de la piel que te harán sentir lo mejor
              posible.
            </p>
            <button className="mt-6 bg-transparent border border-white text-sm font-bold py-2 px-6 lg:w-[176px]">
              <Link to="/store">Comprar más</Link>
            </button>
          </div>
          <div className="w-full lg:w-1/2 bg-[url('src/assets/images/man-in-blue-top.png')] bg-cover bg-center h-[300px] lg:h-auto"></div>
        </section>

        {/* Recomendados */}
        <section className="bg-[#F7F7F7] flex justify-center w-full pt-10 pb-16">
          <div className="w-full max-w-6xl px-4">
            <div className="flex justify-between items-center mb-6">
              <p className="text-[#2E2E22] font-bold text-sm">Recomendados</p>
              <Link to="/store" className="text-[#2E2E22] font-bold text-sm">
                Ver todos los productos
              </Link>
            </div>
            <RecommendedProducts />
          </div>
        </section>

        {/* Ingredientes */}
        <section className="bg-[#F7F7F7] flex justify-center pb-16 pt-10 px-4">
          <div className="max-w-6xl">
            <div className="text-center">
              <h2 className="text-[22px] md:text-[28px] font-bold text-[#354E57]">
                Utilizamos los mejores ingredientes
              </h2>
              <p className="text-sm md:text-base text-[#354E57] mt-4">
                Descubra nuestros innovadores productos para el cuidado de la
                piel
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              <div className="flex flex-col items-center">
                <img src="src/assets/images/cacao.png" alt="cacao" />
                <h3 className="text-sm font-bold mt-4">Cacao</h3>
                <p className="text-xs text-center">Lorem ipsum dolar et al</p>
              </div>
              <div className="flex flex-col items-center">
                <img src="src/assets/images/miel.png" alt="miel" />
                <h3 className="text-sm font-bold mt-4">Miel</h3>
                <p className="text-xs text-center">Lorem ipsum dolar et al</p>
              </div>
              <div className="flex flex-col items-center">
                <img src="src/assets/images/menta.png" alt="menta" />
                <h3 className="text-sm font-bold mt-4">Menta</h3>
                <p className="text-xs text-center">Lorem ipsum dolar et al</p>
              </div>
            </div>
          </div>
        </section>

        {/* Beneficios */}
        <section className="bg-[#EEF2F4] flex justify-center items-center h-auto py-10 px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-[#354E57]">
            <div className="flex flex-col items-center">
              <BiStoreAlt className="text-[#C6B9B6] text-3xl" />
              <h3 className="text-base font-medium mt-4">
                Ofrecemos nuevas formas de comprar.
              </h3>
              <a href="" className="text-xs underline mt-2">
                Localizador de tiendas
              </a>
            </div>
            <div className="flex flex-col items-center">
              <MdOutlineLocalGroceryStore className="text-[#C6B9B6] text-3xl" />
              <h3 className="text-base font-medium mt-4">
                Comprar en línea, recoger en tienda
              </h3>
              <a href="" className="text-xs underline mt-2">
                Leer más
              </a>
            </div>
            <div className="flex flex-col items-center">
              <FiPhoneCall className="text-[#C6B9B6] text-3xl" />
              <h3 className="text-base font-medium mt-4">WhatsApp orders</h3>
              <a href="" className="text-xs underline mt-2">
                Leer más
              </a>
            </div>
          </div>
        </section>

        {/* Suscripción */}
        <section className="bg-[#FFFFFF] border border-[#354E57] flex flex-col lg:flex-row items-center justify-center gap-2 py-6 px-4 md:px-8 lg:gap-20">
          {/* Título */}
          <div className="lg:border-r lg:pr-4 mb-4 lg:mb-0">
            <h2 className="text-[#354E57] text-[20px] md:text-[22px] font-bold text-center lg:text-left lg:max-w-[282px]">
              Únase a la familia Beauty Nature
            </h2>
          </div>

          {/* Descripción */}
          <p className="text-[#354E57] text-xs md:text-sm text-center lg:text-left my-2 lg:my-0 lg:mx-4 lg:max-w-[380px]">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy
          </p>

          {/* Formulario */}
          <div className="flex flex-col sm:flex-row w-full max-w-md">
            <input
              type="text"
              placeholder="Tu correo"
              className="mb-4 border border-[#956A53] outline-none p-2 text-sm flex-grow lg:w-[280px] lg:mb-0"
            />
            <button className="bg-[#956A53] text-white text-xs md:text-sm font-medium px-4 py-2">
              Suscribirse
            </button>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}

export default Home;
