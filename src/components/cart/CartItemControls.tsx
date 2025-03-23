import { useDispatch } from "react-redux";
import { FiPlus, FiMinus, FiTrash2, FiShoppingCart } from "react-icons/fi";
import { addToCart, removeFromCart } from "../../store/slices/cartSlice";
import { Product } from "../../types";

interface CartItemControlsProps {
  product: Product;
  count: number;
}

const CartItemControls: React.FC<CartItemControlsProps> = ({
  product,
  count,
}) => {
  const dispatch = useDispatch();

  return (
    <div className="flex items-center space-x-4">
      {count === 0 ? (
        <button
          onClick={() => dispatch(addToCart(product))}
          className="flex items-center px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition cursor-pointer"
        >
          <FiShoppingCart size={20} className="mr-2" />
          Add to Cart
        </button>
      ) : (
        <div className="flex items-center space-x-6 border rounded px-6 py-1">
          {count === 1 ? (
            <>
              <button
                onClick={() => dispatch(removeFromCart(product.id))}
                className="text-red-500 hover:text-red-700"
              >
                <FiTrash2 size={20} />
              </button>
              <span className="text-lg font-semibold">{count}</span>
              <button
                onClick={() => dispatch(addToCart(product))}
                className="text-green-500 hover:text-green-700"
              >
                <FiPlus size={20} />
              </button>
            </>
          ) : (
            <>
              <button
                onClick={() => dispatch(removeFromCart(product.id))}
                className="text-gray-600 hover:text-gray-800"
              >
                <FiMinus size={20} />
              </button>
              <span className="text-lg font-semibold">{count}</span>
              <button
                onClick={() => dispatch(addToCart(product))}
                className="text-green-500 hover:text-green-700"
              >
                <FiPlus size={20} />
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default CartItemControls;
