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
        <a className="btn gallery" href="https://github.com/Tekkheng?tab=repositories" target="_blank">
          <i className="fa-brands fa-github"></i>
        </a>
        <a className="btn gallery" href="https://www.instagram.com/akheng_je/?hl=en" target="_blank">
          <i className="fa-brands fa-instagram"></i>
        </a>
        <a className="btn gallery" href="https://www.linkedin.com/in/tek-kheng-58211723b/" target="_blank">
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
