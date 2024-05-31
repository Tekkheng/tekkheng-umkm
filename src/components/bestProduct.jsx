import bestProductImg from "../assets/img/product2.jpeg";

const BestProduct = () => {
  return (
    <section className="container">
      <div className="row p-2">
        <div className="col-lg-6 mt-5">
          <img src={bestProductImg} style={{ width: "100%" }} />
        </div>
        <div className="col-lg-6 text-center text-light mt-5 p-5 bg bg-warning">
          <h3 className="text-info">$253</h3>
          <h3>Dobumi (Dongkal Bumi Mini)</h3>
          <p>
          Dongkal Bunga Mini adalah variasi produk yang menarik. Bunga mini (misalnya bunga kenanga) ditambahkan pada adonan untuk memberikan aroma yang khas.Teksturnya kenyal dan memiliki rasa yang unik.
          </p>
          <button className="btn btn-info rounded-4 text-light">
            Order Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default BestProduct;
