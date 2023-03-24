import { images } from '../../constants';
import Typewriter from "typewriter-effect";
import { VscGithub } from "react-icons/vsc";
import { BsMoonStarsFill, BsTwitter } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import {
  RiInstagramFill,
  RiDownloadCloud2Fill,
} from "react-icons/ri";
import {GiArrowDunk} from "react-icons/gi"

const Header = () => {
  return (
    <div id="Header">
      <section className="header-section">
        <div className="logo">
          <h1>𝕾𝖚𝖏𝖎𝖙</h1>
        </div>
        <BsMoonStarsFill />
      </section>

      <div className="container">
        <div className="social">
          <div className="social-icon">
            <a href="#">
              <VscGithub />
            </a>
          </div>
          <div className="social-icon">
            <a href="#">
              <FaLinkedinIn />
            </a>
          </div>
          <div className="social-icon">
            <a href="#">
              <SiLeetcode />
            </a>
          </div>
          <div className="social-icon">
            <a href="#">
              <RiInstagramFill />
            </a>
          </div>
          <div className="social-icon">
            <a href="#">
              <BsTwitter />
            </a>
          </div>
        </div>

        <div className="profile-container">
          <div className="profile-card">
            <h1 className="heading">Hey There, I'm Nucleus</h1>
            <Typewriter
              options={{
                strings: ["A Web Developer", "A Designer", "A Problem Solver"],
                autoStart: true,
                loop: true,
                wrapperClassName: "typewriter",
                cursorClassName: "typer-cursor",
              }}
            />
            <h2 className="intro-text">
              An aspiring Full Stack Web Developer. I am skilled in a variety of
              programming languages and technologies, including HTML, CSS,
              JavaScript, and React.
              <p>
                I am always looking to expand my skill set and stay up to date
                with the latest industry trends.
            </p>
            </h2>
            <div className="btn">
              <button>
                <a href="google.com" target="_blank">
                  Get Resume <RiDownloadCloud2Fill className="ico" />
                </a>
              </button>
              <button>
                <a href="github.com" target="_blank">
                  More Info
                  <GiArrowDunk className="ico" />
                </a>
              </button>
            </div>
          </div>
        </div>

        <div className="profile-picture">
          <div className="card">
            <div className="image">
              <img src={images.user} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
