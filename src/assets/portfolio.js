import emoji from "react-easy-emoji";

export const greetings = {
	name: "Matheus Mandotti",
	title: "Olá, eu sou o Matheus",
	// description:
	// 	"A passionate Full Stack Web Developer and Mobile App Developer having an experience of building Web applications with JavaScript / Reactjs / Nodejs / Python / Django / Flask and some other cool libraries and frameworks and Cross Platform Mobile Apps With Flutter.",
	description: "Tenho 25 anos, amante de tecnologia e de um bom café. Se você contar sua ideia para 10 pessoas e 9 delas disser que você está maluco, provavelmente você está fazendo algo inovador. O que eu posso fazer para o seu negócio?",
	resumeLink: "",
};

export const openSource = {
	githubUserName: "matheusmf1",
};

export const contact = {};

export const socialLinks = {
	instagram: "https://www.instagram.com/mandottimf",
	github: "https://github.com/matheusmf1",
	linkedin: "https://www.linkedin.com/in/matheus-mfranco/",
};

export const skillsSection = {
	title: "Minhas Habilidades",
	subTitle:
		"Arquiteto de Soluções, Design de Sistemas, Especialista em AWS Cloud, Desenvolvedor Full Stack, lidero e gerencio um time técnico",
	skills: [
		emoji(
			"⚡ Desenvolvo Site para sua empresa, Aplicações Web de alto desempenho e aplicações mobile para Android e iOS"
		),
		emoji(
			"⚡ Uso dos recursos de Computação em Nuvem para deixar sua aplicação em alta disponibilidade, elasticidade e com integridade dos seus dados."
		),
		emoji(
			"⚡ Faço integração de sua aplicação com serviços de nuvem, como AWS e Firebase (Google)."
		),

	],

	softwareSkills: [

		{
			skillName: "AWS",
			fontAwesomeClassname: "logos:aws",
		},
		{
			skillName: "Google Cloud",
			fontAwesomeClassname: "logos:google-cloud",
		},
		{
			skillName: "Oracle Cloud",
			fontAwesomeClassname: "logos:oracle",
		},
		{
			skillName: "Firebase",
			fontAwesomeClassname: "logos:firebase",
		},

		{
			skillName: "HTML-5",
			fontAwesomeClassname: "vscode-icons:file-type-html",
		},
		{
			skillName: "CSS3",
			fontAwesomeClassname: "vscode-icons:file-type-css",
		},
		{
			skillName: "JavaScript",
			fontAwesomeClassname: "logos:javascript",
		},
		{
			skillName: "ReactJs",
			fontAwesomeClassname: "vscode-icons:file-type-reactjs",
		},

		{
			skillName: "NodeJs",
			fontAwesomeClassname: "logos:nodejs",
		},
		{
			skillName: "Python",
			fontAwesomeClassname: "logos:python",
		},
		{
			skillName: "Java",
			fontAwesomeClassname: "logos:java",
		},

		{
			skillName: "Flutter",
			fontAwesomeClassname: "logos:flutter",
		},
		{
			skillName: "Android",
			fontAwesomeClassname: "flat-color-icons:android-os",
		},

		{
			skillName: "Banco de Dados",
			fontAwesomeClassname: "vscode-icons:file-type-sql",
		},
		{
			skillName: "mongoDB",
			fontAwesomeClassname: "vscode-icons:file-type-mongo",
		},

		{
			skillName: "Git",
			fontAwesomeClassname: "logos:git-icon",
		},
		{
			skillName: "Docker",
			fontAwesomeClassname: "logos:docker-icon",
		}
	],
};

export const SkillBars = [
	{
		Stack: "Conhecimento em Cloud", //Insert stack or technology you have experience in
		progressPercentage: "95", //Insert relative proficiency in percentage
	},
	{
		Stack: "Desenvolvimento Web",
		progressPercentage: "90",
	},
	{
		Stack: "Desenvolvimento Mobile", 
		progressPercentage: "80",
	}
];

export const educationInfo = [
	{
		schoolName: "Instituto Mauá de Tecnologia",
		subHeader: "Bacharel em Engenharia de Computação",
		duration: "Fevereiro 2016 - Dezembro 2020",
		desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
		descBullets: [
			"Lorem ipsum dolor sit amet, consectetur adipdfgiscing elit",
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
		],
	}

	
];

export const educationInfo2 = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      logo: "../assets/img/logo_maua.png",
			schoolName: "Instituto Mauá de Tecnologia",
			subHeader: "Bacharel em Engenharia de Computação",
			duration: "Fevereiro/2016 - Dezembro/2020",
      desc: "Com especialização em algumas das seguintes áreas:",
      descBullets: [
				"Engenharia de Software",
        "Computação em Nuvem",
        "Metodologia Agil e cultura DevOps",
      ]
    }
  ]
};

export const experience = [
	{
		role: "Software Engineer",
		company: "Google",
		companylogo: "../assets/img/icons/common/google.svg",
		date: "June 2018 – Present",
		desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		descBullets: [
			"Lorem ipsum dolor sit amet, consdfgectetur adipiscing elit",
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
		],
	},
	{
		role: "Front-End Developer",
		company: "Github",
		companylogo: "../assets/img/icons/common/github.svg",
		date: "May 2017 – May 2018",
		desc: "Lorem ipsum dolor sit amet, consefdctetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
	},
	{
		role: "Software Engineer Intern",
		company: "Airbnb",
		companylogo: "../assets/img/icons/common/airbnbLogo.png",
		date: "Jan 2015 – Sep 2015",
		desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
	},
];

export const projects = [
	{
		name: "lorem ipsum",
		desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
		link: "https://example.com",
	},
	{
		name: "lorem ipsum",
		desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
		github: "https://github.com/1hanzla100",
	},
	{
		name: "lorem ipsum",
		desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
		github: "https://github.com/1hanzla100",
		link: "https://example.com",
	},
];

export const feedbacks = [
	{
		name: "Hassan Mehmood",
		feedback:
			"We have been very happy with our new website! It looks professional and very easy to navigate. Our experience with the customer service at Hanzla tauqeer has been great. They handle things very efficiently and are available for any questions we have. They also keep us updated on daily reports so we know how our site is doing. I would recommend that u have choose hanzla web developer services for u.",
	},
	{
		name: "Maheen Altaf",
		feedback:
			"the website is very nice, everything was perfectly made as i need. it just loads in moments, without giving u the chance to wait. the quality is also very amazing. i am using it without any problem. great job",
	},
];
