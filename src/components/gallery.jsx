import ProfileImage from "../assets/img/profile.png";
import GalleryChild from "./galleryChild";
const Gallery = () => {
  return (
    <section className="container" id="gallery">
      <br />
      <h2 className="mt-5 mb-5 fw-bold">
        Lorem ipsum dolor sit amet <br />
        consectetur adipisicing elit.
        <br />
        cFacilis, ex.
      </h2>
      <div className="mycard">
        <GalleryChild name="Tek Kheng" role="Frontend" img={ProfileImage}/>
        <GalleryChild name="Akheng" role="DESIGNATION" img={ProfileImage}/>
        <GalleryChild name="Tek" role="Backend" img={ProfileImage}/>
      </div>
    </section>
  );
};

export default Gallery;
