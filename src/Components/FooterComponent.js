import React from "react";

function Footer(props) {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row">
          <div className="col-12 mt-5 text-center">
            <hr color="white"></hr>
          </div>
          <div className="col-12 mt-5 text-center">
            <a
              className="btn btn-social-icon btn-instagram"
              href="http://instagram.com/"
            >
              <i className="fa fa-instagram" />
            </a>{" "}
            <a
              className="btn btn-social-icon btn-facebook"
              href="http://www.facebook.com/"
            >
              <i className="fa fa-facebook" />
            </a>{" "}
            <a
              className="btn btn-social-icon btn-spotify"
              href="http://spotify.com/"
            >
              <i className="fa fa-spotify" />
            </a>{" "}
            <a
              className="btn btn-social-icon btn-google"
              href="http://youtube.com/"
            >
              <i className="fa fa-youtube" />
            </a>
          </div>
          <div className="col-12 text-center mt-3">
            <a
              role="button"
              className="btn btn-link"
              href="mailto:dane.scozzari@gmail.com"
            >
              dane.scozzari@gmail.com
            </a>
          </div>
          <div className="col-12 mt-5 text-center"></div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
