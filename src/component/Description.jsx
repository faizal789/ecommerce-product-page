import { useContext } from "react";
import CartContext from "../CartContext";

const Description = () => {
  const { count, setCount, setTotalPrice, setRemoveProduct } =
    useContext(CartContext);

  const price = 125;
  function add() {
    setCount((prevCount) => prevCount + 1);
  }

  function minus() {
    setCount((prevCount) => {
      if (prevCount <= 0) {
        return 0;
      } else {
        return prevCount - 1;
      }
    });
  }

  function addToChart() {
    setTotalPrice(price * count);
    setRemoveProduct(false);
    alert("Product has been added to cart");
  }

  return (
    <div className="w-1/2 max-lg:w-4/5">
      <h2 className="text-orange font-bold text-sm">SNEAKER COMPANY</h2>
      <h1 className="text-5xl mt-4 mb-8 max-sm:text-3xl">
        Fall Limited Edition Sneakers
      </h1>
      <p>
        These low-profile sneakers are you perfect casual wear companion.
        Featuring a durable rubber outer sole. {`They'll`} withstand everything
        the weather can offer.
      </p>
      <div className="flex flex-col items-start gap-4 mt-4 mb-5 max-sm:flex-row max-sm:justify-between max-sm:mb-7 max-sm:items-center">
        <div className="flex items-center gap-4">
          <span className="font-bold text-4xl">$125.00</span>
          <span className="text-orange bg-pale-orange py-1 px-2 rounded-sm">
            50%
          </span>
        </div>
        <p className="line-through font-bold">$250.00</p>
      </div>

      <div className="flex items-center gap-5 max-lg:flex-col max-lg:items-start max-sm:clear-right">
        <div className="flex items-center justify-between p-3 bg-light-grayish-blue rounded-lg w-36 max-sm:w-full">
          <img
            src="images/icon-minus.svg"
            alt=""
            className="cursor-pointer"
            width={18}
            onClick={minus}
          />
          <div className="font-bold text-text-md">{count}</div>
          <img
            src="images/icon-plus.svg"
            alt=""
            className="cursor-pointer"
            width={18}
            onClick={add}
          />
        </div>
        <button
          onClick={addToChart}
          className="hover:opacity-70 flex items-center justify-center gap-4 bg-orange w-60 py-3 rounded-lg max-sm:w-full"
        >
          <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
              fill="white"
            />
          </svg>
          <span className="text-white font-bold">Add to cart</span>
        </button>
      </div>
    </div>
  );
};

export default Description;
