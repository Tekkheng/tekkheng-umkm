import Dolar from "../assets/img/Dolar.png";
import Dolila from "../assets/img/Dolila.png";
import Dobumi from "../assets/img/Dobumi.png";
import Domochi from "../assets/img/Domochi.png";
import CardProduct from "./cardProduct";

const Product = () => {
  return (
    <section className="container" id="product">
      <h1
        className="mt-5 mb-5 text-center"
        data-aos="fade-down"
        data-aos-duration="600"
      >
        Best Prices We Offer
      </h1>
      <div className="mycard">
        <CardProduct
          img={Dolar}
          title="Dolila (Dongkal Lidah Lama)"
          content="Some quick example text to build on the card title and make up the
              bulk of the card;s content."
        />
        <CardProduct
          img={Dolila}
          title="Dolar (Dongkal Gula Merah)"
          content="Some quick example text to build on the card title and make up the
          bulk of the card;s content."
        />
        <CardProduct
          img={Dobumi}
          title="Dobumi (Dongkal Bunga Mini)"
          content="Some quick example text to build on the card title and make up the
          bulk of the card;s content."
        />
        <CardProduct
          img={Domochi}
          title="Domochi (Dongkal Mochi)"
          content="Some quick example text to build on the card title and make up the
          bulk of the card;s content."
        />
      </div>
    </section>
  );
};

export default Product;
