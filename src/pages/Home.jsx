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
      <header className="bg-[url('src/assets/images/header_completo.png')] h-screen bg-cover bg-center w-full flex justify-center">
        <Nav />
      </header>
      <main>
        <section className="bg-[#EEF3F4] flex justify-center items-center min-h-[141px] border border-[#547665]">
          <div className="text-center">
            <h2 className="text-[#354E57] text-[28px] font-bold">
              Soluciones para la salud de la piel
            </h2>
            <p className="text-[#354E57]">
              Descubra nuestros innovadores productos para el cuidado de la piel
            </p>
          </div>
        </section>
        <section className="bg-[#EEF3F4] flex justify-center w-full pt-20 pb-32">
          <div className="flex w-full max-w-6xl flex-wrap">
            <div className="flex justify-between min-w-full">
              <div className="text-[#2E2E22] font-bold text-sm">
                <p>Más popular</p>
              </div>
              <div className="text-[#2E2E22] font-bold text-sm">
                <Link to="/store">Ver todos los productos</Link>
              </div>
            </div>
            <MostPopular />
          </div>
        </section>
        <section>
          <div className="flex h-[731px] justify-end bg-[#547665]">
            <div className="w-[571px] mr-[25px] flex flex-col items-start justify-center">
              <h2 className="text-[40px] text-white font-semibold leading-[55px] max-w-[571px]">
                Productos limpios que ofrecen mejores soluciones
              </h2>
              <p className="text-white text-base font-light w-[490px] leading-6 mt-6">
                Una piel más sana desde el interior. Nos hemos abastecido de los ingredientes más limpios para crear una línea de tratamientos limpios para el cuidado de la piel que te harán sentir lo mejor posible.
              </p>
              <button className="text-white mt-6 border border-white text-sm p-[11px_44px] font-bold">
                <Link to="/store">Comprar más</Link>
              </button>
            </div>
            <div className="bg-[url('src/assets/images/man-in-blue-top.png')] w-3/6 object-cover bg-[0px_-230px]">
            </div>
          </div>
        </section>
        <section className="bg-[#F7F7F7] flex justify-center w-full pt-20 pb-32">
          <div className="flex w-full max-w-6xl flex-wrap">
            <div className="flex justify-between min-w-full">
              <div className="text-[#2E2E22] font-bold text-sm">
                <p>Recomendados</p>
              </div>
              <div className="text-[#2E2E22] font-bold text-sm">
                <Link to="/store">Ver todos los productos</Link>
              </div>
            </div>
            <RecommendedProducts />
          </div>
        </section>
        <section className="bg-[#F7F7F7] flex justify-center pb-48 pt-14">
          <div className="max-w-6xl">
            <div className="text-center">
              <h2 className="text-[28px] font-bold text-[#354E57]">
                Utilizamos los mejores ingredientes
              </h2>
              <p className="text-base text-[#354E57] mt-5">
                Descubra nuestros innovadores productos para el cuidado de la piel
              </p>
            </div>
            <div className="flex flex-col justify-center gap-28 mt-24 text-[#354E57]"> 
              <div className="flex">
                <div className="flex flex-col items-center justify-between w-80 gap-5">
                  <img src="src/assets/images/cacao.png" alt="cacao" />
                  <div className="flex flex-col items-center gap-2">
                    <h3 className="text-sm font-bold">
                      Cacao
                    </h3>
                    <p className="text-xs">
                      Lorem ipsum dolar et al
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-between w-80 gap-5">
                  <img src="src/assets/images/miel.png" alt="miel" />
                  <div className="flex flex-col items-center gap-2">
                    <h3 className="text-sm font-bold">
                      Miel
                    </h3>
                    <p className="text-xs">
                      Lorem ipsum dolar et al
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-between w-80 gap-5">
                  <img src="src/assets/images/menta.png" alt="" />
                  <div className="flex flex-col items-center gap-2">
                    <h3 className="text-sm font-bold">
                      Menta
                    </h3>
                    <p className="text-xs">
                      Lorem ipsum dolar et al
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex">
                <div className="flex flex-col items-center justify-between w-80 gap-5">
                  <img src="src/assets/images/coco_rallado.png" alt="coco rallado" />
                  <div className="flex flex-col items-center gap-2">
                    <h3 className="text-sm font-bold">
                      Coco rallado
                    </h3>
                    <p className="text-xs">
                      Lorem ipsum dolar et al
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-between w-80 gap-5">
                  <img src="src/assets/images/harina.png" alt="harina" />
                  <div className="flex flex-col items-center gap-2">
                    <h3 className="text-sm font-bold">
                      Harina
                    </h3>
                    <p className="text-xs">
                      Lorem ipsum dolar et al
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-between w-80 gap-5">
                  <img src="src/assets/images/cacao_blanco_2.png" alt="cacao blanco" />
                  <div className="flex flex-col items-center gap-2">
                    <h3 className="text-sm font-bold">
                      Cacao 
                    </h3>
                    <p className="text-xs">
                      Lorem ipsum dolar et al
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-[#EEF2F4] h-[234px] flex justify-center items-center">
          <div className="text-[#354E57] flex gap-40">
            <div className="w-1/3 flex flex-col items-center ">
              <BiStoreAlt className="text-[#C6B9B6] text-3xl" />
              <h3 className="text-base font-medium max-w-[180px] text-center mt-6 mb-2">
                Ofrecemos nuevas formas de comprar.
              </h3>
              {/* Link */}
              <a href="" className="text-xs underline">
                Localizador de tiendas
              </a>
            </div>
            <div className="w-1/3 flex flex-col items-center ">
              <MdOutlineLocalGroceryStore className="text-[#C6B9B6] text-3xl" />
              <h3 className="text-base font-medium max-w-[180px] text-center mt-6 mb-2">
                Comprar en línea, recoger en tienda
              </h3>
              {/* Link */}
              <a href="" className="text-xs underline">
                Leer más
              </a>
            </div>
            <div className="w-1/3 flex flex-col items-center justify-between">
              <FiPhoneCall className="text-[#C6B9B6] text-3xl" />
              <h3 className="text-base font-medium max-w-[180px] text-center mt-1">
                WhatsApp orders
              </h3>
              {/* Link */}
              <a href="" className="text-xs underline">
                Leer más
              </a>
            </div>
          </div>
        </section>
        <section className="bg-[#FFFFFF] h-[148px] border border-[#354E57] flex justify-center items-center gap-20">
          <div className="pr-5 border-r border-[#C6B9B6]">
            <h2 className="text-[#354E57] max-w-[282px] text-[25px] font-bold">
              Únase a la familia Beauty Nature
            </h2>
          </div>
          <p className="text-[#354E57] max-w-[380px] text-base font-normal">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
          </p>
          <div className="pl-5 flex">
            <input type="text" className="border border-[#956A53] outline-none p-[7px_8px] w-[280px]"/>
            <button className="bg-[#956A53] text-white text-sm font-medium p-[8px_28px]">
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