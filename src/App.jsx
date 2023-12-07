import "./index.css";
import Navbar from "./component/Navbar";
import Product from "./component/Product";
import CartProvider from "./CartProvider";
function App() {
  return (
    <CartProvider>
      <main>
        <Navbar></Navbar>
        <Product></Product>
      </main>
    </CartProvider>
  );
}

export default App;
