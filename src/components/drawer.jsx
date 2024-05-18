import React, { useState, useEffect } from "react";
import { RiShoppingCartLine } from "react-icons/ri";

const Drawer = ({ shops }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  useEffect(() => {
    if (isDrawerOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isDrawerOpen]);

  // const shop = useSelector((state) => state.cart.shop);
  // const dispatch = useDispatch();

  // const totalPrice = () => {
  //   let total = 0;
  //   shop.forEach((item) => {
  //     total += item.attirbutes.attributes.length * item.attirbutes.attributes.productPrice;
  //   });
  //   return total.toFixed(2);
  // };

  // const stripePromise = loadStripe(
  //   "pk_test_eOTMlr8usx1ctymXqrik0ls700lQCsX2UB"
  // );
  // const handlePayment = async () => {
  //   try {
  //     const stripe = await stripePromise;
  //     const res = await makeRequest.post("/orders", {
  //       shop,
  //     });
  //     await stripe.redirectToCheckout({
  //       sessionId: res.data.stripeSession.id,
  //     });

  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  return (
    <>
      <div className="text-center">
        <button onClick={toggleDrawer} className="focus:outline-none">
          <RiShoppingCartLine
            className="my-icon w-8 h-8 md:w-9 md:h-9 text-gray-500 hover:cursor-pointer hover:scale-90 transition duration-300 ease-in-out"
            alt="account"
          />
        </button>
        {/* <span className="w-5 h-5 rounded-[50%] bg-darkGreen flex absolute text-white items-center justify-center top-6 right-[15%]">
          2
        </span> */}
      </div>
      <div
        className={`fixed top-0 right-0 z-40 h-screen p-6 overflow-y-auto bg-gray-100 md:w-1/4 w-2/3 transform transition-transform duration-300 ${
          isDrawerOpen
            ? "translate-x-0"
            : "translate-x-full scale-80 opacity-80"
        }`}
      >
        <div className="drawer-content">
          <h1 className="font-medium absolute -top-2 start-4 flex items-start justify-center text-black-100 md:text-lg lg:text-xl pt-[5%] ">
            Shopping Cart 
          </h1>
          <button
            type="button"
            onClick={toggleDrawer}
            className="text-gray-500 bg-transparent hover:scale-90 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 flex items-center justify-center"
          >
            <svg
              className="w-4 h-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span className="sr-only">Close menu</span>
          </button>
        </div>
      </div>

      {/* // cart-css
      <div className="cart">
        <h2>Products in your cart</h2>

        {shop.data?.map((item) => (

          // item-css
          <div className="item" key={item.attirbutes.id}>
            <img src={process.env.REACT_APP_UPLOAD_URL + item.attirbutes.img} alt="" />

            // details-css
            <div className="details">
              <h1>{item.attirbutes.title}</h1>
              <p>{item.attirbutes.desc?.substring(0, 100)}</p>

              // price-css
              <div className="price">
                {item.attirbutes.quantity} x ${item.attirbutes.price}
              </div>
            </div>

            // delete-css
            <DeleteOutlinedIcon
              className="delete"
              onClick={() => dispatch(removeItem(item.attirbutes.id))}
            />
          </div>
        ))}

        //total-css
        <div className="total">
          <span>SUBTOTAL</span>
          <span>${totalPrice()}</span>
        </div>
        <button onClick={handlePayment}>PROCEED TO CHECKOUT</button>

        // reset-css
        <span className="reset" onClick={() => dispatch(resetCart())}>
          Reset Cart
        </span>
      </div> */}
    </>
  );
};

export default Drawer;
