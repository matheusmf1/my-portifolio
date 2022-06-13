import React from "react";
import PropTypes from "prop-types";

export default function SEO() {

	const data = {
		title: "Matheus Mandotti Franco",
		description:
			"Tenho 25 anos, amante de tecnologia e de um bom café. Se você contar sua ideia para 10 pessoas e 9 delas disser que você está maluco, provavelmente você está fazendo algo inovador. O que eu posso fazer para o seu negócio?",
		url: "https://matheusmf.com",
		keywords: [
			"Matheus",
			"Matheus Mandotti",
			"Matheus Mandotti Franco",
			"Mauá",
			"Instituto Mauá de Tecnologia",
			"@mandottimf",
			"AWS",
			"Arquiteto de Soluções",
			"Arquiteto de Soluções AWS",
			"solutions architect AWS",
			"solutions architect",
			"developer",
			"site matheus",
			"site matheus mandotti",
			"site matheus mandotti franco",
			"web developer",
			"full stack",
			"full stack web developer",
			"mobile app developer",
			"nodejs",
			"reactjs",
			"flutter",
		],
	}

	return (
		<head>
			<title>{data.title}</title>
			<meta name="title" content={data.title} />
			<meta name="author" content={data.title} />
			<meta name="description" content={data.description} />
			<meta name="keywords" content={data.keywords.join(", ")} />
			<link rel="canonical" href={data.url} />
			{/* Favicon */}
			<link rel="apple-touch-icon" sizes="120x120" href="../assets/favicon.png" />
			<link
				rel="icon"
				type="image/png"
				sizes="32x32"
				href="./favicon.png"
			/>
			<link
				rel="icon"
				type="image/png"
				sizes="16x16"
				href="./favicon.png"
			/>
		</head>
	);
}

SEO.prototype = {
	data: PropTypes.shape({
		title: PropTypes.string.isRequired,
		description: PropTypes.string,
		image: PropTypes.string,
		url: PropTypes.string,
		keywords: PropTypes.arrayOf(PropTypes.string),
	}).isRequired,
};