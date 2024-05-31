import PropTypes from "prop-types";


const CarouselChild = (props) => {
    return (
        <div className="carousel-item active">
      <div className={props.classCarousel}>
        <h4>{props.title}</h4>
        <h5>{props.content}</h5>
        <button className="btn btn-warning mt-5">Learn More</button>
      </div>
    </div>
  );
};

CarouselChild.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  classCarousel: PropTypes.string.isRequired,
};

export default CarouselChild;
