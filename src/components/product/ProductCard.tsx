import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../../store";
import { Product } from "../../types";
import CartItemControls from "../cart/CartItemControls";
import { useMemo } from "react";

export const ProductCard = ({ product }: { product: Product }) => {
  const cartItem = useSelector((state: RootState) =>
    state.cart.items.find((item) => item.id === product.id)
  );
  const count = useMemo(() => (cartItem ? cartItem.count : 0), [cartItem]);

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden group transition-all transform hover:scale-105 hover:shadow-xl cursor-pointer">
      {/* Product Link */}
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-64 object-contain group-hover:opacity-90 transition-opacity duration-300"
          />
          {/* Add a hover effect to display text on image */}
          <div className="absolute top-0 left-0 w-full h-full bg-black/50 bg-opacity-15 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p className="text-white font-semibold text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              View Details
            </p>
          </div>
        </div>
      </Link>

      {/* Product Details */}
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800 truncate">
          {product.title}
        </h3>
        <p className="text-gray-600 mt-1 text-lg font-medium">
          ${product.price}
        </p>

        {/* Cart Controls */}
        <div className="mt-4 flex justify-between items-center">
          <CartItemControls product={product} count={count} />
        </div>
      </div>
    </div>
  );
};
