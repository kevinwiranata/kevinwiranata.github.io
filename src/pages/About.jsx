import React from "react";
import reactLogo from "../images/react.png";
import jsLogo from "../images/js.png";
import tsLogo from "../images/typescript.png";
import nestLogo from "../images/nest.png";
import htmlLogo from "../images/html.png";
import cssLogo from "../images/css.png";
import nodeLogo from "../images/node.png";
import HyperledgerLogo from '../images/Hyperledger-Fabric.png'
import EthereumLogo from "../images/ethereum.png";
import PythonLogo from "../images/Python.png";
import PandasLogo from "../images/pandas.png";
import KerasLogo from "../images/keras.png";
import F1Logo from "../images/f1.png";
import atpLogo from "../images/atp.png";
import wtaLogo from "../images/wta.png";
import bwfLogo from "../images/bwf.png";
import "../css/Pages.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-banner">
        <blockquote>
          <h1>About me!</h1>
        </blockquote>
        <div className="description">
          <span>
            Graduate CS at Cornell Tech | Mission-driven
            Full Stack Developer & Data Junkie
          </span>
          <span className="code1">
            One day I'd like to <code>double up;</code> as a Randall Park{" "}
            <code>char acter;</code>
          </span>
        </div>
      </div>

      <div class="container left">
        <div class="overlay">
          <div class="items head">
            <p>Full Stack Developer</p>
            <hr />
          </div>
          <div class="items price">
            <p class="new">
              <span className="area">Frontend: </span>Reactjs, HTML5, CSS3/SASS,
              Node.js
            </p>
            <p class="new">
              <span className="area">Backend: </span>Nestjs, ExpressJS, Java (Spring)
              Typescript, SQL, MongoDB
            </p>
            <p class="old">
              <span className="area">Other: </span>Go, C/C++, Git, Vim, Shell/Bash,
              TDD, x86-64, Verilog, Ansys,{" "}
            </p>
          </div>
          <div class="items cart">
            <i class="fa fa-shopping-cart"></i>
            <img src={reactLogo} alt="react" className="resize"></img>
            <span />
            <img src={jsLogo} alt="javascript" className="resize"></img>
            <span />
            <span />
            <img src={tsLogo} alt="typescript" className="resize"></img>
            <span />
            <span />
            <img src={nestLogo} alt="nest" className="resize"></img>
            <br />
            <br />
            <img src={htmlLogo} alt="html" className="resize"></img>
            <span />
            <span />
            <img src={cssLogo} alt="css" className="resize"></img>
            <span />
            <span />
            <img src={nodeLogo} alt="node" className="resize"></img>
          </div>
        </div>
      </div>

      <div class="container middle">
        <div class="overlay">
          <div class="items head">
            <p>Blockchain & Data Enthusiast</p>
            <hr />
          </div>
          <div class="items price">
            <p class="old">
              Blockchain: Hyperledger Fabric (Go), Ethereum (Solidity)
            </p>
            <p class="new">
              Data Sience: Python (Pandas, Keras, Numpy, Sklearn, CV2), SQL{" "}
            </p>
          </div>
          <div class="items cart">
            <i class="fa fa-shopping-cart"></i>
            <img src={HyperledgerLogo} alt="Arduino" className="resize"></img>
            <span />
            <span />
            <img src={EthereumLogo} alt="Energia" className="resize"></img>
            <br />
            <br />
            <img src={PythonLogo} alt="Python" className="resize"></img>
            <span />
            <span />
            <span />
            <span />
            <img src={KerasLogo} alt="Keras" className="resize"></img>
            <span />
            <span />
            <span />
            <span />
            <img src={PandasLogo} alt="Pandas" className="resize"></img>
          </div>
        </div>
      </div>

      <div class="container right">
        <div class="overlay">
          <div class="items head">
            <p>Pun Trivia Facts!</p>
            <hr />
          </div>
          <div class="items price">
            <p class="old">
              I'm a decent petrolhead, but sometimes car puns can be{" "}
              <i>exhausting</i>...
            </p>
            <p class="old">
              I love to talk - part of me is just being so chatty that sometimes
              I cause a <i>racquet</i>...
            </p>
            <p class="new">
              tldr; I'm a <i>huge</i> fan of Motorsport (F1, WEC & WRC), Tennis
              (ATP & WTA) and Badminton!
            </p>
          </div>
          <div class="items cart">
            <i class="fa fa-shopping-cart"></i>
            <img src={F1Logo} alt="F1" className="resize"></img>
            <img src={atpLogo} alt="ATP" className="resize"></img>
            <span />
            <img src={wtaLogo} alt="WTA" className="resize"></img>
            <span />
            <span />
            <img src={bwfLogo} alt="BWF" className="resize"></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
