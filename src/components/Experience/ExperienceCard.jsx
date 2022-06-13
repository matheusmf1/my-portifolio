import React from "react";

import {
	CardBody,
	CardTitle,
	CardSubtitle,
	CardText,
	CardHeader,
	Col,
} from "reactstrap";

import Color from "color-thief-react";

import setis from "../../assets/img/logo_setis.png"
import ibm from "../../assets/img/logo_ibm.svg"
import aws from "../../assets/img/logo_aws.png"
// import aws from "../../assets/img/aws2.png"


import './ExperienceCard.css'

const ExperienceCard = ({ data }) => {

	let test = '';

	if ( data.companylogo === "../assets/img/icons/common/logo_setis.png" ) {
		test = setis
	} 
	else if ( data.companylogo === "../assets/img/icons/common/aws.png" ) {
		test = aws
	} else if ( data.companylogo === "../assets/img/icons/common/ibm.png" ) {
		test = ibm
	}

	return (
		<Col lg="4" className="card__content--container">

			{/* <Card style={{ flex: 1 }} className="shadow-lg--hover shadow border-0 text-center rounded card__container"> */}
			<div className="shadow-lg--hover shadow card__container">
		
				{/* <Color src={test} format="hex">
					{(color) => (
						console.log(data.company),
						console.log(color),
						<CardHeader style={{ background: color.data }} className="card__container--header">
							<h5 className="text-white">{data.company}</h5>
						</CardHeader>
					)}
				</Color> */}

				<CardHeader style={{ background: data.backgroundColor }} className="card__container--header">
					<h5 className="card__header--text">{data.company}</h5>
				</CardHeader>

				
				{/* <CardBody className="py-5"> */}
				<CardBody className="card__content">
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
							: null }
							</ul>
						</CardText>
					</CardBody>
				</div>
		</Col>
	);
};

export default ExperienceCard;