import React from 'react';
import Link from 'gatsby-link';

const test = ({ location }) => (
  <div>
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <p style={{color:'red'}}>Query: {location.search}</p>
    <p>
      <Link to="/">Go back to the homepage</Link>
    </p>
    <p>
      <Link to="/test?query=1">Go to `/test?query=1`</Link>
    </p>
    <p>
      <Link to="/test?query=2">Go to `/test?query=2`</Link>
    </p>
  </div>
);

export default test;