import PropTypes from 'prop-types';


const GalleryChild = (props) => {
    return (
        <div
        className="card card_gallery text-center"
        data-aos="zoom-out-right"
        data-aos-duration="600"
        >
      <img className="mygallery card-img-top" src={props.img} alt="..." />
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <p className="card-text">{props.role}</p>
        <a className="btn gallery" href="https://twitter.com" target="_blank">
          <i className="fa-brands fa-twitter"></i>
        </a>
        <a className="btn gallery" href="https://facebook.com" target="_blank">
          <i className="fa-brands fa-facebook"></i>
        </a>
        <a className="btn gallery" href="https://linkedin.com" target="_blank">
          <i className="fa-brands fa-linkedin-in"></i>
        </a>
      </div>
    </div>
  );
};

GalleryChild.propTypes = {
    name: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired
}
export default GalleryChild;
