import PropTypes from "prop-types";


const CarouselChild = (props) => {
    return (
        <div className="carousel-item active">
      <div className={props.classCarousel}>
        <h3>{props.title}</h3>
        <h6 className="text-wrap w-50 mt-4">{props.content}</h6>
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
