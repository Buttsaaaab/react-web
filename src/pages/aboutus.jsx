import React, { useEffect, useState, useTransition } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
export default function Aboutus() {
  useEffect(() => {
    AOS.init();
  }, []);
  // Counter
  const [CounterOn, SetCounterOn] = useState(false);
  const [selected, setselected] = useState(null);
  const toggleAccordion = (i) => {
    if (selected == i) {
      return setselected(null);
    }
    setselected(i);
  };
  const accordianData = [
    {
      title: "Excellent Income Potential?",
      content:
        "Entry-level drivers can expect competitive salaries, with the potential to earn significantly more as experience grows. Some drivers can reach annual incomes exceeding $100,000!",
    },
    {
      title: "High Demand?",
      content:
        " The trucking industry is experiencing a significant driver shortage, creating ample job opportunities for qualified individuals.",
    },
    {
      title: "Career Advancement Opportunities?",
      content:
        "Many drivers progress into management positions within trucking companies, allowing for career growth and leadership opportunities.",
    },
    {
      title: "Job Security?",
      content:
        "The trucking industry is vital to the Canadian economy, with a constant need to transport goods across the country. This translates to stable employment opportunities.",
    },
    {
      title: "Diverse Trucking Sectors?",
      content:
        "Explore various trucking sectors that suit your preferences, from long-haul routes across North America to local delivery schedules within your community.",
    },
  ];
  return (
    <>
      <section className="why-choose-two my-4">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="why-choose-two__image">
                <img src="assets\images\gallery\truck4.jpg" alt="true" />
              </div>
            </div>
            <div className="col-lg-7">
              <div className="why-choose-two__content">
                <div
                  className="sec-title   wow fadeInUp"
                  data-wow-delay="300ms"
                >
                  <h3 className="sec-title__title">About Us</h3>
                </div>

                <p
                  className="why-choose-two__text wow fadeInUp"
                  data-wow-delay="500ms"
                >
                  Truck Training Academy of Stoney Creek has been a trusted
                  leader in commercial driver training for over [25] years. We
                  are dedicated to providing aspiring drivers with the highest
                  quality education and practical experience needed to excel in
                  the transportation industry. Our experienced instructors and
                  modern training facilities ensure you receive a well-rounded
                  learning experience that prepares you to confidently navigate
                  the road and meet the demands of top Canadian carriers.
                </p>

                <Link
                  to="/home"
                  className="drivschol-btn drivschol-btn--black wow fadeInUp my-4"
                  data-wow-delay="500ms"
                >
                  <span>Get to Know Us </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="team-one">
        <div className="container">
          <div className="sec-title   wow fadeInUp" data-wow-delay="300ms">
            <h3 className="sec-title__title">
              Meet the Visionary Behind Your Success: <br />
              Emir, Co-Founder of TTA
            </h3>
          </div>
          <div
            className=""
            data-owl-options='{
        "items": 1,
        "margin": 0,
        "loop": true,
        "smartSpeed": 700,
        "nav": true,
        "navText": ["<span className=\"fa fa-angle-left\"></span>","<span className=\"fa fa-angle-right\"></span>"],
        "dots": false,
        "autoplay": false,
        "responsive": {
            "0": {
                "items": 1
            },
            "576": {
                "items": 1,
                "margin": 30
            },
            "992": {
                "items": 2,
                "margin": 30
            },
            "1200": {
                "items": 3,
                "margin": 30
            }
        }
    }'
          >
            <div className="item">
              <div
                className="team-card wow fadeInUp"
                data-wow-duration="1500ms"
                data-wow-delay="000ms"
              >
                <div className="team-card__image">
                  <img src="assets\images\emir.jpg" alt="Alvert Tine" />
                </div>
                <div className="team-card__content">
                  <div className="team-card__hover">
                    <div className="team-card__content-share-icon">
                      <i className="fa fa-share-alt"></i>
                    </div>

                    <div className="team-card__social">
                      <div className="team-card__social__list">
                        <a href="https://facebook.com/">
                          <i
                            className="fab fa-facebook-f"
                            aria-hidden="true"
                          ></i>
                        </a>
                        <a href="https://twitter.com/">
                          <i className="icon-twitter" aria-hidden="true"></i>
                        </a>
                        <a href="https://pinterest.com/">
                          <i className="icon-pinterest" aria-hidden="true"></i>
                        </a>
                        <a href="https://instagram.com/">
                          <i className="icon-Instagram" aria-hidden="true"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <h3 className="team-card__title">
                    <a href="team-details.html">Emir</a>
                  </h3>

                  <h6 className="team-card__designation">
                    <span className="fw-bolder">Emir</span>, a certified Motor
                    Vehicle Fleet Driver Trainer with a remarkable
                    <span className="fw-bolder"> 30 years of experience </span>
                    both on the road and in the classroom, is a cornerstone of
                    Truck Training Academy of Stoney Creek. His expertise
                    extends far beyond the basics of driving. Emir is:
                  </h6>

                  <div className="team-card__content-shape">
                    <svg
                      width="60"
                      height="90"
                      viewBox="0 0 60 90"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M63 0L0 90H63V0Z" fill="" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="team-card__content_down">
            <div className="team-card__hover"></div>
            <h3 className="team-card__title">
              <a href="team-details.html"></a>
            </h3>

            <ul className="team-card__designation">
              <li>
                {" "}
                <span className="fw-bolder">
                  • In Vehicle Fleet Driver Trainer{" "}
                </span>
                Licensed to Deliver
                <span className="fw-bolder"> Tractor Trailer Melt (MELT) </span>
                and
                <span className="fw-bolder"> A-Z Programs </span>, ensuring you
                will receive the most up-to-date training required for operating
                heavy machinery/ commercial vehicles.{" "}
              </li>
              <li>
                <span className="fw-bolder">
                  • An Air Brake Z Endorsement / Adjustment Instructor –
                  delivering the course as an OSL Signing Authority,{" "}
                </span>
                a crucial qualification for handling complex tractor-trailer
                braking systems.
              </li>
              <li>
                <span className="fw-bolder">
                  • A Certified P.D.I.C and S.B.D.I.C. Instructor delivering a
                  Professional Driver Improvement Course / School Bus Driver
                  Improvement Course,{" "}
                </span>
                demonstrating his commitment to driver safety and education at
                all levels.
              </li>
              <li>
                {" "}
                <span className="fw-bolder">
                  • Corporate Trainer and Driver Assessor.{" "}
                </span>
                Emir's unwavering dedication is driven by a powerful mission:
                <i>
                  "It is my personal goal to ensure that all young and
                  experienced drivers achieve the best of knowledge and driving
                  skills to make the roads safer."
                </i>
              </li>
            </ul>
            <h5 className="text-center" style={{ paddingTop: "50px" }}>
              "Under Emir's guidance, you'll gain the confidence and competence
              to excel in the trucking industry, all while contributing to a
              safer driving environment for everyone."
            </h5>

            <div
              className="team-card__content-shape"
              style={{ paddingTop: "100px" }}
            >
              <svg
                width="60"
                height="90"
                viewBox="0 0 60 90"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M63 0L0 90H63V0Z" fill="" />
              </svg>
            </div>
          </div>
        </div>
      </section>
      <section className="work-process-one">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="h-full" data-wow-delay="300ms">
                <img
                  src="assets\images\gallery\goals.jpg"
                  alt="work process man image"
                  className=""
                  style={{
                    maxWidth: "85%",
                    height: "100%",
                    marginBottom: "175px",
                    objectFit: "contain",
                  }}
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="work-process-one__inner">
                <div
                  className="sec-title  text-start wow fadeInUp"
                  data-wow-duration="300ms"
                >
                  <h6 className="sec-title__tagline">
                    <i className="icon-left-arrow sec-title__img"></i>
                    Our Goals
                    <i className="icon-right-arrow sec-title__img"></i>
                  </h6>

                  <h3 className="sec-title__title">Our Goals</h3>
                  <p>
                    At Truck Training Academy, we are passionate about
                    connecting individuals with fulfilling careers in the
                    trucking industry. Our mission is twofold:
                  </p>
                </div>
                <div>
                  <div className="work-process-one__inner__content">
                    <div
                      className="work-process-one__inner__content__item  wow fadeInUp"
                      data-wow-delay="300ms"
                    >
                      <div className="work-process-one__inner__content__item__step">
                        <p className="work-process-one__inner__content__item__step__text"></p>

                        <span
                          style={{ color: "black" }}
                          className="work-process-one__inner__content__item__step__number"
                        >
                          01
                        </span>
                      </div>
                      <div className="work-process-one__inner__content__item__info">
                        <h4 className="work-process-one__inner__content__item__info__title">
                          To empower job seekers
                        </h4>

                        <p className="work-process-one__inner__content__item__info__text">
                          {" "}
                          We provide professional training programs that equip
                          students with the necessary skills and knowledge to
                          obtain their commercial driver's license and launch
                          successful careers in trucking.{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="work-process-one__inner__content">
                    <div
                      className="work-process-one__inner__content__item  wow fadeInUp"
                      data-wow-delay="300ms"
                    >
                      <div className="work-process-one__inner__content__item__step">
                        <p className="work-process-one__inner__content__item__step__text"></p>

                        <span
                          style={{ color: "black" }}
                          className="work-process-one__inner__content__item__step__number"
                        >
                          02
                        </span>
                      </div>
                      <div className="work-process-one__inner__content__item__info">
                        <h4 className="work-process-one__inner__content__item__info__title">
                          To cultivate safe <br /> and efficient drivers
                        </h4>

                        <p className="work-process-one__inner__content__item__info__text">
                          {" "}
                          We emphasize safe, legal, and efficient driving
                          practices that meet the high standards set by leading
                          Canadian carriers. Our graduates are prepared to
                          confidently navigate the roads and contribute
                          positively to the transportation industry.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="membership-two">
        <div className="container">
          <div className={`sec-title ${"@extraClassName"}`}>
            <h6 className="sec-title__tagline">
              <i className="icon-left-arrow sec-title__img"></i>
              What TTA Offers
              <i className="icon-right-arrow sec-title__img"></i>
            </h6>

            <p>
              Truck Training Academy is committed to providing our students with
              a supportive and enriching learning environment. Here's what sets
              us apart:
            </p>
          </div>
          <div className="row gutter-y-30">
            <div
              className="col-md-6 col-lg-6 wow fadeInUp"
              data-wow-duration="1500ms"
              data-wow-delay="000ms"
            >
              <div
                data-aos="fade-up"
                className="membership-two-card"
                style={{
                  backgroundImage:
                    "url(assets/images/shapes/membership-s-2-1.html)",
                  padding: "3.2rem",
                }}
              >
                <div className="membership-two-card__icon">
                  <i className="icon-herbal"></i>
                </div>
                <div className="membership-two-card__content">
                  <h3 className="membership-two-card__title">
                    <a href="service-d-salt.html"> Affordable Training Rates</a>
                  </h3>
                  <div className="membership-two-card__text">
                    We offer competitive tuition fees that make our programs
                    accessible to aspiring drivers.
                  </div>
                </div>
              </div>
            </div>
            <div
              data-aos="fade-up"
              className="col-md-6 col-lg-6 wow "
              data-wow-duration="1500ms"
              data-wow-delay="100ms"
            >
              <div
                className="membership-two-card"
                style={{
                  backgroundImage:
                    "url(assets/images/shapes/membership-s-2-1.html)",
                }}
              >
                <div className="membership-two-card__icon">
                  <i className="icon-aromatherapy"></i>
                </div>
                <div className="membership-two-card__content">
                  <h3 className="membership-two-card__title">
                    <a href="service-d-aroma.html">
                      {" "}
                      Flexible Scheduling Options
                    </a>
                  </h3>
                  <div className="membership-two-card__text">
                    We understand that busy schedules require flexibility. TTA
                    offers a variety of class schedules, including evenings and
                    weekends, to accommodate your needs.
                  </div>
                </div>
              </div>
            </div>
            <div
              data-aos="fade-up"
              className="col-md-6 col-lg-6 wow fadeInUp"
              data-wow-duration="1500ms"
              data-wow-delay="200ms"
            >
              <div
                className="membership-two-card"
                style={{
                  backgroundImage:
                    "url(assets/images/shapes/membership-s-2-1.html)",
                }}
              >
                <div className="membership-two-card__icon">
                  <i className="icon-fire-control"></i>
                </div>
                <div className="membership-two-card__content">
                  <h3 className="membership-two-card__title">
                    <a href="service-d-reflexology.html">
                      Experienced Instructors
                    </a>
                  </h3>
                  <div className="membership-two-card__text">
                    Our instructors are seasoned professionals with extensive
                    experience in the trucking industry. They are passionate
                    about sharing their knowledge and expertise to help students
                    succeed.
                  </div>
                </div>
              </div>
            </div>
            <div
              data-aos="fade-up"
              className="col-md-6 col-lg-6 wow fadeInUp"
              data-wow-duration="1500ms"
              data-wow-delay="300ms"
            >
              <div
                data-aos="fade-up"
                className="membership-two-card"
                style={{
                  backgroundImage:
                    "url(assets/images/shapes/membership-s-2-1.html)",
                }}
              >
                <div className="membership-two-card__icon">
                  <i className="icon-stones-1"></i>
                </div>
                <div className="membership-two-card__content">
                  <h3 className="membership-two-card__title">
                    <a href="service-d-thermo-stone.html">
                      {" "}
                      Modern Training Equipment
                    </a>
                  </h3>
                  <div className="membership-two-card__text">
                    We utilize state-of-the-art training equipment, including
                    trucks and simulators ( do not have it erase it), to provide
                    students with realistic driving experiences.
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-6 wow fadeInUp"
              data-wow-duration="1500ms"
              data-wow-delay="400ms"
            >
              <div
                data-aos="fade-up"
                className="membership-two-card"
                style={{
                  backgroundImage:
                    "url(assets/images/shapes/membership-s-2-1.html)",
                }}
              >
                <div className="membership-two-card__icon">
                  <i className="icon-spa"></i>
                </div>
                <div className="membership-two-card__content">
                  <h3 className="membership-two-card__title">
                    <a href="service-d-hydro-therapy.html">
                      {" "}
                      Personalized Instruction
                    </a>
                  </h3>
                  <div className="membership-two-card__text">
                    Our instructors are committed to providing personalized
                    attention to each student, ensuring they grasp the concepts
                    and develop the necessary skills. All driver training hours
                    are done One-on-One.
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-6 wow fadeInUp"
              data-wow-duration="1500ms"
              data-wow-delay="500ms"
            >
              <div
                data-aos="fade-up"
                className="membership-two-card"
                style={{
                  backgroundImage:
                    "url(assets/images/shapes/membership-s-2-1.html)",
                }}
              >
                <div className="membership-two-card__icon">
                  <i className="icon-face-mask"></i>
                </div>
                <div className="membership-two-card__content">
                  <h3 className="membership-two-card__title">
                    <a href="service-d-salt.html">
                      Tax-Deductible Course Tuition
                    </a>
                  </h3>
                  <div className="membership-two-card__text">
                    In many cases, the cost of your commercial driver training
                    program may be tax-deductible. An official T2202 Tuition and
                    Enrolment Certificates are provided. Consult with a tax
                    professional for details.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="blog-one blog-one--page">
        <div className="container">
          <div className="sec-title  @@extraClassName">
            <h3 className="sec-title__title text-center ">
              Specialty Courses and Credentials
            </h3>
            <p className="text-center ">
              Truck Training Academy of Stoney Creek is a proud member of the
              Truck Training Schools Association of Ontario and is approved to
              deliver a variety of specialty courses including
            </p>
          </div>
          <div className="row gutter-y-30">
            <div className="col-md-6 col-lg-4">
              <div
                className="blog-card wow fadeInUp"
                data-wow-duration="1500ms"
                data-wow-delay="00ms"
              >
                <div className="blog-card__image">
                  <div className="blog-card__image-item">
                    <img
                      src="assets/images/blog/blog-1-1.png"
                      alt="5 Ways That Can Develop Your Drving Skill"
                    />
                  </div>
                  <a
                    href="blog-details-right.html"
                    className="blog-card__image-link"
                  >
                    <span className="sr-only">
                      5 Ways That Can Develop Your Drving Skill
                    </span>
                  </a>
                </div>

                <div className="blog-card__content">
                  {/* <a href="blog-details-right.html" className="blog-card__meta">
                    <div className="blog-card__content-thumb">
                      <div className="author-img">
                        <img
                          src="assets/images/blog/blog-author-1-1.png"
                          alt="true"
                        />
                      </div>
                    </div>
                    <div className="blog-card__content-author">
                      <h6 className="author-name">Darrell Steward</h6>
                      <span className="author-title">Course</span>
                    </div>
                  </a> */}
                  <div>
                    <h5>(Ontario Safety League)</h5>
                  </div>
                  <h3 className="blog-card__title">
                    <a href="blog-details-right.html">
                      Air Brake Endorsement/Adjustment Course
                    </a>
                  </h3>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div
                className="blog-card wow fadeInUp"
                data-wow-duration="1500ms"
                data-wow-delay="00ms"
              >
                <div className="blog-card__image">
                  <div className="blog-card__image-item">
                    <img
                      src="assets/images/blog/blog-1-1.png"
                      alt="5 Ways That Can Develop Your Drving Skill"
                    />
                  </div>
                  <a
                    href="blog-details-right.html"
                    className="blog-card__image-link"
                  >
                    <span className="sr-only">
                      5 Ways That Can Develop Your Drving Skill
                    </span>
                  </a>
                </div>

                <div className="blog-card__content">
                  {/* <a href="blog-details-right.html" className="blog-card__meta">
                    <div className="blog-card__content-thumb">
                      <div className="author-img">
                        <img
                          src="assets/images/blog/blog-author-1-1.png"
                          alt="true"
                        />
                      </div>
                    </div>
                    <div className="blog-card__content-author">
                      <h6 className="author-name">Darrell Steward</h6>
                      <span className="author-title">Course</span>
                    </div>
                  </a> */}
                  <div>
                    <h5>(PDIC) (Canadian Safety Council)</h5>
                  </div>
                  <h3 className="blog-card__title">
                    <a href="blog-details-right.html">
                      Professional Driver Improvement Course
                    </a>
                  </h3>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div
                className="blog-card wow fadeInUp"
                data-wow-duration="1500ms"
                data-wow-delay="00ms"
              >
                <div className="blog-card__image">
                  <div className="blog-card__image-item">
                    <img
                      src="assets/images/blog/blog-1-1.png"
                      alt="5 Ways That Can Develop Your Drving Skill"
                    />
                  </div>
                  <a
                    href="blog-details-right.html"
                    className="blog-card__image-link"
                  >
                    <span className="sr-only">
                      5 Ways That Can Develop Your Drving Skill
                    </span>
                  </a>
                </div>

                <div className="blog-card__content">
                  {/* <a href="blog-details-right.html" className="blog-card__meta">
                    <div className="blog-card__content-thumb">
                      <div className="author-img">
                        <img
                          src="assets/images/blog/blog-author-1-1.png"
                          alt="true"
                        />
                      </div>
                    </div>
                    <div className="blog-card__content-author">
                      <h6 className="author-name">Darrell Steward</h6>
                      <span className="author-title">Course</span>
                    </div>
                  </a> */}
                  <div>
                    <h5>(Covering a range of classifications)</h5>
                  </div>
                  <h3 className="blog-card__title">
                    <a href="blog-details-right.html">
                      Dangerous Goods Training TDG
                    </a>
                  </h3>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div
                className="blog-card wow fadeInUp"
                data-wow-duration="1500ms"
                data-wow-delay="00ms"
              >
                <div className="blog-card__image">
                  <div className="blog-card__image-item">
                    <img
                      src="assets/images/blog/blog-1-1.png"
                      alt="5 Ways That Can Develop Your Drving Skill"
                    />
                  </div>
                  <a
                    href="blog-details-right.html"
                    className="blog-card__image-link"
                  >
                    <span className="sr-only">
                      5 Ways That Can Develop Your Drving Skill
                    </span>
                  </a>
                </div>

                <div className="blog-card__content">
                  {/* <a href="blog-details-right.html" className="blog-card__meta">
                    <div className="blog-card__content-thumb">
                      <div className="author-img">
                        <img
                          src="assets/images/blog/blog-author-1-1.png"
                          alt="true"
                        />
                      </div>
                    </div>
                    <div className="blog-card__content-author">
                      <h6 className="author-name">Darrell Steward</h6>
                      <span className="author-title">Course</span>
                    </div>
                  </a> */}
                  <div>
                    <h5>(Tailored programs for companies)</h5>
                  </div>
                  <h3 className="blog-card__title">
                    <a href="blog-details-right.html">
                      Corporate Training Solutions
                    </a>
                  </h3>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div
                className="blog-card wow fadeInUp"
                data-wow-duration="1500ms"
                data-wow-delay="00ms"
              >
                <div className="blog-card__image">
                  <div className="blog-card__image-item">
                    <img
                      src="assets/images/blog/blog-1-1.png"
                      alt="5 Ways That Can Develop Your Drving Skill"
                    />
                  </div>
                  <a
                    href="blog-details-right.html"
                    className="blog-card__image-link"
                  >
                    <span className="sr-only">
                      5 Ways That Can Develop Your Drving Skill
                    </span>
                  </a>
                </div>

                <div className="blog-card__content">
                  {/* <a href="blog-details-right.html" className="blog-card__meta">
                    <div className="blog-card__content-thumb">
                      <div className="author-img">
                        <img
                          src="assets/images/blog/blog-author-1-1.png"
                          alt="true"
                        />
                      </div>
                    </div>
                    <div className="blog-card__content-author">
                      <h6 className="author-name">Darrell Steward</h6>
                      <span className="author-title">Course</span>
                    </div>
                  </a> */}
                  <h3 className="blog-card__title">
                    <a href="blog-details-right.html">
                      Company Driver Evaluations and Testing
                    </a>
                  </h3>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div
                className="blog-card wow fadeInUp"
                data-wow-duration="1500ms"
                data-wow-delay="00ms"
              >
                <div className="blog-card__image">
                  <div className="blog-card__image-item">
                    <img
                      src="assets/images/blog/blog-1-1.png"
                      alt="5 Ways That Can Develop Your Drving Skill"
                    />
                  </div>
                  <a
                    href="blog-details-right.html"
                    className="blog-card__image-link"
                  >
                    <span className="sr-only">
                      5 Ways That Can Develop Your Drving Skill
                    </span>
                  </a>
                </div>

                <div className="blog-card__content">
                  {/* <a href="blog-details-right.html" className="blog-card__meta">
                    <div className="blog-card__content-thumb">
                      <div className="author-img">
                        <img
                          src="assets/images/blog/blog-author-1-1.png"
                          alt="true"
                        />
                      </div>
                    </div>
                    <div className="blog-card__content-author">
                      <h6 className="author-name">Darrell Steward</h6>
                      <span className="author-title">Course</span>
                    </div>
                  </a> */}
                  <h3 className="blog-card__title">
                    <a href="blog-details-right.html">
                      Certified Fleet Driver Training
                    </a>
                  </h3>
                </div>
              </div>
            </div>

            <h5 className="text-center">
              "These additional qualifications enhance your resume and
              demonstrate your commitment to safety and professional
              development, making you a more attractive candidate to potential
              employers."
            </h5>
          </div>
        </div>
      </section>

      <section class="cta-one">
        <div class="cta-one__wrapper">
          <div class="container">
            <div class="row align-items-center">
              <div class="col-md-7">
                <div
                  class="cta-one__content wow fadeInUp"
                  data-wow-delay="200ms"
                >
                  <h3 class="cta-one__title">
                    Book Your First Driving Lesson Today
                  </h3>
                  <a href="contact.html" class="drivschol-btn">
                    <span>Book Now</span>
                  </a>
                </div>
              </div>
              <div class="col-md-5">
                <div class="cta-one__thumb">
                  <div
                    class="cta-one__thumb__one wow fadeInUp"
                    data-wow-delay="300ms"
                  >
                    <div class="cta-one__thumb__one__thumb">
                      <img
                        src="assets/images/resources/car-2-1.png"
                        alt="drivschol"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="cta-one__element">
            <img src="assets/images/backgrounds/cta-bg-1-2.png" alt="true" />
          </div>
        </div>
      </section>
    </>
  );
}
