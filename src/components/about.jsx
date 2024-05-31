// import images from '../assets/img/dongkal.png'
import dongkalImage from "../assets/img/dongkal.png";
const About = () => {
  return (
    <section className="container about" id="about">
      <div className="container">
        <h3
          className="text-center mt-5"
          data-aos="fade-down"
          data-aos-duration="600"
        >
          Lorem ipsum dolor sit amet.
        </h3>
        <div className="row mt-5">
          <div
            className="col-lg-4"
            data-aos="fade-right"
            data-aos-duration="600"
          >
            <h3 className="mt-5">About Us</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Expedita, a.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur rerum in quia corrupti molestias incidunt similique
              atque doloribus, aperiam cupiditate provident ratione beatae,
              laudantium nulla et animi sequi dicta aut.
            </p>
            <button className="btn btn-info text-light rounded-4">
              Learn More
            </button>
          </div>

          <div
            className="col-lg-4 mt-4"
            data-aos="zoom-in"
            data-aos-duration="600"
          >
            {/* <img src="img/dongkal.png" style="width: 100%" /> */}
            <img src={dongkalImage} style={{ width: "100%" }} />
          </div>

          <div
            className="col-lg-4"
            data-aos="fade-right"
            data-aos-duration="600"
          >
            <h3 className="mt-5">Our Features</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
              a ut, nam neque laborum sequi similique voluptatum debitis ab.
              Voluptatem.
            </p>
            <p>Lorem ipsum dolor sit amet.</p>
            <p>Lorem ipsum dolor sit amet.</p>
            <p>Lorem ipsum dolor sit amet.</p>
            <button className="btn btn-danger text-light rounded-4">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
