import { BiHomeHeart } from "react-icons/bi";
import { ImRocket } from "react-icons/im";
import { GiArrowScope, GiTentacleStrike } from "react-icons/gi";
import { MdOutlineContactless } from "react-icons/md";

import React from 'react'

const Navbar = () => {
  return (
    <div id="Navbar">
      <div className="items">
        <div className="tooltip">Home</div>
        <div className="icon">
          <a href="#Header">
            <BiHomeHeart />
          </a>
        </div>
      </div>

      <div className="items">
        <div className="tooltip">About</div>
        <div className="icon">
          <a href="#About">
            <GiTentacleStrike />
          </a>
        </div>
      </div>

      <div className="items">
        <div className="tooltip">Skills</div>
        <div className="icon">
          <a href="#Skills">
            <GiArrowScope />
          </a>
        </div>
      </div>

      <div className="items">
        <div className="tooltip">Work</div>
        <div className="icon">
          <a href="#Work">
            <ImRocket />
          </a>
        </div>
      </div>

      <div className="items">
        <div className="tooltip">Contact</div>
        <div className="icon">
          <a href="#Contact">
            <MdOutlineContactless />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar
