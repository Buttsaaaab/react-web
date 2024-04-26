import React, { useEffect } from "react";
import "aos/dist/aos.css";
import Aos from "aos";
export default function Funding() {
  useEffect(() => {
    Aos.init();
  });
  return (
    <>
      <section style={{ marginTop: "100px" }}>
        <div
          className="sec-title    wow "
          data-aos="fade-up"
          data-wow-duration="1500ms"
          data-wow-delay="000ms mt-5"
        >
          <div className="text-center align-items-center justify-content-center align-content-center  ">
            <h3 className="sec-title__title my-4">
              <i className="icon-left-arrow sec-title__img"></i>
              Funding Options
              <i className="icon-right-arrow sec-title__img"></i>
            </h3>
            <p style={{ fontSize: "19px", padding: "1rem" }}>
              {" "}
              Students looking to upgrade their professional skills and those who are otherwise concerned about financing their education have options! Government and not-for-profit agencies work actively to provide funding, here are just some of the agencies we’ve successfully worked with, and others who will support students in their career development goals.

              Funding may be available!
            </p>
          </div>

          <div className="m-5 ">
            <h2 style={{ fontWeight: "600", color: "black" }} className="m-3">
              Better Jobs Ontario
            </h2>

            <p className="ps-3" style={{ fontSize: "20px" }}>
              Get skills training and financial support when you qualify for Better Jobs Ontario (formerly Second Career)
            </p>

            <h5 className="text-start text-muted mb-2" style={{ fontSize: "18px" }}>
              People facing challenges finding a stable job
            </h5>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                1. Effective April 29, 2022, we expanded the program to better
                help people who may face challenges finding stable jobs, such as
                gig workers, youth, and people on social assistance. If you
                have been unemployed for six months or longer, and are part of a
                low-income household, you may benefit from these changes. To
                better reflect the expansion of the program, we have renamed it
                to Better Jobs Ontario.
              </li>
              <li className="list-group-item">
                2.{" "}
                <a
                  className="text-decoration-none"
                  href="https://www.ontario.ca/page/better-jobs-ontario"
                  target="_blank"
                  rel="noreferrer"
                >
                  Read more at Better Jobs Ontario | Ontario.ca
                </a>
              </li>
            </ul>

            <h2 style={{ fontWeight: "600", color: "black" }} className="m-3">
              Under the Age of 30?
            </h2>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                1. Individuals between the ages of 15 and 30 may qualify for a
                grant through the Skills Link program.
              </li>
              <li className="list-group-item">
                2. You can contact your local employment agency or Service Canada
                to find out more.
              </li>
            </ul>

            <h2 style={{ fontWeight: "600", color: "black" }} className="m-3">
              Were you active in the Canadian Forces?
            </h2>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">1. Canvet is an option for individuals who have been injured during their service</li>
              <li className="list-group-item">2. For individuals who have completed their service, funding may be available through SISIP</li>
            </ul>


            <h2 style={{ fontWeight: "600", color: "black" }} className="m-3">
              Do you have status through a First Nation or Metis?
            </h2>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">1. Contact your local band office to see if there are funding dollars available to you</li>
              <li className="list-group-item">2. Funding may be available through the Metis Nation of Ontario</li>
            </ul>

            <h2 style={{ fontWeight: "600", color: "black" }} className="m-3">
              Do you have a disability?
            </h2>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">1. You may be eligible for funding through Ontario March of Dimes</li>
              <li className="list-group-item">2. It is also a good idea to speak to your local employment agency to see what types of funding you may qualify for</li>
            </ul>

            <h2 style={{ fontWeight: "600", color: "black" }} className="m-3">
              Funding Available for Employers
            </h2>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">1. The Canada-Ontario Job Grant can substantially subsidize the corporate training of your employees. For more information contact our sales team they can direct you to the proper resources. Canada-Ontario Job Grant FAQ’s</li>
            </ul>

            <h2 style={{ fontWeight: "600", color: "black" }} className="m-3">
              Not eligible for any government grants or funding?
            </h2>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">1. Student Loan</li>
              <li className="list-group-item">2. Student Line of Credit</li>
              <li className="list-group-item">3. Registered Education Savings Plan (RESP)</li>
              <li className="list-group-item">4. Registered Retirement Savings Plan (RRSP) Taxable</li>
              <li className="list-group-item">5. Personal Life Insurance (borrowing on cash value)</li>
              <li className="list-group-item">6. Friends and Family may be willing to assist with some of your funding dollars</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
