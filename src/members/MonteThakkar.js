import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../styles/MonteThakkar.css'

import LeftArrow from '../assets/left-arrow.png';

const MONTE_AVATAR = 'https://avatars2.githubusercontent.com/u/7840686?s=400&v=4'

export default class MonteThakkar extends Component {
  render() {
    return (
      <div className="main-container">
        <Link to="/" className="back-arrow-container">
          <img className="back-arrow-icon" src={LeftArrow} />
        </Link>
        <div className="avatar-container">
          <img className="avatar" src={MONTE_AVATAR} />
        </div>
        <div className="title">Monte Thakkar</div>
        <div className="subtitle">Explorer of Space</div>
        <div className="links-container">
          <a href="https://github.com/monte9" className="link">
            <img className="links-icon" src="http://bogas04.github.io/img/github.svg" />
          </a>
          <a href="https://twitter.com/MThakkar_" className="link">
            <img className="links-icon" src="http://www.freeiconspng.com/uploads/twitter-icon-download-18.png" />
          </a>
          <a href="mailto:helloomonte@gmail.com?Subject=I%20would%20like%20to%20know%20more%20about%20MobileSpace!" target="_top" className="link">
            <img className="links-icon" src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Gmail_Icon.png" />
          </a>
        </div>
      </div>
    );
  }
}
