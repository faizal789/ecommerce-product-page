import "./index.css";
import Navbar from "./component/Navbar";
import Product from "./component/Product";
import React from "react";
function App() {
  const [count, setCount] = React.useState(0);
  const [totalPrice, setTotalPrice] = React.useState(0);
  const [removeProduct, setRemoveProduct] = React.useState(false);


  return (
    <main>
      <Navbar
        totalPrice={totalPrice}
        count={count}
        removeProduct={removeProduct}
        setRemoveProduct = {setRemoveProduct}
        setCount = {setCount}
        setTotalPrice = {setTotalPrice}
      ></Navbar>
      <Product
        count={count}
        setCount={setCount}
        setTotalPrice={setTotalPrice}
        setRemoveProduct = {setRemoveProduct}
      ></Product>
    </main>
  );
}

export default App;
