import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import SiteNav from '../SiteNav/SiteNav';

function SiteHeader(props) {
  return (
    <header>
      <div className="sprk-u-mbn sprk-u-pal">
        <Link to="/" className="sprk-b-Link">
          <h1 className="sprk-b-PageTitle sprk-b-TypeDisplayTwo">
            Spark React
            <img width="50" alt="React Logo" src={logo} />
          </h1>
        </Link>
      </div>
      <SiteNav />
    </header>
  );
}

export default SiteHeader;
