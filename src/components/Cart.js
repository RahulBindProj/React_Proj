import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import ItemList from "./ItemList";
const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  //   console.log(cartItems);

  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <>
      <div>
        <h1 className="text-center text-6xl font-bold my-5">Cart Item</h1>
        <div className="w-6/12 m-auto">
          <button
            className="px-4 py-2 m-2 bg-slate-900 text-white"
            onClick={handleClearCart}
          >
            Clear Cart
          </button>
          {cartItems.length === 0 && <h1>Your Cart is empty !!!!</h1>}
          <ItemList items={cartItems} />
        </div>
      </div>
    </>
  );
};

export default Cart;
