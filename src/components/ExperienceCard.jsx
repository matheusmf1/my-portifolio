import React from "react";

import {
	Card,
	CardBody,
	CardTitle,
	CardSubtitle,
	CardText,
	CardHeader,
	Col,
} from "reactstrap";

import Color from "color-thief-react";

import { Fade } from "react-reveal";

import google from "../assets/img/icons/common/google.svg"
import git from "../assets/img/icons/common/github.svg"
import airBnB from "../assets/img/icons/common/airbnbLogo.png"

const ExperienceCard = ({ data }) => {

	let test = '';

	if ( data.companylogo === "../assets/img/icons/common/google.svg" ) {
		test = google
	} 
	else if ( data.companylogo === "../assets/img/icons/common/github.svg" ) {
		test = git
	} else if ( data.companylogo === "../assets/img/icons/common/airbnbLogo.png" ) {
		test = airBnB
	}


	return (
		<Col lg="4">
			{/* <Fade left duration={1000} distance="40px"> */}
				<Card
					style={{ flex: 1 }}
					className="shadow-lg--hover shadow border-0 text-center rounded"
				>
					<Color src={test} format="hex">
						{(color) => (
							<CardHeader style={{ background: color.data }}>
								<h5 className="text-white">{data.company}</h5>
							</CardHeader>
						)}
					</Color>
					<CardBody className="py-5">
						<div
							className="bg-white rounded-circle mb-3 img-center img-fluid shadow-lg "
							style={{ width: "100px", height: "100px" }}
						>
							<img
								src={test}
								width={"100px"}
								height={"100px"}
								alt={data.companylogo}
							/>
						</div>
						<CardTitle tag="h5">{data.role}</CardTitle>
						<CardSubtitle>{data.date}</CardSubtitle>
						<CardText className="description my-3 text-left">
							{data.desc}
							<ul>
								{data.descBullets
									? data.descBullets.map((desc) => {
											return <li key={desc}>{desc}</li>;
									  })
									: null}
							</ul>
						</CardText>
					</CardBody>
				</Card>
			{/* </Fade> */}
		</Col>
	);
};

export default ExperienceCard;