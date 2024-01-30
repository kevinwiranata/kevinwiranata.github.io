import React from "react";
import nextLogo from "../images/next-js.svg";
import javaLogo from "../images/java.png";
import dockerLogo from "../images/docker.png";
import kubernetesLogo from "../images/kubernetes.png";
import pytorchLogo from "../images/pytorch.png";
import solidityLogo from "../images/solidity.png";
import transformers from "../images/transformers.webp";
import wecLogo from "../images/wec.png";
import wrcLogo from "../images/wrc.jpeg";
import reactLogo from "../images/react.png";
import jsLogo from "../images/js.png";
import tsLogo from "../images/typescript.png";
import goLang from "../images/golang.png";
import HyperledgerLogo from "../images/Hyperledger-Fabric.png";
import PythonLogo from "../images/Python.png";
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
						Graduate CS at Cornell Tech | Mission-driven Full Stack Developer &
						Machine Learning Junkie
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
						<p>Software Engineering</p>
						<hr />
					</div>
					<div class="items price">
						<p class="new">
							<span className="area">Frontend: </span>Next.js, Reactjs, HTML5,
							CSS3/SASS
						</p>
						<p class="new">
							<span className="area">Backend: </span>Java/Spring, Python, Go,
							C/C++ Typescript, SQL, MongoDB
						</p>
						<p class="old">
							<span className="area">Other: </span> Docker, Kubernetes, Spark,
							Shell/Bash, Verilog,{" "}
						</p>
					</div>
					<div class="items cart">
						<img src={nextLogo} alt="react" className="resize"></img>
						<span />
						<span />
						<img src={reactLogo} alt="react" className="resize"></img>
						<span />
						<span />
						<img src={jsLogo} alt="javascript" className="resize"></img>
						<span />
						<span />
						<span />
						<img src={tsLogo} alt="typescript" className="resize"></img>
						<span />
						<span />
						<br />
						<br />
						<br />
						<img src={PythonLogo} alt="Python" className="resize"></img>
						<span />
						<span />
						<img src={javaLogo} alt="Python" className="resize"></img>
						<span />
						<span />
						<img src={goLang} alt="Python" className="resize"></img>
						<span />
						<span />
						<img src={dockerLogo} alt="Python" className="resize"></img>
						<span />
						<span />
						<img src={kubernetesLogo} alt="Python" className="resize"></img>
					</div>
				</div>
			</div>

			<div class="container middle">
				<div class="overlay">
					<div class="items head">
						<p>Machine Learning & Blockchain Junkie</p>
						<hr />
					</div>
					<div class="items price">
						<p class="new">
							Machine Learning: Pytorch, Spark, NLP, CV, LLMs, Transformers
						</p>
						<p class="new">Blockchain: Hyperledger Fabric (Go), Solidity</p>
					</div>
					<div class="items cart">
						<img src={HyperledgerLogo} alt="Arduino" className="resize"></img>
						<span />
						<span />
						<img src={solidityLogo} alt="Energia" className="resize"></img>
						<br />
						<br />
						<br />
						<img src={pytorchLogo} alt="Python" className="resize"></img>
						<span />
						<span />
						<span />
						<span />
						<br />
						<br />
						<img
							src={transformers}
							alt="Python"
							style={{ height: "140px" }}></img>
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
							I'm love playing racket sports, and played alot of tennis in
							undergrad! Although I'm in need of more <i>breaks</i>...
						</p>
						<p class="new">
							tldr; I'm a <i>huge</i> fan of Motorsport (F1, WEC & WRC), Tennis
							(ATP & WTA) and Badminton!
						</p>
					</div>
					<div class="items cart">
						<img src={F1Logo} alt="F1" className="resize"></img>
						<span />
						<span />
						<img src={wecLogo} alt="F1" className="resize"></img>
						<span />
						<span />
						<img src={wrcLogo} alt="F1" className="resize"></img>
						<br />
						<br />
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
