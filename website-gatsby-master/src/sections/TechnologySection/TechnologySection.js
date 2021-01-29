import React from 'react'

const TechnologySection = ({ data, active, onShowLearnMore }) => (
  <div className="section  fp-section fp-table" data-anchor="technology" data-fp-styles="null" style={{ backgroundColor: 'red' }}>
    <div className="fp-tableCell">
      <div className="fp-scroller fp-scroller-custom">
        <section className="module module--technology">
          <div className="wrapper">
            <div className="module__body">
              <div className="module__content module__content--visible">
                <h2 className={`module__title fade-right duration-400 delay-700 aos-init ${active ? 'aos-animate' : ''}`}>technology</h2>
                <h3 className={`fade-up duration-400 delay-700 aos-init ${active ? 'aos-animate' : ''}`}>{data.title}</h3>
                <p className={`fade-up duration-400 delay-700 aos-init ${active ? 'aos-animate' : ''}`}>{data.description}</p>
                <img alt="Chip" className={`module__aux-img module__aux-img--right module__chip-img fade-left duration-400 delay-700 aos-init ${active ? 'aos-animate' : ''}`} src={data.image.childImageSharp && data.image.childImageSharp.fluid.src} />
                <div className="module__wide-block">
                  <div className={`diagram diagram--technology fade-up duration-400 delay-700 aos-init ${active ? 'aos-animate' : ''}`}>
                    <div className="diagram__title">Perception<br />Prediction loops</div>
                    <div className="diagram__body">
                      <div className="diagram__item diagram__item--sm diagram__item--with-arrow">Sensors
                          <span className="diagram__sensors-icon">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40">
                            <title>SENSOR_ICON</title>
                            <g id="Layer_2" data-name="Layer 2">
                              <g id="MODULE_2_TECHNOLOGY">
                                <g id="GRAPH">
                                  <path className="cls-1" d="M40,21.28l-9.76,3.17V19.37a2.77,2.77,0,0,0-2.78-2.78H2.78A2.78,2.78,0,0,0,0,19.37V37.22A2.79,2.79,0,0,0,2.78,40H27.46a2.78,2.78,0,0,0,2.78-2.78v-3.5L40,36.24ZM29.27,37.22A1.81,1.81,0,0,1,27.46,39H2.78A1.8,1.8,0,0,1,1,37.22V19.37a1.8,1.8,0,0,1,1.8-1.81H27.46a1.81,1.81,0,0,1,1.81,1.81ZM39,35l-8.78-2.27V25.47L39,22.62Z"></path>
                                  <path className="cls-1" d="M15.12,1a10,10,0,0,1,9.31,6l.9-.38A11,11,0,0,0,15.12,0,10.94,10.94,0,0,0,4.92,6.64l.9.38A10,10,0,0,1,15.12,1Z"></path>
                                  <path className="cls-1" d="M21.27,9.8l.91-.36A7.62,7.62,0,0,0,15.1,4.75a7.53,7.53,0,0,0-7,4.58L9,9.7a6.57,6.57,0,0,1,6.13-4A6.64,6.64,0,0,1,21.27,9.8Z"></path>
                                  <path className="cls-1" d="M11.28,12l.9.37a3.25,3.25,0,0,1,5.89-.06l.89-.39a4.21,4.21,0,0,0-7.68.08Z"></path>
                                  <polygon className="cls-1" points="25.37 35.12 20 35.12 20 36.1 26.34 36.1 26.34 29.76 25.37 29.76 25.37 35.12"></polygon>
                                  <polygon className="cls-1" points="3.9 26.83 4.88 26.83 4.88 21.46 10.24 21.46 10.24 20.49 3.9 20.49 3.9 26.83"></polygon>
                                </g></g></g>
                          </svg>
                        </span>
                        <div className="diagram__item diagram__item--sm diagram__item--sm-rounded diagram__item--inner">EDGE LEARNING</div>
                      </div>
                      <div className="diagram__item diagram__item--sm diagram__item--sm-rounded">Real time data</div>
                      <div className="diagram__item diagram__item--point">
                        <div className="diagram__point diagram__point--purple">Artificial Intelligence</div>
                      </div>
                      <div className="diagram__item diagram__item--point">
                        <div className="diagram__point diagram__point--pink">High performance compute</div>
                      </div>
                      <div className="diagram__item diagram__item--point diagram__item--with-arrow">
                        <div className="diagram__point diagram__point--grey">Prediction</div>
                      </div>
                      <div className="diagram__item diagram__item--sm diagram__item--sm-rounded">Decision</div>
                    </div>
                  </div>
                </div>
                <a className={`demo-link demo-link--medium-bottom aos-init aos-animate`} data-toggle="document" href="#whitepaper" onClick={onShowLearnMore}>Learn more</a>
              </div>
            </div>
          </div>
        </section>
      </div>
      {active && <div className="iScrollVerticalScrollbar iScrollLoneScrollbar iScrollVerticalScrollbar-custom">
        <div className="iScrollIndicator iScrollIndicator-custom"></div>
      </div>}
    </div>
  </div>
)

export default TechnologySection
