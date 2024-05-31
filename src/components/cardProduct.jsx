import PropTypes from 'prop-types';


const CardProduct = (props) => {
    return (
        <div
        className="card text-center"
      data-aos="fade-right"
      data-aos-duration="600"
      >
      <h3 className="border bg bg-warning text-light p-3">$100</h3>
      <img className="myproduct card-img-top" src={props.img} alt="..." />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">
          {props.content}
        </p>
        <a href="#" className="btn btn-warning d-block text-light btn_order">
          Order Now
        </a>
      </div>
    </div>
  );
};

CardProduct.propTypes = {
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired
}
export default CardProduct;
