import CarouselChild from "./carouselChild";

const Carousel = () => {
  return (
    <div id="carouselExampleCaptions" className="carousel slide">
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner">
        <CarouselChild
          title="Dive into a World of Flavor!"
          content="Explore our culinary creations crafted with passion and expertise. From tantalizing appetizers to mouthwatering mains, we're here to delight your taste buds"
          classCarousel="mycarousel"
        />
        <CarouselChild
          title="Dive into a World of Flavor!"
          content="Explore our culinary creations crafted with passion and expertise. From tantalizing appetizers to mouthwatering mains, we're here to delight your taste buds"
          classCarousel="mycarousel2"
        />
        <CarouselChild
          title="Dive into a World of Flavor!"
          content="Explore our culinary creations crafted with passion and expertise. From tantalizing appetizers to mouthwatering mains, we're here to delight your taste buds"
          classCarousel="mycarousel3"
        />
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
