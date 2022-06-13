import React from "react";
import EducationCard from "../../components/Education/EducationCard";
import { educationInfo } from "../../assets/portfolio";
import { Container } from "reactstrap";

import './education.css';

const Education = () => {
	return (
		<section className="section pb-8 bg-gradient-info my-5" id="education">
			<Container>

				<div className="d-flex px-3">
				
					<div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-info">
						<i className="ni ni-books text-info" />
					</div>
				
				
					<div className="pl-4">
						<h4 className="display-3 text-white">Educação</h4>
					</div>

				</div>

				<div className="education-card-container">
					{educationInfo.schools.map((school, index) => (
						<EducationCard key={index} school={school} />
					))}
				</div>
			
				
			</Container>

			<div className="separator separator-bottom separator-skew zindex-100">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					preserveAspectRatio="none"
					version="1.1"
					viewBox="0 0 2560 100"
					x="0"
					y="0"
				>
					<polygon
						className="fill-white"
						points="2560 0 2560 100 0 100"
					/>
				</svg>
			</div>
		</section>
	);
};

export default Education;
