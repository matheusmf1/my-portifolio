import React from "react";
import { experience } from "../assets/portfolio";
import { Container, Row } from "reactstrap";
import ExperienceCard from "../components/Experience/ExperienceCard.jsx";
import {Fade} from "react-reveal";

const Experience = () => {
	return (
		<section className="section section-lg" id="experience">
			<Container>	
					<div className="d-flex p-4">
						<div>
							<div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-info">
								<i className="ni ni-briefcase-24 text-info" />
							</div>
						</div>
						<div className="pl-4">
							<h4 className="display-3 text-info">Experiência</h4>
						</div>

					</div>
					<Fade left duration={500}>
					<Row className="row-grid align-items-center">
						 {experience.map((data, i) => {
							return <ExperienceCard key={i} data={data} />;
						})}
					</Row>
					</Fade>			
			</Container>
		</section>
	);
};

export default Experience;
