import React from 'react'

const HomeSection = ({ data, active, randomImageIdx }) => (
  <div className="section section--skewed-right-bottom section--hero fp-section fp-table active fp-completely" data-anchor="home" data-fp-styles="null">
    <div className="fp-tableCell">
      <div className="hero hero-custom" style={{ "height": "100%" }}>
        <div className="wrapper">
          <div className={`hero__bg  delay-700 ${!active ? 'hero__bg--out' : ''}`} style={{ backgroundImage: `url(${data.images[randomImageIdx].image.childImageSharp && data.images[randomImageIdx].image.childImageSharp.fluid.src})` }}></div>
          <div className="hero__body">
            <h1 className={`hero__title fade-up duration-400 delay-700 aos-init ${active ? 'aos-animate' : ''}`}> {data.title}</h1>
            <p className={`hero__text fade-up duration-400 delay-700 aos-init ${active ? 'aos-animate' : ''}`}>{data.subtitle}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default HomeSection