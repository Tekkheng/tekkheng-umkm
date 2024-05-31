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
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit
            molestiae suscipit inventore voluptatibus atque molestias velit
            voluptates rem, voluptatum alias?
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
