import React from "react";
import { Link } from "react-router-dom";
import { TruckIcon } from "../components/truck-icon";

const Home = () => {
  return (
    <>
      <section
        className="main-slider-two"
        id="home"
        style={{ height: "100vh" }}
      >
        <div
          className="main-slider-two__carousel drivschol-owl__carousel owl-carousel"
          data-owl-options='{
		"loop": true,
		"animateOut": "slideOutDown",
		"animateIn": "fadeIn",
		"items": 1,
		"autoplay": true,
		"autoplayTimeout": 7000,
		"smartSpeed": 1000,
		"nav": false,
        "navText": ["<span className=\"icon-left-arrow\"></span>","<span className=\"icon-right-arrow\"></span>"],
		"dots": true,
		"margin": 0
	    }'
        >
          <div className="item">
            <div className="main-slider-two__item">
              <div
                className="main-slider-two__bg"
                style={{
                  backgroundImage:
                    "url(assets/images/backgrounds/slider-2-1.png)",
                }}
              ></div>
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <div className="main-slider-two__content">
                      <h5 className="main-slider-two__sub-title">
                        <span>
                          Get trained, licensed, and job-ready in a high-demand
                          industry <br /> with rewarding opportunities.
                        </span>
                      </h5>
                      <h2 className="main-slider-two__title">
                        Truck Training Academy of Stoney Creek:
                        <br /> Your Gateway to a Fulfilling Trucking Career
                      </h2>
                      <div className="main-slider-two__btn">
                        <a
                          href="/getting_started"
                          onClick="{ () => {window.location.href = '/getting_started'}}"
                          className="drivschol-btn drivschol-btn--base2"
                        >
                          <span>Get Started</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="main-slider-two__layer">
                <img src="assets/images/backgrounds/slider-2-shape-2.png" />
                <img
                  className="main-slider-two__layer__shape"
                  src="assets/images/backgrounds/slider-2-shape-3.png"
                />
              </div>
              <div className="main-slider-two__layer-two">
                <img src="assets/images/resources/car-2-1.png" />
              </div>
            </div>
          </div>
          <div className="item">
            <div className="main-slider-two__item">
              <div
                className="main-slider-two__bg"
                style={{
                  backgroundImage:
                    "url(assets/images/backgrounds/slider-2-1.png)",
                }}
              ></div>
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <div className="main-slider-two__content">
                      <h5 className="main-slider-two__sub-title">
                        <span>
                          Gain the skills, certification, and readiness for a
                          high-demand career in the
                          <br /> trucking industry, full of rewarding
                          possibilities
                        </span>
                      </h5>
                      <h2 className="main-slider-two__title">
                        Launch Your Career on the Open Road
                      </h2>
                      <div className="main-slider-two__btn">
                        <a
                          href="services.html"
                          className="drivschol-btn drivschol-btn--base2"
                        >
                          <span>Get Started</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="main-slider-two__layer">
                <img src="assets/images/backgrounds/slider-2-shape-2.png" />
                <img
                  className="main-slider-two__layer__shape"
                  src="assets/images/backgrounds/slider-2-shape-3.png"
                />
              </div>
              <div className="main-slider-two__layer-two">
                <img src="assets/images/blog/truck2.png" />
              </div>
            </div>
          </div>
          <div className="item">
            <div className="main-slider-two__item">
              <div
                className="main-slider-two__bg"
                style={{
                  backgroundImage:
                    "url(assets/images/backgrounds/slider-2-1.png)",
                }}
              ></div>
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <div className="main-slider-two__content">
                      <h5 className="main-slider-two__sub-title">
                        <span>
                          Become trained, licensed, and job-ready with us, and
                          tap into the wealth of
                          <br /> opportunities in the ever-growing trucking
                          sector.
                        </span>
                      </h5>
                      <h2 className="main-slider-two__title">
                        Drive Towards a Prosperous Future
                      </h2>

                      <div className="main-slider-two__btn">
                        <a
                          href="services.html"
                          className="drivschol-btn drivschol-btn--base2"
                        >
                          <span>Get Started</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="main-slider-two__layer">
                <img src="assets/images/backgrounds/slider-2-shape-2.png" />
                <img
                  className="main-slider-two__layer__shape"
                  src="assets/images/backgrounds/slider-2-shape-3.png"
                />
              </div>
              <div className="main-slider-two__layer-two">
                <img src="assets/images/blog/truck3.png" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="develop-skill develop-skill--two">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              {/* <div
                                style={{backgroundImage: "url(assets/images/backgrounds/service-bg-2-1.jpg)" , height:'700px' , backgroundSize:'contain',backgroundRepeat:"no-repeat"}}>
                           </div> */}
              <div>
                <img
                  style={{ width: "100%", height: "100%" }}
                  src="assets/images/why_choose_tta.jpg"
                />
              </div>
            </div>

            <div className="col-lg-6 ">
              <div className="develop-skill__right">
                <div className="develop-skill__right__head">
                  <div
                    className="sec-title wow fadeInUp"
                    data-wow-duration="1500ms"
                    data-wow-delay="000ms"
                  >
                    <h3 className="sec-title__title">Why Choose TTA?</h3>
                  </div>
                  <p
                    className="develop-skill__right__head__text"
                    style={{ fontSize: "0.9rem" }}
                  >
                    Unlock a rewarding career path with Truck Training Academy
                    of Stoney Creek, where quality training meets career
                    readiness. Our academy stands out by offering
                    industry-leading instruction through certified and
                    experienced instructors who ensure each student receives top
                    notch education. Join us to transform your career prospects
                    and secure a future in the thriving trucking industry
                  </p>
                </div>
                <div className="develop-skill__right__content">
                  <div
                    className="develop-skill__right__content__item  wow fadeInUp"
                    data-wow-delay="300ms"
                  >
                    <div className="develop-skill__right__content__item__icon">
                      <div className="icon">
                        <i className="icon-online-learning-1-1"></i>
                      </div>
                    </div>
                    <div className="develop-skill__right__content__item__content">
                      <h4
                        className="develop-skill__right__content__item__content__title"
                        style={{ fontSize: "1.3rem" }}
                      >
                        Job-ready skills
                      </h4>
                      <p
                        className="develop-skill__right__content__item__content__text"
                        style={{ fontSize: "0.9rem" }}
                      >
                        Blending practical experience with essential theoretical
                        knowledge, preparing you for real-world challenges
                      </p>
                    </div>
                  </div>
                  <div
                    className="develop-skill__right__content__item  wow fadeInUp"
                    data-wow-delay="300ms"
                  >
                    <div className="develop-skill__right__content__item__icon">
                      <div className="icon">
                        <i className="icon-instructor-1-1"></i>
                      </div>
                    </div>
                    <div className="develop-skill__right__content__item__content">
                      <h4
                        className="develop-skill__right__content__item__content__title"
                        style={{ fontSize: "1.3rem" }}
                      >
                        Modern training facilities
                      </h4>

                      <p
                        className="develop-skill__right__content__item__content__text"
                        style={{ fontSize: "0.9rem" }}
                      >
                        Equipped with the latest in commercial driving
                        technology, ensuring you are well-versed in current
                        industry standards
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="develop-skill__shape-one">
          <img src="assets/images/shapes/about-cercle-1-1.png" />
        </div>
        <div className="develop-skill__shape-two">
          <img src="assets/images/shapes/about-cercle-1-2.png" />
        </div>
        <div className="develop-skill__shape-three">
          <img src="assets/images/shapes/about-cercle-1-3.png" />
        </div>
        <div className="develop-skill__shape-fore">
          <img src="assets/images/shapes/about-cercle-1-4.png" />
        </div>
      </section>
      <section className="service-two">
        <div
          className="service-two__bg"
          style={{
            height: "max-content",
            backgroundImage:
              "url(assets/images/backgrounds/service-bg-2-1.png)",
          }}
        ></div>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div
                className="sec-title  text-center wow fadeInUp"
                data-wow-duration="300ms"
              >
                <h3 className="sec-title__title">
                  We’re Offering the Best <br /> Benefits to You
                </h3>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div
                className="service-two__single  wow fadeInUp"
                data-wow-delay="300ms"
              >
                <div className="service-two__single__image">
                  <img src="assets/images/service/service-2-1.png" />
                </div>
                <div className="service-two__single__icon">
                  <i className="icon-Expert"></i>
                </div>
                <div className="service-two__single__content">
                  <h4 className="service-two__single__content__title">
                    Industry-Leading Instruction
                  </h4>
                  <p className="service-two__single__content__text">
                    Our team of experienced and certified instructors guide you
                    through every step of the training process, ensuring you
                    receive the highest quality education.
                  </p>
                </div>
              </div>
            </div>
            {/* --------------- */}
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div
                className="service-two__single  wow fadeInUp"
                data-wow-delay="500ms"
              >
                <div className="service-two__single__image">
                  <img src="assets/images/service/service-2-2.png" />
                </div>
                <div className="service-two__single__icon">
                  <i className="icon-certificate-1"></i>
                </div>
                <div className="service-two__single__content">
                  <h4 className="service-two__single__content__title">
                    Job-Ready Skills Guidelines
                  </h4>
                  <p className="service-two__single__content__text">
                    Develop the practical skills and theoretical knowledge
                    needed to excel in the trucking industry. You'll graduate
                    prepared to handle any situation on the road.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-12">
              <div
                className="service-two__single  wow fadeInUp"
                data-wow-delay="700ms"
              >
                <div className="service-two__single__image">
                  <img src="assets/images/service/service-2-3.png" />
                </div>
                <div className="service-two__single__icon">
                  <i className="icon-license-1"></i>
                </div>
                <div className="service-two__single__content">
                  <h4 className="service-two__single__content__title">
                    Flexible Training Options
                  </h4>
                  <p className="service-two__single__content__text">
                    Choose from a variety of programs designed to fit your
                    schedule and learning style, whether you're a recent high
                    school graduate, seeking a career change, or an experienced
                    driver looking to expand your qualifications.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-12">
              <div
                className="service-two__single  wow fadeInUp"
                data-wow-delay="800ms"
              >
                <div className="service-two__single__image">
                  <img src="assets/images/service/service-2-4.png" />
                </div>
                <div className="service-two__single__icon">
                  <i className="icon-safety"></i>
                </div>
                <div className="service-two__single__content">
                  <h4 className="service-two__single__content__title">
                    Career Support Services
                  </h4>
                  <p className="service-two__single__content__text">
                    We go beyond training. Our dedicated team assists you with
                    resume writing, job search strategies, and industry
                    connections to help you land your dream trucking job.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div
                className="service-two__single  wow fadeInUp"
                data-wow-delay="800ms"
              >
                <div className="service-two__single__image">
                  <img src="assets/images/blog/blog-1-1.png" />
                </div>
                <div className="service-two__single__icon">
                  <i className="icon-safety"></i>
                </div>
                <div className="service-two__single__content">
                  <h4 className="service-two__single__content__title">
                    Modern Training Equipment
                  </h4>
                  <p className="service-two__single__content__text">
                    Train on late-model commercial vehicles, ensuring you're
                    familiar with the latest technology and prepared for
                    real-world scenarios.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="testimonials-one">
        <div
          className="testimonials-one__bg"
          style={{
            backgroundImage:
              "url(assets/images/backgrounds/Untitled design (1).png)",
          }}
        ></div>
        <div className="container">
          <div
            className="sec-title2  text-center wow fadeInUp"
            data-wow-duration="300ms"
          >
            <h3 className="sec-title2__title" style={{ color: "black" }}>
              Success stories and
              <br /> Testimonials
            </h3>
          </div>
          <div
            className="testimonials-one__carousel drivschol-owl__carousel drivschol-owl__carousel--with-shadow drivschol-owl__carousel--basic-nav owl-carousel"
            data-owl-options='{
			"items": 1,
			"margin": 30,
			"loop": true,
			"smartSpeed": 700,
			"nav": true,
			"navText": ["<span className=\"fa fa-angle-left\"></span>","<span className=\"fa fa-angle-right\"></span>"],
			"dots": false,
			"autoplay": true,
			"responsive": {
				"0": {
					"items": 1
				},
				"767": {
					"items": 1,
					"margin": 30
				},
				"992": {
					"items": 3,
					"margin": 30
				}
			}
		}'
          >
            <div className="item">
              <div
                className="testimonials-card wow fadeInUp"
                data-wow-duration="1500ms"
                data-wow-delay="000ms"
              >
                <div className="testimonials-card__inner">
                  <div className="testimonials-card__top">
                    <div className="testimonials-card__top__icon">
                      <i className="icon-quite"></i>
                    </div>
                    <div className="testimonials-card__top__rating">
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                    </div>
                    <p className="testimonials-card__top__designation">
                      {" "}
                      "The flexible training options at TTA allowed me to pursue
                      my CDL while working part-time. The instructors were
                      patient and knowledgeable, and the career services team
                      helped me tailor my resume for the trucking industry."{" "}
                    </p>
                  </div>
                  <div className="testimonials-card__author">
                    <div className="testimonials-card__author__image">
                      <img src="assets/images/resources/testi-1-3.jpg" />
                    </div>
                    <div className="testimonials-card__author__content">
                      <h5 className="testimonials-card__author__name">
                        <a href="team.html">Jane Doe</a>
                      </h5>
                      <span className="testimonials-card__author__degeneration">
                        TTA graduate and owner-operator
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div
                className="testimonials-card wow fadeInUp"
                data-wow-duration="1500ms"
                data-wow-delay="000ms"
              >
                <div className="testimonials-card__inner">
                  <div className="testimonials-card__top">
                    <div className="testimonials-card__top__icon">
                      <i className="icon-quite"></i>
                    </div>
                    <div className="testimonials-card__top__rating">
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                    </div>
                    <p className="testimonials-card__top__designation">
                      There are many variations of passages of Loriem Ipsum ies
                      available, but the majority have suffered alteturr adtion
                      form by injected humour
                    </p>
                  </div>
                  <div className="testimonials-card__author">
                    <div className="testimonials-card__author__image">
                      <img src="assets/images/resources/testi-1-2.jpg" />
                    </div>
                    <div className="testimonials-card__author__content">
                      <h5 className="testimonials-card__author__name">
                        <a href="team.html">Kathryn Murphy</a>
                      </h5>
                      <span className="testimonials-card__author__degeneration">
                        Student
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div
                className="testimonials-card wow fadeInUp"
                data-wow-duration="1500ms"
                data-wow-delay="000ms"
              >
                <div className="testimonials-card__inner">
                  <div className="testimonials-card__top">
                    <div className="testimonials-card__top__icon">
                      <i className="icon-quite"></i>
                    </div>
                    <div className="testimonials-card__top__rating">
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                    </div>
                    <p className="testimonials-card__top__designation">
                      "TTA's program prepared me with the skills and confidence
                      to land a fantastic job with a reputable carrier right
                      after graduation. I'm grateful for the support and
                      guidance I received from the instructors."
                    </p>
                  </div>
                  <div className="testimonials-card__author">
                    <div className="testimonials-card__author__image">
                      <img src="assets/images/resources/testi-1-1.jpg" />
                    </div>
                    <div className="testimonials-card__author__content">
                      <h5 className="testimonials-card__author__name">
                        <a href="team.html">John Smith</a>
                      </h5>
                      <span className="testimonials-card__author__degeneration">
                        TTA graduate and current long-haul driver
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <br />
      <br />
      <br />
      <br />
      <section className="benefits-one">
        <div className="container">
          <div className="row align-items-end">
            <div className="col-xl-5">
              <div className="benefits-one__left">
                <div className="benefits-one__left__content">
                  <div className="benefits-one__left__content__head">
                    <div
                      className="sec-title  text-start wow fadeInUp"
                      data-wow-duration="300ms"
                    >
                      <h3 className="sec-title__title">
                        Empower Your Future: High Earnings and Exceptional
                        Support at TTA
                      </h3>
                    </div>
                  </div>
                  <p
                    className="benefits-one__left__content__text  wow fadeInUp"
                    data-wow-delay="300ms"
                  >
                    At Truck Training Academy of Stoney Creek, our commitment to
                    your success is demonstrated by our impressive graduation
                    success rate of 80% and our dedication to providing robust
                    job assistance. With our extensive industry connections, we
                    ensure that you have the best possible start in the trucking
                    industry. Our graduates can expect to earn an average of
                    $80,000 per year, reflecting the high demand for skilled
                    drivers and the quality of training we offer. Join TTA and
                    drive your future towards financial stability and
                    professional growth.
                  </p>

                  <div className="benefits-one__left__content__box">
                    <ul className="benefits-one__left__content__box__list list-unstyled">
                      <li className="benefits-one__left__content__box__list__item">
                        Graduation Success Rate of 80%
                      </li>
                      <li className="benefits-one__left__content__box__list__item">
                        Average Annual Earnings of $80,000
                      </li>
                      <li className="benefits-one__left__content__box__list__item">
                        Comprehensive Job Assistance
                      </li>
                      <li className="benefits-one__left__content__box__list__item">
                        Strong Industry Connections
                      </li>
                      <li className="benefits-one__left__content__box__list__item">
                        Support Beyond Graduation
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-7">
              <div
                className="benefits-one__thumb  wow fadeInUp"
                data-wow-delay="300ms"
              >
                <div className="benefits-one__thumb__item">
                  <img src="assets/images/resources/car-2-1.png" />
                </div>
                <div className="benefits-one__thumb__cta">
                  <div
                    className="benefits-one__thumb__cta__text"
                    style={{
                      display: "flex",
                      gap: "15px",
                      alignItems: "center",
                    }}
                  >
                    <span style={{ width: "80px" }}>
                      <TruckIcon />
                    </span>
                    We're Get Started - Enroll in Our Driving Course Today
                  </div>
                  <a
                    href="/getting_started"
                    // onClick="{ () => {window.location.href = '/getting_started'}}"
                    className="benefits-one__thumb__cta__btn drivschol-btn"
                  >
                    Enroll Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <span className="benefits-one__element">
          <svg
            width="68"
            height="552"
            viewBox="0 0 68 552"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              width="24"
              height="507"
              transform="matrix(-1 0 0 1 68 45)"
              fill="#393b6d"
            />
            <rect
              width="24"
              height="550"
              transform="matrix(-1 0 0 1 24 0)"
              fill="#393b6d"
            />
          </svg>
        </span>
      </section>
      <br />
      <br />
      <br />
      <br />
      <section className="about-two">
        <div className="container">
          <div className="about-two__right">
            <div className="about-two__right__head">
              <div className="about-two__right__head__title">
                <div
                  className="sec-title  text-center wow fadeInUp"
                  data-wow-duration="300ms"
                >
                  <h3 className="sec-title__title">
                    Ready to shift gears and drive your future? Enroll in our
                    program today and take the first step towards a rewarding
                    career in the trucking industry!
                  </h3>
                </div>
              </div>
              <p
                className="about-two__right__head__text text-center wow fadeInUp"
                data-wow-delay="500ms"
              >
                Jumpstart your career with Truck Training Academy of Stoney
                Creek. Our comprehensive programs provide the training and tools
                you need to become a certified commercial driver. With
                personalized instruction, state-of-the-art equipment, and strong
                industry connections, TTA positions you for success. Enroll
                today and pave the way to a secure and profitable career in
                trucking
              </p>
            </div>

            <div
              className="about-two__right__author wow fadeInUp flex justify-content-center"
              data-wow-delay="300ms"
            >
              <div className="about-two__right__link">
                <Link
                  to="/contact"
                  className="about-two__right__link__btn drivschol-btn drivschol-btn--black my-4"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-three contact__three__home-two">
        <div className="container-fluid p-0 m-0">
          <div className="contact-three__inner">
            <div
              className="contact-three__inner__bg jarallax"
              style={{
                backgroundImage:
                  "url(assets/images/resources/conntact-2-1.png)",
                backgroundAttachment: "fixed",
              }}
            ></div>
            <div className="row p-0 m-0">
              <div className="col-md-6 p-0 m-0">
                <div
                  className="contact-three__content  wow fadeInUp"
                  data-wow-delay="300ms"
                >
                  <div
                    className="sec-title  text-start wow fadeInUp"
                    data-wow-duration="300ms"
                  >
                    <h6 className="sec-title__tagline">
                      <i className="icon-left-arrow sec-title__img"></i>
                      Get in Touch
                      <i className="icon-right-arrow sec-title__img"></i>
                    </h6>

                    <h3 className="sec-title__title">
                      Contact us for more information
                    </h3>
                  </div>
                  <form
                    className="contact-three__form contact-form-validated form-one wow fadeInUp"
                    data-wow-duration="1500ms"
                    action="https://pixydrops.com/drivschol/inc/sendemail.php"
                  >
                    <div className="form-one__group">
                      <div className="form-one__control">
                        <input
                          type="text"
                          name="name"
                          placeholder="Your name"
                        />
                      </div>

                      <div className="form-one__control">
                        <input
                          type="email"
                          name="email"
                          placeholder="Email address"
                        />
                      </div>

                      <div className="form-one__control">
                        <input type="text" name="phone" placeholder="Phone" />
                      </div>

                      <div className="form-one__control">
                        <input
                          type="text"
                          name="subject"
                          placeholder="Subject"
                        />
                      </div>

                      <div className="form-one__control form-one__control__full">
                        <textarea
                          name="message"
                          placeholder="Write a message"
                        ></textarea>
                      </div>

                      <div className="form-one__control">
                        <button
                          type="submit"
                          className="drivschol-btn drivschol-btn--base2"
                        >
                          <span>Get in Touch</span>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-md-6 p-0 m-0">
                <div
                  className="contact-three__location wow fadeInUp"
                  data-wow-delay="300ms"
                >
                  <div className="contact-three__location__content">
                    <div className="contact-three__location__content__icon">
                      <svg
                        viewBox="0 0 55 63"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M46.3407 7.80439C41.3081 2.77164 34.6167 0 27.4994 0C20.3821 0 13.6905 2.77164 8.6579 7.80439C3.62515 12.8373 0.853516 19.5286 0.853516 26.6457C0.853516 41.0437 14.4672 53.0193 21.781 59.4529C22.7974 60.347 23.6751 61.1191 24.3743 61.7722C25.2504 62.5906 26.375 62.9999 27.4992 62.9999C28.6238 62.9999 29.7481 62.5906 30.6243 61.7722C31.3236 61.119 32.2013 60.347 33.2176 59.4529C40.5314 53.0192 54.1451 41.0437 54.1451 26.6457C54.145 19.5286 51.3735 12.8373 46.3407 7.80439ZM30.7801 56.6821C29.7414 57.5958 28.8445 58.3849 28.105 59.0755C27.7653 59.3926 27.2332 59.3928 26.8934 59.0755C26.154 58.3846 25.257 57.5957 24.2183 56.682C17.3424 50.6336 4.5437 39.375 4.5437 26.6459C4.5437 13.9882 14.8414 3.69055 27.4991 3.69055C40.1567 3.69055 50.4544 13.9882 50.4544 26.6459C50.4546 39.375 37.6559 50.6336 30.7801 56.6821Z"
                          fill="#393b6d"
                        />
                        <path
                          d="M27.5023 13.8926C21.0274 13.8926 15.7598 19.1601 15.7598 25.635C15.7598 32.1098 21.0274 37.3773 27.5023 37.3773C33.9771 37.3773 39.2447 32.1098 39.2447 25.635C39.2447 19.1601 33.9771 13.8926 27.5023 13.8926ZM27.5023 33.6868C23.0624 33.6868 19.4502 30.0746 19.4502 25.6348C19.4502 21.1951 23.0624 17.5829 27.5023 17.5829C31.9422 17.5829 35.5542 21.1951 35.5542 25.6348C35.5542 30.0746 31.9422 33.6868 27.5023 33.6868Z"
                          fill="#393b6d"
                        />
                      </svg>
                    </div>
                    <h5 className="contact-three__location__content__text">
                      Office address: 298 Grays Rd #1, Hamilton, ON L8E 1V5
                    </h5>
                    <div className="contact-three__location__content__line">
                      <svg
                        width="468"
                        height="40"
                        viewBox="0 0 468 40"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect width="468" height="14" fill="#DA0D0E" />
                        <rect
                          x="120"
                          y="26"
                          width="348"
                          height="14"
                          fill="#DA0D0E"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="contact-three__location__map">
                    <div className="google-map google-map__contact">
                      <iframe
                        title="template google map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2907.685894780912!2d-79.672159!3d43.2160771!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882ca3987c640fdf%3A0x2ce2670262b695f0!2s981%20Barton%20St%2C%20Hamilton%2C%20ON%20L8E%205H4%2C%20Canada!5e0!3m2!1sen!2s!4v1714172993215!5m2!1sen!2s"
                        allowfullscreen
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <br />
      <section className="cta-two ">
        <div
          className="cta-two__bg"
          style={{ backgroundImage: "url(assets/images/resources/cta.svg)" }}
        >
          {" "}
        </div>

        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <div
                className="cta-two__thumb  wow fadeInUp"
                data-wow-delay="300ms"
              >
                <img src="assets/images/resources/cta-car-2-1.png" />
              </div>
            </div>
            <div className="col-lg-5">
              <div
                className="cta-two__content  wow fadeInUp"
                data-wow-delay="500ms"
              >
                <h3 className="cta-two__title">
                  Start your driving journey today
                </h3>

                <a
                  href="contact.html"
                  className="drivschol-btn cta-two__btn drivschol-btn--base2"
                >
                  <span>Enroll Now</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="cta-two__shape-line">
          <img src="assets/images/shapes/line-cta.png" />
        </div>
      </section>
    </>
  );
};
export default Home;
