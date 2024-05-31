const Footer = () => {
  return (
    <section
      className="container text-center mt-5"
      style={{ width: "50%" }}
      id="contact"
      data-aos="zoom-in-up"
    >
      <h1 className="mt-5 mb-5">
        <span className="text-primary">Dong</span>
        <span className="text-warning">Kal</span>
      </h1>
      <div className="">
        <a className="btn gallery" href="https://twitter.com" target="_blank">
          <i className="fa-brands fa-twitter"></i>
        </a>
        <a className="btn gallery" href="https://facebook.com" target="_blank">
          <i className="fa-brands fa-facebook"></i>
        </a>
        <a className="btn gallery" href="https://linkedin.com" target="_blank">
          <i className="fa-brands fa-linkedin-in"></i>
        </a>
        <a className="btn gallery" href="https://instagram.com" target="_blank">
          <i className="fa-brands fa-instagram"></i>
        </a>
      </div>

      <div className="body-caption mt-4">
        <div className="caption">
          <h5 className="fw-bold">Get In Touch</h5>
          <p className="text-end">
            123 Street, New York, USA <br />
            +012 345 67890
          </p>
        </div>
        <div className="caption">
          <h5 className="fw-bold">Opening Hours</h5>
          <p className="text-start">
            Mon – Sat, 8AM – 5PM
            <br />
            Sunday: Closed
          </p>
        </div>
      </div>
      <h6 className="mt-3 mb-5">
        © <span className="text-warning">Domain.</span> All Rights Reserved.
        Designed by <span className="text-warning mb-5">HTML Codex</span>
      </h6>
    </section>
  );
};

export default Footer;
