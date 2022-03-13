import React from 'react';
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div>
        <p>Support</p>
        <Link to="/">Help Centre</Link>
        <Link to="/">Safety information</Link>
        <Link to="/">Cancellation options</Link>
        <Link to="/">Our COVID-19 Response</Link>
        <Link to="/">Supporting prople with disabilities</Link>
        <Link to="/">Report anerghbourhood concern</Link>
      </div>
      <div>
        <p>Community</p>
        <Link to="/">Airbnb.org</Link>
        <Link to="/">Support Afghan refugess</Link>
        <Link to="/">Conbaring discrimination</Link>
      </div>
      <div>
        <p>Hosting</p>
        <Link to="/">Try hosting</Link>
        <Link to="/">AirCover</Link>
      </div>
      <div>
        <p>About</p>
        <Link to="/">Careeres</Link>
        <Link to="/">Investors</Link>
        <Link to="/">Airbnb luxe</Link>
      </div>
    </footer>
  );
};

export default Footer;

