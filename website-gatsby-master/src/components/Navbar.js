import React from 'react'
// import { Link } from 'gatsby'
import Logo from '../img/logo.svg'
import LogoText from '../img/logo-text.svg'
import './Navbar.css'

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      showInnerNav: false,
      navBarActiveClass: '', // <defs><style>.cls-1{fill:aqua;}</style></defs>
    }
  }

  hideNav = () => {
    this.setState({ showInnerNav: false})
  }

  render() {
    const { showInnerNav } = this.state
    return (
      <header className={`header ${this.props.showNavbar ? '' : 'header--pre-fixed header--fixed header--after-fixed'}`}>
        <div className="header__trigger-area"></div>
        <div className="wrapper">
          <a className="header__logo" href="#home">
            <img alt="Quadric" src={Logo} />
            <img alt="Quadric" className="header__logo-img header__logo-img--text" src={LogoText} />
          </a>
          <div className={`header__main ${showInnerNav ? 'header--on' : ''}`}>
            {!showInnerNav && <span className="header__toggler header__toggler--hamburger" onClick={() => this.setState({ showInnerNav: true }) }></span>}
            {showInnerNav && <span className="header__toggler header__toggler--close" onClick={() => this.setState({ showInnerNav: false }) }>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35 35">
                <title>Nav_Close_CTA</title><g data-name="Layer 2"><g><rect className="cls-1" x="-4.71" y="14.96" width="44.42" height="5.08" transform="translate(17.5 -7.25) rotate(45)"></rect><rect className="cls-1" x="-4.71" y="14.96" width="44.42" height="5.08" transform="translate(-7.25 17.5) rotate(-45)"></rect></g></g>
              </svg>
            </span>}
            <div className="header__nav">
              <div className="header__nav-inner">
                <div className="header__nav-block">
                  <ul className="header__nav-list">
                    <li className="header__nav-list-item">
                      <a className="header__nav-link" onClick={this.hideNav} data-menuanchor="technology" href="#technology">technology</a>
                    </li>
                    <li className="header__nav-list-item">
                      <a className="header__nav-link" onClick={this.hideNav} data-menuanchor="technology" href="#technology">overview</a>
                    </li>
                    <li className="header__nav-list-item">
                      <a className="header__nav-link" onClick={this.hideNav} data-menuanchor="benefits" href="#benefits">benefits</a>
                    </li>
                    <li className="header__nav-list-item">
                      <a className="header__nav-link" onClick={this.hideNav} data-menuanchor="industries" href="#industries">industries</a>
                    </li>
                  </ul>
                </div>
                <div className="header__nav-block header__nav-block--aux">
                  <ul className="header__nav-list">
                    <li className="header__nav-list-item">
                      <a className="header__nav-link" onClick={this.hideNav} data-toggle="modal" data-menuanchor="team" href="#join-the-team">join our team</a>
                    </li>
                  </ul>
                  <ul className="header__nav-list">
                    <li className="header__nav-list-item">
                      <a className="header__nav-link" onClick={this.hideNav} data-toggle="modal" data-menuanchor="investors" href="#contact">contact</a>
                    </li>
                  </ul>
                </div>
                <div className="header__nav-block">
                  <ul className="header__nav-list">
                    <li className="header__nav-list-item">
                      <a className="header__nav-link" onClick={this.hideNav} data-menuanchor="about" href="#about">about</a>
                    </li>
                    <li className="header__nav-list-item">
                      <a className="header__nav-link" onClick={this.hideNav} data-menuanchor="about" href="#about">overview</a>
                    </li>
                    <li className="header__nav-list-item">
                      <a className="header__nav-link" onClick={this.hideNav} data-menuanchor="teams" href="#team">team</a>
                    </li>
                    <li className="header__nav-list-item">
                      <a className="header__nav-link" onClick={this.hideNav} data-menuanchor="investors" href="#investors">investors</a>
                    </li>
                  </ul>
                </div>
                <div className="header__nav-block">
                  <ul className="header__nav-list">
                    <li className="header__nav-list-item">
                      <a className="header__nav-link" onClick={this.hideNav} data-toggle="document" href="#whitepaper">white paper</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="header__nav-footer">
                <ul className="header__nav-list header__nav-list--horizontal">
                  <li className="header__nav-list-item">
                    <a className="header__nav-link" onClick={this.hideNav} target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/company/quadric.io">linkedin</a>
                  </li>
                  <li className="header__nav-list-item">
                    <a className="header__nav-link" onClick={this.hideNav} target="_blank" rel="noopener noreferrer" href="https://twitter.com/quadric_io">twitter</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
    )
  }
}

export default Navbar
