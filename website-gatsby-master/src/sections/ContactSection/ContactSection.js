import React from 'react'

import { Responsive, WidthProvider } from "react-grid-layout"

import LogoText from '../../img/logo-text.svg'


const ResponsiveReactGridLayout = WidthProvider(Responsive)

class ContactSection extends React.Component {
    constructor(props) {
      super(props)
  
      this.state = {
        showForm: false,
        firstName: '',
        lastName: '',
        email: '',
        content: '',
      }
    }
  
    componentWillReceiveProps(nextProps) {
      if (!this.props.active && nextProps.active) {
        this.setState({
          showForm: false,
        })
      }
    }
  
    render() {
      const {
        showForm,
        firstName,
        lastName,
        email,
        content,
      } = this.state
      const { active, data, width, onShowForm } = this.props
      const layout = {
        lg: data.map(m => {
          return {
            i: m.name,
            x: m.lg.x,
            y: m.lg.y,
            w: m.lg.width,
            h: m.lg.height,
          }
        }),
        md: data.map(m => {
          return {
            i: m.name,
            x: m.md.x,
            y: m.md.y,
            w: m.md.width,
            h: m.md.height,
          }
        }),
        sm: data.map(m => {
          return {
            i: m.name,
            x: m.sm.x,
            y: m.sm.y,
            w: m.sm.width,
            h: m.sm.height,
          }
        }),
        xs: data.map(m => {
          return {
            i: m.name,
            x: m.xs.x,
            y: m.xs.y,
            w: m.xs.width,
            h: m.xs.height,
          }
        }),
      }
      let rowHeight = 10
      if (width < 576) {
        rowHeight = 5
      } else if (width < 1040) {
        rowHeight = 12
      } else if (width < 1300) {
        rowHeight = 16
      }
  
      return (
        <div className="section fp-auto-height fp-section fp-table section--with-footer" data-anchor="investors" data-fp-styles="null">
          <div className="fp-tableCell">
            <div className="fp-scroller fp-scroller-custom">
              <section className="module module--light module--before-contact">
                <div className="wrapper">
                  <div className="module__body">
                    <div className="module__content module__content--visible">
                      <h2 className={`module__title mobile-hidden fade-in duration-400 delay-700 aos-init ${active ? 'aos-animate' : ''}`}>about</h2>
                      <h2 className="module__title mobile-visible aos-init aos-animate">investors</h2>
                      <div className="module__wide-block">
                        <div className="module__safe-area">
                          <div className={`grid grid--investors fade-up duration-400 delay-700 aos-init ${active ? 'aos-animate' : ''}`}>
                            <ResponsiveReactGridLayout
                              className="layout"
                              layouts={layout}
                              cols={{lg: 60, md: 60, sm: 30, xs: 30, xxs: 30}}
                              rowHeight={rowHeight}
                              isDraggable= {false}
                              isResizable= {false}
                              breakpoints={{lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0}}
                            >
                              {data.map(investor => (<a key={investor.name} className="grid__item" href={investor.website}>
                                <img alt="investor" className="grid__img" src={investor.image.childImageSharp && investor.image.childImageSharp.fluid.src} />
                              </a>))}
                            </ResponsiveReactGridLayout>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={`module module--purple module--contact  ${showForm ? 'module--contact-open' : ''}`} id="contact" style={{bottom: '0'}}>
                <div className="wrapper">
                  <div className="module__columns">
                    <div className="module__column module__column--wide">
                      {showForm && <form action="https://quadric.us20.list-manage.com/subscribe/post?u=880ba654a6e7a6699c5910f4d&amp;amp;id=7756fd12bb" className="form form--contact validate" id="mc-embedded-subscribe-form" method="post" name="mc-embedded-subscribe-form" target="_blank">
                        <div className="form__row">
                          <div className="form__column">
                            <input
                              className="form__control required"
                              id="mce-FNAME"
                              name="FNAME"
                              placeholder="First name"
                              required=""
                              type="text"
                              value={firstName}
                              onChange={e => this.setState({ firstName: e.target.value })}
                            />
                          </div>
                          <div className="form__column">
                            <input
                              className="form__control"
                              id="mce-LNAME"
                              name="LNAME"
                              placeholder="Last name"
                              required=""
                              type="text"
                              value={lastName}
                              onChange={e => this.setState({ lastName: e.target.value })}
                            />
                          </div>
                        </div>
                        <div className="form__row">
                          <div className="form__column">
                            <input
                              className="form__control required email"
                              id="mce-EMAIL"
                              name="EMAIL"
                              placeholder="Email"
                              required=""
                              type="email"
                              value={email}
                              onChange={e => this.setState({ email: e.target.value })}
                            />
                          </div>
                        </div>
                        <div className="form__row">
                          <textarea
                            className="form__control"
                            required=""
                            name="MERGE5"
                            onChange={e => this.setState({ content: e.target.value })}
                          >
                            {content}
                          </textarea>
                        </div>
                        <div className="form__row">
                          <input
                            value="Submit"
                            name="subscribe"
                            id="mc-embedded-subscribe"
                            className="form__submit"
                            type="submit"
                          />
                        </div>
                      </form>}
                    </div>
                    <div className="module__column">
                      <h2>
                        <span className="contact-toggler" onClick={() => { this.setState({ showForm: !showForm }); onShowForm(showForm); }}>
                          Stay in Touch<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30"><title>Asset 48</title><g data-name="Layer 2"><g><path className="cls-1" d="M12.12,11.72V0h5.76V11.72H30v6.5H17.88V30H12.12V18.22H0v-6.5Z"></path></g></g></svg>
                        </span>
                      </h2>
                      <div className="contact">
                        <h4 className="contact__title">headquarters</h4>
                        <p className="contact__text">
                          <span>330 Primrose Rd Ste 306<br />Burlingame</span>
                          <span>,&nbsp;</span>
                          <span>CA</span>
                          <span>&nbsp;</span>
                          <span>94010</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              </section>

              <footer className="footer">
                <div className="wrapper">
                  <div className="footer__row footer__row--top">
                    <a className="footer__logo" href="https://quadric.io/">
                      <img alt="Quadric" src={LogoText} />
                    </a>
                    <ul className="footer__list footer__list--vertical">
                      <li className="footer__list-item">
                        <a className="footer__list-link" href="#technology">Technology</a>
                      </li>
                      <li className="footer__list-item">
                        <a className="footer__list-link" href="#benefits">Benefits</a>
                      </li>
                      <li className="footer__list-item">
                        <a className="footer__list-link" href="#industries">Industries</a>
                      </li>
                    </ul>
                    <ul className="footer__list footer__list--vertical">
                      <li className="footer__list-item">
                        <a className="footer__list-link" href="#about">About</a>
                      </li>
                      <li className="footer__list-item">
                        <a className="footer__list-link" href="#team">Team</a>
                      </li>
                      <li className="footer__list-item">
                        <a className="footer__list-link" href="#investors">Investors</a>
                      </li>
                    </ul>
                    <ul className="footer__list footer__list--vertical">
                      <li className="footer__list-item">
                        <a className="footer__list-link" data-toggle="modal" data-menuanchor="team" href="#join-the-team">Careers</a>
                      </li>
                      <li className="footer__list-item">
                        <a className="footer__list-link" data-toggle="modal" data-menuanchor="investors" href="#contact">Contact</a>
                      </li>
                    </ul>
                    <ul className="footer__list footer__list--vertical">
                      <li className="footer__list-item">
                        <a className="footer__list-link" target="_blank" rel="noopener noreferrer" href="https://twitter.com/quadric_io">Twitter</a>
                      </li>
                      <li className="footer__list-item">
                        <a className="footer__list-link" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/company/quadric.io">Linkedin</a>
                      </li>
                    </ul>
                  </div>
                  <div className="footer__row">
                    <ul className="footer__list footer__list--horizontal">
                      <li className="footer__list-item">© 2019 Quadric. All Rights Reserved</li>
                      <li className="footer__list-item footer__list-item--before-site-by">
                        <a className="footer__list-link" href="http://bit.ly/qpriv">Privacy</a>
                      </li>
                      <li className="footer__list-item footer__list-item--site-by">
                        <span>site by:&nbsp;</span>
                        <a target="_blank" className="footer__list-link" rel="noopener noreferrer" href="https://meadow.cc/">MEADOW DESIGN INC</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </footer>
            </div>
          </div>
        </div>
      )
    }
  }

export default ContactSection
