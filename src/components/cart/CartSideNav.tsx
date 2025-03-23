import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store";
import { closeCart } from "../../store/slices/uiSlice";
import { FiX } from "react-icons/fi";
import CartItemControls from "./CartItemControls";
import { useMemo } from "react";
import EmptyProductPage from "../../pages/EmptyProductPage";

const CartSideNav = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const isCartOpen = useSelector((state: RootState) => state.ui.isCartOpen);
  const dispatch = useDispatch();

  const totalPrice = useMemo(() => {
    return cartItems.reduce((total, item) => {
      const price = Number(item.price);
      const count = Number(item.count);
      return total + price * count;
    }, 0);
  }, [cartItems]); // Recalculate when cartItems change

  return (
    <div
      className={`fixed right-0 top-0 h-full w-96 bg-white shadow-lg p-6 overflow-y-auto transition-transform z-50 ${
        isCartOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <button
        className="absolute top-4 right-4 text-gray-600"
        onClick={() => dispatch(closeCart())}
      >
        <FiX size={28} />
      </button>
      <h2 className="text-xl font-semibold mb-6">Your Cart</h2>
      {cartItems.length === 0 ? (
        <EmptyProductPage title="No items in cart" />
      ) : (
        cartItems.map((item) => (
          <div
            key={item.id}
            className="flex flex-col gap-3 items-center justify-between mb-6 p-4 border-b border-gray-200"
          >
            <div className="flex items-center justify-between">
              <img
                src={item.image}
                alt={item.title}
                className="h-24 w-24 object-contain rounded"
              />
              <div className="flex flex-col flex-grow ml-4">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-gray-500">${item.price}</p>
              </div>
            </div>
            <CartItemControls product={item} count={item.count} />
          </div>
        ))
      )}

      {/* Display the total price */}
      {cartItems.length > 0 && (
        <div className="mt-4">
          <p className="text-lg font-semibold text-gray-800">
            Total Price:{" "}
            <span className="text-blue-600">${totalPrice.toFixed(2)}</span>
          </p>
        </div>
      )}

      <div className="mt-6">
        {cartItems.length > 0 && (
          <button className="w-full py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 transition">
            Checkout
          </button>
        )}
      </div>
    </div>
  );
};

export default CartSideNav;
