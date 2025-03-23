import { FiShoppingCart } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { openCart } from "../../store/slices/uiSlice";
import { Link } from "react-router-dom";

const Header = () => {
  const dispatch = useDispatch();
  const cartTotalCount = useSelector((state: RootState) =>
    state.cart.items.reduce((total, item) => total + item.count, 0)
  );

  return (
    <header className="bg-white shadow-md p-4 flex justify-between items-center sticky top-0 z-50">
      <Link to="/" className="text-2xl font-bold text-blue-600">
        E-Commerce
      </Link>

      {/* Cart Icon with Badge */}
      <button onClick={() => dispatch(openCart())} className="relative">
        <FiShoppingCart size={28} className="text-gray-800" />
        {cartTotalCount > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
            {cartTotalCount}
          </span>
        )}
      </button>
    </header>
  );
};

export default Header;
