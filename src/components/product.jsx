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
          content="Makanan tradisional Indonesia yang terbuat dari campuran tepung beras, gula, dan santan, kemudian dikukus. Biasanya memiliki tekstur kenyal dan manis, sering kali dihias dengan irisan kelapa atau wijen yang lezat."
        />
        <CardProduct
          img={Dolila}
          title="Dolar (Dongkal Gula Merah)"
          content="Sejenis kue tradisional dari Indonesia yang terbuat dari gula merah atau palm sugar, tepung beras, dan santan. Kue ini memiliki cita rasa manis yang khas dari gula merah dan biasanya dihidangkan sebagai camilan atau makanan penutup."
        />
        <CardProduct
          img={Dobumi}
          title="Dobumi (Dongkal Bunga Mini)"
          content="Dongkal Bunga Mini adalah variasi produk yang menarik. Bunga mini (misalnya bunga kenanga) ditambahkan pada adonan untuk memberikan aroma yang khas.Teksturnya kenyal dan memiliki rasa yang unik."
        />
        <CardProduct
          img={Domochi}
          title="Domochi (Dongkal Mochi)"
          content="Makanan tradisional Jepang yang terbuat dari tepung ketan yang difermentasi, kemudian diisi dengan berbagai jenis isi seperti kacang merah, kacang hijau, atau pasta manis lainnya. Mochi memiliki tekstur kenyal dan biasanya dihidangkan sebagai camilan atau makanan penutup."
        />
      </div>
    </section>
  );
};

export default Product;
