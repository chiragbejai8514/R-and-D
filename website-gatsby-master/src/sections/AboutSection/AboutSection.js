import React from 'react'
import ReactMarkdown from 'react-markdown'


const AboutSection = ({ data, active }) => (
    <div className="section fp-auto-height fp-section fp-table" data-anchor="about" data-fp-styles="null">
      <div className="fp-tableCell">
        <div className="fp-scroller fp-scroller-custom">
          <section className="module module--light">
            <div className="wrapper">
              <div className="module__body">
                <div className="module__content module__content--visible">
                  <h2 className={`module__title fade-right duration-400 delay-700 aos-init ${active ? 'aos-animate' : ''}`}>about</h2>
                  <div className={`module__content-body fade-up duration-400 delay-700 aos-init ${active ? 'aos-animate' : ''}`}>
                    <ReactMarkdown source={data.content} />
                  </div>
                  <div className="module__bg aos-init aos-animate" style={{backgroundImage: `url(${data.image.childImageSharp && data.image.childImageSharp.fluid.src})`}}></div>
                </div>
              </div>
            </div>
          </section>
        </div>
        {active && !active && <div className="iScrollVerticalScrollbar iScrollLoneScrollbar iScrollVerticalScrollbar-custom">
          <div className="iScrollIndicator iScrollIndicator-custom-3"></div>
        </div>}
      </div>
    </div>
  )
export default AboutSection
