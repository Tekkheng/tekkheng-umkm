import ProfileImage from "../assets/img/profile.png";
import GalleryChild from "./galleryChild";
const Gallery = () => {
  return (
    <section className="container" id="gallery">
      <br />
      <h2 className="mt-5 mb-5 fw-bold">
        Meet Our Team <br />
        Passionate Food Enthusiasts
        <br />
        and Culinary Artists
      </h2>
      <div className="mycard">
        <GalleryChild name="Tek Kheng" role="Frontend" img={ProfileImage}/>
        <GalleryChild name="Tek Kheng" role="DESIGNATION" img={ProfileImage}/>
        <GalleryChild name="Tek Kheng" role="Backend" img={ProfileImage}/>
      </div>
    </section>
  );
};

export default Gallery;
