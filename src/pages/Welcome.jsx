import React from "react";
import "../css/Star.css";
import { Link } from "react-router-dom";
import "../css/Button.css";
import logo from "../images/logo3.png";
import SocialFollow from "../components/SocialFollow";

const Welcome = () => {
	return (
		<div>
			<div id="stars1"></div>
			<div id="stars2"></div>
			<div id="stars3"></div>
			<div className="title1">
				<div>
					Hi I'm <span className="name">Kevin Wiranata</span>
				</div>
				<div>I'm a Graduate CS Student at Cornell!</div>
				<div>Ex-SWE @ Verizon, Yahoo</div>
				<br />
				<img id="optionalstuff" src={logo} alt="Home" />
			</div>
			<div id="title">
				<div className="box-1">
					<Link to="/home" className="btn btn-three">
						Enter
					</Link>
				</div>
				<br />
				<SocialFollow></SocialFollow>
			</div>
		</div>
	);
};

export default Welcome;
