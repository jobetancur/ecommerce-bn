import { useContext } from "react";
import { FirebaseContext } from "../contexts/firebaseContext";
import { FaCartShopping } from "react-icons/fa6";

function RecommendedProducts() {
  const { recommended, loading } = useContext(FirebaseContext);

  if(loading) {
    return <p>Cargando...</p>;
  }

  return (
    <div className="w-full pt-7 grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {recommended.map((product, index) => (
        <div key={index} className="flex flex-col items-center">
          {/* Card */}
          <div className="bg-white w-[251px] h-[346px] flex flex-col justify-between items-center">
            {/* Etiqueta NEW */}
            <div className="w-full py-3 px-3">
              <span className="text-[#354E57] text-xs font-semibold pt-[7px] pb-[7px] px-[11px] bg-[#F7F7F7]">
                NEW!
              </span>
            </div>
            {/* Imagen */}
            <img
              src={product.image}
              alt={product.name}
              className="w-full mb-6"
            />
          </div>
          {/* Información del producto */}
          <div className="text-center">
            <h3 className="text-[#2E2E22] font-bold text-sm mt-2.5">
              {product.name}
            </h3>
            <p className="text-[#2E2E22] font-normal text-xs">
              {product.shortDescription}
            </p>
            <p className="text-[#2E2E22] font-semibold text-xs mt-2">
              ${product.price}
            </p>
          </div>
          {/* Botón */}
          <button className="text-[#2E2E22] text-xs flex gap-3 py-2.5 w-full mt-3 border border-[#354E57] justify-center items-center">
            <FaCartShopping />
            Añadir al carrito
          </button>
        </div>
      ))}
    </div>
  );
  
}

export default RecommendedProducts;
