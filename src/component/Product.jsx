import Images from "./images";
import Description from "./description";

const Product = () => {
  return (
    <section className="flex items-center gap-16 px-36 py-20 max-lg:flex-col max-sm:py-0 max-sm:px-0 mb-10">
      <Images></Images>
      <Description></Description>
    </section>
  );
};

export default Product;
