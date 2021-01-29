  import React from 'react'


const LeftNav = ({ active }) => (
    <>
      <ul className="module__nav module__nav--technology">
        <li className={`module__nav-item ${active === 1 ? 'active' : ''}`} data-menuanchor="technology">
          <a className="module__nav-link" href="#technology">Overview</a>
        </li>
        <li className={`module__nav-item ${active === 2 ? 'active' : ''}`} data-menuanchor="benefits">
          <a className="module__nav-link" href="#benefits">Benefits</a>
        </li>
        <li className={`module__nav-item ${active === 3 ? 'active' : ''}`} data-menuanchor="industries">
          <a className="module__nav-link" href="#industries">Industries</a>
        </li>
      </ul>
      {/* <ul className="module__nav module__nav--technology">
        <li className="module__nav-item" data-menuanchor="technology">
          <a className="module__nav-link" href="#technology">Overview</a>
        </li>
        <li className="module__nav-item module__nav-item--active" data-menuanchor="benefits">
          <a className="module__nav-link" href="#benefits">Benefits</a>
        </li>
        <li className="module__nav-item" data-menuanchor="industries">
          <a className="module__nav-link" href="#industries">Industries</a>
        </li>
      </ul>
      <ul className="module__nav module__nav--technology">
        <li className="module__nav-item" data-menuanchor="technology">
          <a className="module__nav-link" href="#technology">Overview</a>
        </li>
        <li className="module__nav-item" data-menuanchor="benefits">
          <a className="module__nav-link" href="#benefits">Benefits</a>
        </li>
        <li className="module__nav-item module__nav-item--active" data-menuanchor="industries">
          <a className="module__nav-link" href="#industries">Industries</a>
        </li>
      </ul> */}
      <ul className="module__nav module__nav--about module__nav--light">
        <li className={`module__nav-item ${active === 4 ? 'active' : ''}`} data-menuanchor="about">
          <a className="module__nav-link" href="#about">Overview</a>
        </li>
        <li className={`module__nav-item ${active === 5 ? 'active' : ''}`} data-menuanchor="team">
          <a className="module__nav-link" href="#team">Team</a>
        </li>
        <li className={`module__nav-item ${active === 6 ? 'active' : ''}`} data-menuanchor="investors">
          <a className="module__nav-link" href="#investors">Investors</a>
        </li>
      </ul>
    </>
  )

  export default LeftNav