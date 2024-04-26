import Aos from "aos";
import React, { useEffect, useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import "aos/dist/aos.css";
export default function Gettingstarted() {
  useEffect(() => {
    Aos.init();
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

  const licenceRequirements = [
    {
      feature: "License Requirement - (1)",
      title: "Age",
      content: "18 years old for Canada, 21 years old for the United States (if you plan to operate across the border)."
    },
    {
      feature: "License Requirement - (2)",
      title: "Education",
      content: "Ability to read, speak, and understand English sufficiently to converse with the public and comprehend traffic signs and signals. A Grade 10 education (or equivalent) is recommended."
    },
    {
      feature: "License Requirement - (3)",
      title: "Background Check",
      content: "Individuals with a criminal record may require a Canadian Pardon or a U.S. Waiver for cross-border operations."
    },
    {
      feature: "License Requirement - (4)",
      title: "Medical Fitness",
      content: "Pass a pre-employment medical exam as outlined by federal regulations and meet Ontario's medical standards for commercial drivers."
    },
    {
      feature: "License Requirement - (5)",
      title: "Driving History",
      content: "Possess a valid Ontario Class “A” driver's license with a clean driving record."
    },
    {
      feature: "License Requirement - (6)",
      title: "U.S. Border Crossing",
      content: "Must have a valid passport (if applicable) and meet U.S. visa requirements for non-Canadian citizens."
    },
    {
      feature: "License Requirement - (7)",
      title: "Positive Attitude",
      content: "A willingness to learn, a strong work ethic, and the ability to thrive in a fast-paced environment are essential qualities for success in the trucking industry."
    }
  ]

  const admissionRequirements = [
    {
      feature: "Admission Requirement - (1)",
      title: "Minimum Age",
      content: "18 years old"
    },
    {
      feature: "Admission Requirement - (2)",
      title: "Education",
      content: "Ontario Secondary School Diploma (or equivalent) or Successful completion of the Wonderlic Test"
    },
    {
      feature: "Admission Requirement - (3)",
      title: "Driving Licence",
      content: "Valid Class G driver's license or higher"
    },
    {
      feature: "Admission Requirement - (4)",
      title: "MTO Medical Standards",
      content: "Meet MTO medical and vision standards"
    },
    {
      feature: "Admission Requirement - (5)",
      title: "Class “A” Written Knowledge Test",
      content: "Successful completion of the Class “A” written knowledge test"
    }
  ]

  const additionalCosts = [
    {
      feature: `Cost - (1)`,
      content: "Driver's Abstract ($12)"
    },
    {
      feature: `Cost - (2)`,
      content: "MTO Medical Exam ($120-$150)"
    },
    {
      feature: `Cost - (3)`,
      content: "Industry Knowledge Test ($100)"
    },
    {
      feature: `Cost - (4)`,
      content: "Steel-toed work boots ($150)"
    },
    {
      feature: `Cost - (5)`,
      content: "Ministry of Transportation Written and Road Tests ($120)"
    },
    {
      feature: `Cost - (6)`,
      content: "Expendable supplies (gloves, safety vest, safety glasses, etc.) provided by the school."
    }
  ]


  return (
    <>
      <section className="experience-one my-6rem">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="experience-one__left">
                <div
                  className="sec-title  text-start wow fadeInUp"
                  data-wow-duration="300ms"
                >
                  <h3 className="sec-title__title">
                    Why Become a Truck Driver?
                  </h3>
                  <p>
                    The trucking industry offers a multitude of advantages for
                    those seeking a stable and rewarding career. Here are just a
                    few reasons to consider becoming a commercial truck driver
                  </p>
                </div>
                <div className="experience-one__left__content  count-box">
                  <img style={{ objectFit: "cover", width: "100%" }}
                    src="assets\images\course\course-d-1-1.jpg"
                    alt="experience-one__left__content__item__icon"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="faq-page__accordion drivschol-accrodion  wow fadeInUp"
                data-wow-delay="500ms"
                data-grp-name="drivschol-accrodion"
              >
                {accordianData.map((item, index) => (
                  <div
                    className={`accrodion ${selected === index ? "active" : ""
                      }  p-3`}
                  >
                    <div className="accrodion-title">
                      <h4 className="accrodion-title__text">
                        {item.title}
                        <span
                          className="accrodion-title__icon"
                          onClick={() => toggleAccordion(index)}
                        ></span>
                      </h4>
                    </div>
                    <div
                      className={`accordion-content ${selected === index ? "" : "d-none"
                        }`}
                    >
                      <div className="inner">
                        <p className="accrodion-content__text">
                          {item.content}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="m-5 pt-5">
          <h1 style={{ fontWeight: "600", color: "black" }} className="m-3">
            License Requirements
          </h1>
          <p className="ps-3" style={{ fontSize: "20px" }}>
            <b>
              To operate a commercial truck in Canada, individuals must meet the
              following requirements:
            </b>
          </p>
          <div className="pt-3">
            {
              licenceRequirements.map((requirement, index) => (
                <div key={requirement.title} className="card m-4">
                  <h5 className="card-header">
                    {requirement.feature}
                  </h5>
                  <div className="card-body">
                    <h5 className="card-title">
                      {requirement.title}
                    </h5>
                    <p className="card-text">
                      {requirement.content}
                    </p>
                  </div>
                </div>
              ))
            }
          </div>
        </div>

        <div className="m-5 pt-5">
          <h1 style={{ fontWeight: "600", color: "black" }} className="m-3">
            Getting Started
          </h1>
          <p className="ps-3" style={{ fontSize: "20px" }}>
            <b>
              Ready to embark on your journey as a commercial truck driver?
              Here's what you need to do to get started at Truck Training
              Academy:
            </b>
          </p>
          <div className="pt-3">
            <h4 style={{ fontWeight: "600", color: "black" }} className="m-3">
              Admission Requirements:
            </h4>
            {
              admissionRequirements.map((requirement, index) => (
                <div key={requirement.title} className="card mx-3 my-4">
                  <h5 className="card-header">
                    {requirement.feature}
                  </h5>
                  <div className="card-body">
                    <h5 className="card-title">
                      {requirement.title}
                    </h5>
                    <p className="card-text">
                      {requirement.content}
                    </p>
                  </div>
                </div>
              ))
            }
          </div>
          <div className="pt-3">
            <h4 style={{ fontWeight: "600", color: "black" }} className="mx-3 my-4">
              Additional Costs:
            </h4>
            {
              additionalCosts.map((cost, index) => (
                <div key={cost.feature} className="card m-3">
                  <h5 className="card-header">
                    {cost.feature}
                  </h5>
                  <p className="card-text p-3">
                    {cost.content}
                  </p>
                </div>
              ))
            }
          </div>
        </div>

        <div className="m-5 pt-5">
          <p className="ps-3" style={{ fontSize: "20px" }}>
            <b style={{ color: "black" }}>Medical Certificate</b> – must be
            presented to the Ministry before student will be eligible to
            complete any testing.
          </p>
          <p className="ps-3" style={{ fontSize: "20px" }}>
            <b style={{ color: "black" }}>"A"</b> – Beginner's must be completed
            prior to beginning in-truck training.
          </p>
        </div>

        <div className="m-5">
          <a href="http://www.trucktrainingacademy.ca/driver-licence.php">
            <img src="assets/images/licenses.png" alt="" />
          </a>
        </div>

        <div className="m-5">
          <p className="ps-3" style={{ fontSize: "20px" }}>
            <b>
              We recommend scheduling a pre-enrollment assessment to discuss
              your goals and determine if truck driving is the right career path
              for you. Financial aid options may also be available to assist
              with tuition costs.{" "}
            </b>
          </p>
        </div>

        <div className="m-5 pt-5">
          <h1 style={{ fontWeight: "600", color: "black" }} className="m-3">
            Steps to Obtaining a Commercial Driver's License
          </h1>
          <p className="ps-3" style={{ fontSize: "20px" }}>
            <b>
              Obtaining your commercial driver's license involves several steps.
              Truck Training Academy of Stoney Creek will guide you through the
              process, but here's a general overview:
            </b>
          </p>
          <div className="pt-3">
            <p className="ps-3" style={{ fontSize: "20px" }}>
              <b style={{ color: "black" }}>
                Visit a DriveTest Centre or designated registered school:
              </b>{" "}
              Obtain required materials, including the medical examination form
              and <a href="https://drivetest.ca/tests/official-drivers-handbooks/" style={{ color: "green" }}>driver's handbooks</a> you may require. You can also access a
              driver's handbooks online <a href="https://www.ontario.ca/page/driving-and-roads#Airbrake" style={{ color: "green" }}>http://www.mto.gov.on.ca/english/publications/handbooks.shtml#Airbrake</a> driver's handbooks.
            </p>
            <p className="ps-3" style={{ fontSize: "20px" }}>
              <b style={{ color: "black" }}>
                Study for the written knowledge tests:
              </b>{" "}
              TTA offers Class A & D practice tests to help you prepare. "A" –
              Beginner's must be completed prior to beginning in-truck training.
              Class A & D Practice Test link <a href="https://www.drivingtest.ca/ontario-truck-driver-licence-practice-test-class-a-d/" style={{ color: "#5155de" }}>http://www.drivingtest.ca/ontario-truck-driver-licence-practice-test-class-a-d/</a>
            </p>
            <p className="ps-3" style={{ fontSize: "20px" }}>
              <b style={{ color: "black" }}>Complete a medical examination:</b>{" "}
              A certified physician will conduct the exam and fill out the
              medical report form. Medical Certificate – must be presented to
              the Ministry before student will be eligible to complete any
              testing.
            </p>
            <p className="ps-3" style={{ fontSize: "20px" }}>
              <b style={{ color: "black" }}>
                Apply for a commercial driver's license:
              </b>{" "}
              Visit a DriveTest Centre and provide necessary identification and
              documentation
            </p>
            <p className="ps-3" style={{ fontSize: "20px" }}>
              <b style={{ color: "black" }}>Pass a vision test:</b> This will be
              administered at the DriveTest Centre.
            </p>
            <p className="ps-3" style={{ fontSize: "20px" }}>
              <b style={{ color: "black" }}>Pay applicable fees:</b> Fees cover
              road tests and written knowledge tests.
            </p>
            <p className="ps-3" style={{ fontSize: "20px" }}>
              <b style={{ color: "black" }}>
                Complete and pass the written knowledge tests:
              </b>{" "}
              These tests are offered at DriveTest Centres.
            </p>
          </div>
        </div>

        <div className="m-5 pt-5">
          <p className="ps-3" style={{ fontSize: "20px" }}>
            <b style={{ color: "black" }}>Enroll in the mandatory entry-level training course (MELT or A-Z
              Program):</b> Choose Truck Training Academy as your approved training provider!
          </p>
          <p className="ps-3" style={{ fontSize: "20px" }}>
            <b style={{ color: "black" }}>Mandatory entry-level training will be delivered by:</b> Private Career Colleges (PCCs) registered under the Ontario Career Colleges Act,
            2005 Recognized authorities under the Ministry of Transportation's Driver
            Certification Program (DCP) including approved Ontario Colleges of Applied Arts
            and Technology.
          </p>
          <p className="ps-3" style={{ fontSize: "20px" }}>
            <b>Approved training providers will deliver the program using the <a href="https://www.ontario.ca/page/ministry-transportation" style={{ color: "green" }}>Commercial Truck
              Driver Training Standard (Class A)</a></b>
          </p>
        </div>
      </section >
    </>
  );
}
