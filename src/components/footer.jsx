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
        <a className="btn gallery" href="https://github.com/Tekkheng?tab=repositories" target="_blank">
          <i className="fa-brands fa-github"></i>
        </a>
        <a className="btn gallery" href="https://www.youtube.com/channel/UC6567sl_0-a2_fhGPloih5w" target="_blank">
          <i className="fa-brands fa-youtube"></i>
        </a>
        <a className="btn gallery" href="https://www.linkedin.com/in/tek-kheng-58211723b/" target="_blank">
          <i className="fa-brands fa-linkedin-in"></i>
        </a>
        <a className="btn gallery" href="https://www.instagram.com/akheng_je/?hl=en" target="_blank">
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
