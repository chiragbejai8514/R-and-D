import React from 'react'

const IndustrySection = ({ data, active, onShowLearnMore }) => (
    <div className="section fp-auto-height section--technology fp-section fp-table" data-anchor="industries" data-fp-styles="null">
      <div className="fp-tableCell">
        <div className="fp-scroller fp-scroller-custom">
          <section className="module module--technology module--industries">
            <div className="wrapper">
              <div className="module__body">
                <div className="module__content module__content--visible">
                  <h2 className={`module__title mobile-hidden fade-right duration-400 delay-700 aos-init ${active ? 'aos-animate' : ''}`}>technology</h2>
                  <h2 className="module__title mobile-visible aos-init aos-animate aos-animate">industries</h2>
                  <p className={`fade-up duration-400 delay-700 aos-init ${active ? 'aos-animate' : ''}`}>
                    <span>{data.description}</span>
                  </p>
                  <div className="module__wide-block">
                    <a className={`demo-link demo-link--top zoom-in duration-400 delay-700 aos-init ${active ? 'aos-animate' : ''}`} data-toggle="document" href="#whitepaper" onClick={onShowLearnMore}>Learn more</a>
                    <div className={`diagram diagram--industries fade-up duration-400 delay-700 aos-init ${active ? 'aos-animate' : ''}`}>
                      <div className="diagram__body">
                        <div className="diagram__item diagram__item--lg diagram__item--lg-rounded">Sensors</div>
                        <div className="diagram__item diagram__item--point">
                          <div className="diagram__point diagram__point--grey">Transportation</div>
                        </div>
                        <div className="diagram__item diagram__item--point">
                          <div className="diagram__point diagram__point--purple">Smart surveillance</div>
                        </div>
                        <div className="diagram__item diagram__item--point">
                          <div className="diagram__point diagram__point--pink">Industrial Robotics</div>
                        </div>
                        <div className="diagram__item diagram__item--point">
                          <div className="diagram__point diagram__point--white">Augmented reality</div>
                        </div>
                        <div className="diagram__item diagram__item--lg diagram__item--lg-rounded">Decisions</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        {active && !active && <div className="iScrollVerticalScrollbar iScrollLoneScrollbar iScrollVerticalScrollbar-custom">
          <div className="iScrollIndicator iScrollIndicator-custom-2"></div>
        </div>}
      </div>
    </div>
  )

export default IndustrySection
