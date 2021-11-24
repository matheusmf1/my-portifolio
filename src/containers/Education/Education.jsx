import React from "react";
import EducationCard2 from "../../components/Education/EducationCard2";
import EducationCard from "../../components/Education/EducationCard";
import { educationInfo2 } from "../../assets/portfolio";
import { educationInfo } from "../../assets/portfolio";
import { Container, Row, Col } from "reactstrap";

import './education.css';

const Education = () => {
	return (
		<section className="section pb-8 bg-gradient-info my-5">
			<Container>

				<div className="d-flex px-3">
				
					<div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-info">
						<i className="ni ni-books text-info" />
					</div>
				
				
					<div className="pl-4">
						<h4 className="display-3 text-white">Educação</h4>
					</div>

				</div>

				{/* <Row className="row-grid align-items-center education__item--center">
					{educationInfo.map((info) => {
						return (
							<Col
								className="order-lg-1"
								lg="6"
								key={info.schoolName}
							>
								<EducationCard education={info} />
							</Col>
						);
					})}
				</Row> */}

				<div className="education-card-container">
					{educationInfo2.schools.map((school, index) => (
						<EducationCard2 key={index} school={school} />
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
