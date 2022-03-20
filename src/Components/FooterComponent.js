import React from "react";
import { Link } from "react-router-dom";

function Footer(props) {
    return (
        <footer className="site-footer">
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center">
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
                            className="btn btn-social-icon btn-twitter"
                            href="http://twitter.com/"
                        >
                            <i className="fa fa-twitter" />
                        </a>{" "}
                        <a
                            className="btn btn-social-icon btn-google"
                            href="http://youtube.com/"
                        >
                            <i className="fa fa-youtube" />
                        </a>
                    </div>
                    <div className="col-12 text-center">
                        <a
                            role="button"
                            className="btn btn-link"
                            href="mailto:dane.scozzari@gmail.com"
                        >
                            <i className="fa fa-envelope-o" />
                            dane.scozzari@gmail.com
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
