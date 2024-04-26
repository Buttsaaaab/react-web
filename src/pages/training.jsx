import Aos from "aos";
import React, { useEffect } from "react";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
export default function Training() {
  useEffect(() => {
    Aos.init();
  });
  return (
    <>
      <section className="course-two course-two--page my-5">
        <div className="container">
          <div className="row gutter-y-30">
            <div className="col-md-6 col-lg-3">
              <div
                className="course-card wow fadeInUp"
                data-aos="fade-up"
                data-wow-duration="1500ms"
                data-wow-delay="00ms"
              >
                <div className="course-card__image">
                  <img
                    src="assets/images/gallery/course-1-1.jpg"
                    alt="@@name"
                  />
                </div>
                <div className="course-card__content">
                  <div className="course-card__thumbnail">
                    <h3 className="course-card__title">TRACTOR TRAILER MELT</h3>
                    <p className="course-card__designation">
                      Mandatory entry-level training will include at least 103.5
                      hours of instruction and cover the entry-level knowledge
                      and skills needed to safely operate a large truck on
                      Ontario’s roads.
                    </p>
                  </div>

                  <div className="course-card__bottom">
                    <div className="course-card__author">
                      <div className="course-card__author-image">
                        <img
                          src="assets/images/gallery/author-c-1-2.jpg"
                          alt="course-card__author-image"
                        />
                      </div>
                      <div className="course-card__author-content">
                        <h5 className="course-card__author-name">
                          <Link to="/license">
                            {" "}
                            Learn more about this License
                          </Link>
                        </h5>
                      </div>
                    </div>
                    <Link
                      to="course-details.html"
                      className="course-card__bottom-btns"
                    >
                      <i className="icon-arrow"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div
                className="course-card wow fadeInUp"
                data-aos="fade-up"
                data-wow-duration="1500ms"
                data-wow-delay="00ms"
              >
                <div className="course-card__image">
                  <img
                    src="assets/images/gallery/course-1-1.jpg"
                    alt="@@name"
                  />
                </div>
                <div className="course-card__content">
                  <div className="course-card__thumbnail">
                    <h3 className="course-card__title">AZ PROGRAM</h3>
                    <p className="course-card__designation">
                      This program is approved as a vocational program under the
                      Private Career Colleges Act, 2005
                    </p>
                  </div>

                  <div className="course-card__bottom">
                    <div className="course-card__author">
                      <div className="course-card__author-image">
                        <img
                          src="assets/images/gallery/author-c-1-2.jpg"
                          alt="course-card__author-image"
                        />
                      </div>
                      <div className="course-card__author-content">
                        <h5 className="course-card__author-name">
                          <Link to="/license-class-a">
                            {" "}
                            Learn more about this License
                          </Link>
                        </h5>
                      </div>
                    </div>
                    <Link
                      to="course-details.html"
                      className="course-card__bottom-btns"
                    >
                      <i className="icon-arrow"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div
                className="course-card wow fadeInUp"
                data-aos="fade-up"
                data-wow-duration="1500ms"
                data-wow-delay="00ms"
              >
                <div className="course-card__image">
                  <img
                    src="assets/images/gallery/course-1-1.jpg"
                    alt="@@name"
                  />
                </div>
                <div className="course-card__content">
                  <div className="course-card__thumbnail">
                    <h3 className="course-card__title">DZ CLASS</h3>
                    <p className="course-card__designation">
                      This program does not require approval as a vocational
                      program under the Private Career Colleges Act, 2005
                    </p>
                  </div>

                  <div className="course-card__bottom">
                    <div className="course-card__author">
                      <div className="course-card__author-image">
                        <img
                          src="assets/images/gallery/author-c-1-2.jpg"
                          alt="course-card__author-image"
                        />
                      </div>
                      <div className="course-card__author-content">
                        <h5 className="course-card__author-name">
                          <Link to="/license-class-d">
                            {" "}
                            Learn more about this License
                          </Link>
                        </h5>
                      </div>
                    </div>
                    <Link
                      to="course-details.html"
                      className="course-card__bottom-btns"
                    >
                      <i className="icon-arrow"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div
                className="course-card wow fadeInUp"
                data-aos="fade-up"
                data-wow-duration="1500ms"
                data-wow-delay="00ms"
              >
                <div className="course-card__image">
                  <img
                    src="assets/images/gallery/course-1-1.jpg"
                    alt="@@name"
                  />
                </div>
                <div className="course-card__content">
                  <div className="course-card__thumbnail">
                    <h3 className="course-card__title">AIR BRAKE Z COURSE</h3>
                    <p className="course-card__designation">
                      Approved Air Brake Endorsement & Adjustment Facility,
                      P.D.I.C. & S.B.D.I.C. Defensive Driving Centre
                    </p>
                  </div>

                  <div className="course-card__bottom">
                    <div className="course-card__author">
                      <div className="course-card__author-image">
                        <img
                          src="assets/images/gallery/author-c-1-2.jpg"
                          alt="course-card__author-image"
                        />
                      </div>
                      <div className="course-card__author-content">
                        <h5 className="course-card__author-name">
                          <Link to="/air-break">
                            {" "}
                            Learn more about this License
                          </Link>
                        </h5>
                      </div>
                    </div>
                    <Link to="/air-break" className="course-card__bottom-btns">
                      <i className="icon-arrow"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
