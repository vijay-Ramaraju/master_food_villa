import { useSelector, useDispatch } from "react-redux";
import { Img_url } from "../Contents";

import {
  incrementItem,
  decrementItem,
  clearCart,
} from "../../Utils/Redux/Slices/cartSlice";
const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  return (
    <section className="md:flex md:justify-center  w-4/5 mx-auto md:my-5 fmd:flex-wrap gap-5">
      <div className="md:w-1/2 w-full">
        {cartItems.length < 1 ? (
          <div className="text-center mt-12 flex flex-col gap-2">
            <h1 className="text-2xl font-semibold">
              Your cart is empty, please add items into cart{" "}
            </h1>
            <h1 className="text-5xl">🛒</h1>
          </div>
        ) : (
          <div className="flex justify-between py-2 my-2 text-lg items-center ">
            <p className="">Your Cart</p> <hr className="" />
            <button
              disabled={cartItems.length > 0 ? false : true}
              className="text-normal bg-red-500 text-white px-2 py-1"
              onClick={() => dispatch(clearCart())}
            >
              Clear cart
            </button>
          </div>
        )}
        {/* <hr className="my-2 border-gray-200 border-2" /> */}
        {cartItems.map((item) => {
          const { name, imageId, price } = item?.card?.info;
          return (
            <div
              key={item?.card?.info?.id}
              className="flex flex-wrap gap-5  my-2 items-center shadow-lg rounded-lg p-2"
            >
              <img
                className="md:w-1/3 h-full"
                src={Img_url + imageId}
                alt={name}
              />
              <div className="md:w-1/3 text-md ">
                <p className="font-bold">{name}</p>

                <p className="">Rs. {(price / 100).toFixed(2)} </p>
                <p className="my-2 font-bold text-lg">
                  Total price: {((item.itemCount * price) / 100).toFixed(2)}
                </p>
              </div>
              <div>
                <button
                  className="bg-gray-900 text-white px-2"
                  onClick={() => dispatch(decrementItem(item))}
                >
                  -
                </button>
                <span className="mx-2">{item.itemCount}</span>
                <button
                  className="bg-gray-900 text-white px-2"
                  onClick={() => dispatch(incrementItem(item))}
                >
                  +
                </button>
                <p className="my-2 font-bold"></p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex flex-col justify-center items-center md:w-1/3 w-full pl-2 md:border-l-2 md:border-gray-200 ">
        <p className="my-2 py-2 text-xl font-bold">
          Total price: Rs.{" "}
          {cartItems.length &&
            cartItems
              .map((item) => (item.itemCount * item?.card?.info?.price) / 100)
              .reduce((acc, curr) => acc + curr, 0)
              .toFixed(2)}
        </p>
        <button className="px-2 py-1 bg-gray-900 text-white hover:bg-white hover:text-gray-900 hover:border-2 hover:border-gray-900">
          Checkout&nbsp;&nbsp;&nbsp;
        </button>
      </div>
    </section>
  );
};

export default Cart;