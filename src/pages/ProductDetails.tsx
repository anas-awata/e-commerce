import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { fetchProductById } from "../services/fetchProductById";
import CartItemControls from "../components/cart/CartItemControls";
import { useMemo } from "react";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css"; // Make sure to import the styles
import Loading from "../components/Loading";
import EmptyProductPage from "./EmptyProductPage";

const ProductDetails = () => {
  const { id } = useParams<{ id: string }>();
  const { data: product, isLoading } = useQuery({
    queryKey: ["product", id],
    queryFn: () => fetchProductById(id!),
  });

  const cartItem = useSelector((state: RootState) =>
    state.cart.items.find((item) => item.id === product?.id)
  );
  const count = useMemo(() => (cartItem ? cartItem.count : 0), [cartItem]);

  if (isLoading) return <Loading />;
  if (!product) return <EmptyProductPage />;

  return (
    <div className="container mx-auto p-6">
      <div className="flex flex-col md:flex-row gap-8 bg-white rounded-lg p-6">
        {/* Product Image */}
        <div className="flex-1 flex justify-center">
          <Zoom>
            <img
              src={product.image}
              alt={product.title}
              className="max-h-96 w-auto object-contain rounded-lg"
            />
          </Zoom>
        </div>

        {/* Product Details */}
        <div className="flex-1">
          <h1 className="text-3xl font-bold text-gray-900">{product.title}</h1>
          <p className="text-gray-600 mt-2 text-lg">{product.description}</p>
          <p className="text-2xl font-semibold mt-4 text-blue-600">
            ${product.price}
          </p>

          {/* Cart Controls */}
          <div className="mt-6">
            <CartItemControls product={product} count={count} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
