import React from "react";
import "../css/Pages.css";
import "react-animated-slider/build/horizontal.css";
import verizonmedia from "../images/verizon_media.png";
import smartenergy from "../images/smerc_logo_home.gif";
import yahoo from "../images/yahoo.png";
import alterra from "../images/alterra.png";
import speakly from "../images/speakly.ico";
import blibli from "../images/blibli.png";
import cloud from "../images/cloud.png";

export class Portfolio extends React.Component {
	state = {};
	render() {
		return (
			<div className="portfolio-section" id="portfolio">
				<div className="portfolio-banner">
					<blockquote className="portfolio">
						<h1>Experience</h1>
					</blockquote>
					<div className="description">
						<span>
							Sometimes I like to make things, occasionally they actually end up
							being pretty cool.
						</span>
						<span className="code2">
							{" "}
							Take a <code>short</code> <code>walk(around);</code> I don't{" "}
							<code>byte!</code>
						</span>
					</div>
				</div>

				<div class="cards">
					<div class="card-container">
						<div class="card">
							<a
								href="https://sports.yahoo.com/fantasy/"
								target="_blank"
								rel="noopener noreferrer">
								<div class="card--display">
									<h2 className="card-title">Yahoo Sports</h2>
									<img src={yahoo} alt="yahoo" className="image-hover1" />
									<h4>Software Engineer | Jul 2022 - Aug 2023</h4>
									<ul class="card-text">
										<li>
											Led a project to enhance Draft’s logging infrastructure by
											developing Go Daemons with PHP/Perl scripts, resulting in
											a 5x improvement in logging visibility and reducing log
											search times by up to 70%.
										</li>
										<br />
										<li>
											Co-led Java backend integration of Yahoo ePay to improve
											payins/payouts and reduce risks for Yahoo Wallet
										</li>
										<br />
										<li>
											Created a Java tool to monitor a data ingestion feed
											processor, reducing errors in live sports data by up to
											30%
										</li>
									</ul>
									<br />
									<p class="card-text">
										<strong>Tech Stack:</strong> Java, Go, Apache Storm, Redis,
										Sherpa, PHP, Perl, MySQL, Kubernetes, Splunk
									</p>
								</div>
							</a>
							<div class="card--border"></div>
						</div>
					</div>

					<div class="card-container">
						<div class="card">
							<a
								href="https://www.verizon.com/"
								target="_blank"
								rel="noopener noreferrer">
								<div class="card--display">
									<h2 className="card-title">Verizon Media</h2>
									<img
										src={verizonmedia}
										alt="verizonmedia"
										className="image-hover1"
									/>
									<h4>Software Engineering Intern | Jun 2021 - Sep 2021</h4>
									<ul class="card-text">
										<li>
											Developed and optimized a program in Java that allowed
											users in the paid games platform to perform bulk CSV
											inserts/updates, increasing the data upsert limit by 1000%
											with only 12% increased latency.
										</li>
										<br />
										<li>
											Created engineering design docs and hosted design reviews
											spanning multiple teams (Product, Frontend, Backend)
										</li>
										<br />
										<li>
											Ran various load tests for high RPS endpoints while
											monitoring Splunk dashboards and alerts to meet SLA
										</li>
									</ul>
									<br />
									<p class="card-text">
										<strong>Tech Stack:</strong> Java, Python, Spring, Splunk
									</p>
								</div>
							</a>
							<div class="card--border"></div>
						</div>
					</div>

					<div class="card-container">
						<div class="card">
							<a
								href="https://www.blibli.com//"
								target="_blank"
								rel="noopener noreferrer">
								<div class="card--display">
									<h2 className="card-title">Smart Energy Research Center</h2>
									<img
										src={smartenergy}
										alt="alterra"
										className="image-hover1"
									/>
									<h4>Software Engineering Intern | Jan 2021 - Jul 2022</h4>
									<ul class="card-text">
										<li>
											Collaborated with PhD students to design and build a
											blockchain app for optimized EV Smart Charging in Go
										</li>
										<br />
										<li>
											Built a Hyperledger Fabric POC to capture Electrical
											Vehicle charging & discharging transactions.
										</li>
										<br />
										<li>
											Utilized the commander OOP design pattern with Apache
											Kafka publisher/listener state management.
										</li>
									</ul>
									<br />
									<p class="card-text">
										<strong>Tech Stack:</strong> Go, Hyperledger Fabric,
										Node.js, React.js
									</p>
								</div>
							</a>
							<div class="card--border"></div>
						</div>
					</div>

					<div class="card-container">
						<div class="card">
							<a
								href="https://www.blibli.com//"
								target="_blank"
								rel="noopener noreferrer">
								<div class="card--display">
									<h2 className="card-title">BliBli.com</h2>
									<img src={blibli} alt="alterra" className="image-hover1" />
									<h4>Software Engineering Intern | June - Aug 2020</h4>
									<ul class="card-text">
										<li>
											Implemented a backend transport order system to track the
											movement of merchant’s goods in warehouses by creating an
											order management system using Java Spring Boot RESTful API
											with PostgreSQL databases complete with JUnit tests.
										</li>
										<br />
										<li>
											Launched live production deployment by configuring
											Jenkins, Jmeter and PostgreSQL.
										</li>
										<br />
										<li>
											Utilized the commander OOP design pattern with Apache
											Kafka publisher/listener state management.
										</li>
									</ul>
									<br />
									<p class="card-text">
										<strong>Tech Stack:</strong> Java, Spring Boot, PostgreSQL
										mongoDB, Kafka, JUnit{" "}
									</p>
								</div>
							</a>
							<div class="card--border"></div>
						</div>
					</div>

					<div class="card-container">
						<div class="card">
							<a
								href="https://www.alterra.id/about-us/"
								target="_blank"
								rel="noopener noreferrer">
								<div class="card--display">
									<h2 className="card-title">Alterra</h2>
									<img src={alterra} alt="alterra" className="image-hover1" />
									<h4>Software Engineering Intern | July - Sept 2019</h4>
									<ul class="card-text">
										<li>
											Built a server-side application for a flexible billing
											system using nestJS and Express.js, reducing biller API
											integration time by 90%
										</li>
										<br />
										<li>
											Researched and implemented Node.js microservices
											(rabbitMQ, redis, amqp) in typescript to provide
											asynchronous operations to external system configuration
											and processes
										</li>
										<br />
										<li>
											Managed gitflow using Gitlab CI/CD for staging, and
											Sonarqube + GitPrime for code analysis
										</li>
									</ul>
									<br />
									<p class="card-text">
										<strong>Tech Stack:</strong> Typescript, nestJS, Express.JS,
										mongoDB, redis, rabbitMQ, Jest (unit/integration tests){" "}
									</p>
								</div>
							</a>
							<div class="card--border"></div>
						</div>
					</div>

					<div class="card-container">
						<div class="card">
							<a
								href="https://github.com/kevinwiranata/Speakly"
								target="_blank"
								rel="noopener noreferrer">
								<div class="card--display">
									<h2 className="card-title">Speakly</h2>
									<img src={speakly} alt="speakly" className="image-hover2" />
									<img src={cloud} alt="gcloud" className="image-hover1" />
									<h4>Awarded Best use of Google Cloud API (LA Hacks 2019)</h4>
									<ul class="card-text">
										<li>
											Speakly uses Google's Speech-To-Text, Natural Language,
											and Vision API to track the speaker’s facial movements and
											emotions
										</li>
										<br />
										<li>
											The program then utilizes this information and runs an
											algorithm to grade and highlight specific areas the
											speaker needs to improve
										</li>
									</ul>
									<br />
									<p class="card-text">
										<strong>Tech Stack:</strong> Python, Google Cloud API
										(Vision, Speech-to-Text, NLP), HTML/CSS, PHP{" "}
									</p>
								</div>
							</a>
							<div class="card--border"></div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Portfolio;
