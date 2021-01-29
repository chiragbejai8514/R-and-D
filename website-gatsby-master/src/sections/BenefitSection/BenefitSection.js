import React from "react";

const BenefitSection = ({ data, active, onShowLearnMore }) => (
  <div
    className="section fp-auto-height fp-section fp-table"
    data-anchor="benefits"
    data-fp-styles="null"
  >
    <div className="fp-tableCell">
      <div className="fp-scroller fp-scroller-custom">
        <section className="module module--technology">
          <div className="wrapper">
            <div className="module__body">
              <div className="module__content module__content--visible">
                <h2
                  className={`module__title mobile-hidden fade-right duration-400 delay-700 aos-init ${
                    active ? "aos-animate" : ""
                    }`}
                >
                  technology
                </h2>
                <h2 className="module__title mobile-visible aos-init aos-animate aos-animate">
                  benefits
                </h2>
                <p
                  className={`module__before-aux-img-text fade-up duration-400 delay-700 aos-init ${
                    active ? "aos-animate" : ""
                    }`}
                >
                  <span>{data.description}</span>
                </p>
                <img
                  alt="Chip"
                  className={`module__aux-img module__aux-img--right module__chip-img module__chip-img--angled fade-up duration-400 delay-700 aos-init ${
                    active ? "aos-animate" : ""
                    }`}
                  src={
                    data.image.childImageSharp &&
                    data.image.childImageSharp.fluid.src
                  }
                />
                <div className="module__content-columns">
                  <div
                    className={`module__content-column fade-up duration-400 delay-700 aos-init ${
                      active ? "aos-animate" : ""
                      }`}
                  >
                    <span>
                      <strong>{data.heading1}</strong>
                    </span>
                    <ul>
                      <li>{data.content1}</li>
                    </ul>
                  </div>
                  <div
                    className={`module__content-column fade-up duration-400 delay-700 aos-init ${
                      active ? "aos-animate" : ""
                      }`}
                  >
                    <span>
                      <strong>{data.heading2}</strong>
                    </span>
                    <ul>
                      <li>{data.content2}</li>
                    </ul>
                  </div>
                  <div
                    className={`module__content-column fade-up duration-400 delay-700 aos-init ${
                      active ? "aos-animate" : ""
                      }`}
                  >
                    <span>
                      <strong>{data.heading3}</strong>
                    </span>
                    <ul>
                      <li>{data.content3}</li>
                    </ul>
                  </div>
                </div>
                <a
                  className={`demo-link demo-link--bottom fade-down duration-400 delay-700 aos-init ${
                    active ? "aos-animate" : ""
                    }`}
                  data-toggle="document"
                  href="#whitepaper"
                  onClick={onShowLearnMore}
                >
                  Learn more
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
      {active && !active && <div className="iScrollVerticalScrollbar iScrollLoneScrollbar iScrollVerticalScrollbar-custom">
        <div className="iScrollIndicator iScrollIndicator-custom-1"></div>
      </div>}
    </div>
  </div>
);

export default BenefitSection;
