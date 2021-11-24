import React from "react";
import DisplayLottie from "../../components/DisplayLottie";
import { Container, Row, Col } from "reactstrap";

import { skillsSection } from "../../assets/portfolio";
import { Icon } from '@iconify/react';
import './Skills.css'

const Skills = () => {
	return (
		<Container className="text-center my-2 section">
			<h1 className="h1">{skillsSection.title}</h1>
			<p className="lead">{skillsSection.subTitle}</p>

			<Row>
					
				<Col lg="6">
					<DisplayLottie animationPath="../assets/lottie/webdev.json" />
				</Col>
				
				<Col lg="6">
					<div className="d-flex justify-content-center flex-wrap mb-2">
						
						{skillsSection.softwareSkills.map((skill,i) => {
							return (
							
								<li
									key={i}
									className="software-skill-inline"
									name={skill.skillName}
								>
									
									<div className="icon icon-lg icon-shape shadow rounded-circle mb-3" id={skill.skillName}>
										<Icon icon={skill.fontAwesomeClassname}/>
									</div>

									<p>{skill.skillName}</p>
								</li>
							);
						})}

					</div>

					<div>
						{skillsSection.skills.map((skill) => {
							return <p key={skill}>{skill}</p>;
						})}
					</div>
					
				</Col>
			</Row>
		</Container>
	);
};

export default Skills;
