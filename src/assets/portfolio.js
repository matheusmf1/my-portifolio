import emoji from "react-easy-emoji";

export const illustration = {
  animated: true // Set to false to use static SVG
};

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

export const educationInfo = {
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
		role: "Tech Lead / Arquiteto de Soluções / Software Engineer",
		company: "IBM",
		companylogo: "../assets/img/icons/common/ibm.png",
		backgroundColor: "rgb(28, 20, 28)",
		date: "Agosto 2021 – Atual",
		desc: "Responsável pela definição técnica de arquitetura e desenvolvimento para soluções em ambiente Cloud.",
		descBullets: [
			"Desenvolvedor FullStack, com hábilidades em Frontend e Backend.",
			"Lidero o time ajudando nas definições técnicas e de negócios.",
		],
	},
	{
		role: "Arquiteto de Soluções",
		company: "Amazon Web Services - AWS",
		companylogo: "../assets/img/icons/common/aws.png",
		backgroundColor: "#fc9c04",
		date: "Setembro 2020 – Agosto 2021",
		desc: "Como Arquiteto de Soluções ajudo os clientes a entenderem o que é e como iniciar sua jornada na Computação em Nuvem.",
		descBullets: [
			"Exploro a necessidade do cliente e ajudo a construir a melhor arquitetura para o seu negócio.",
			"Desenvolvo provas de conceito, Workshops e Webinars.",
			"Analiso e desenho a arquitetura do seu Workload.",
			"Foi reconhecido pelo Time de Liderança por mostrar liderança, desempenho e obsessão pelo cliente.",
			// "Desenvolvi uma aplicação Web totalmente Serverless para ajudar o time de vendas a encontrar novas oportunidades de negócio. Usando Microsserviços, Infraestrutura da AWS, Machine Learning e Infraestrutura como Código. Toda a aplicação baseou-se nos princípios de DevOps, entrega e desenvolvimento continuo, CI/CD.",
		],
	},
	{
		role: "Desenvolvedor Android - Estagiário",
		company: "SETIS - Automação e Sistemas",
		companylogo: "../assets/img/icons/common/logo_setis.png",
		backgroundColor: "#00006A",
		date: "Fevereiro 2019 – Setembro 2020",
		desc: "Atuei como desenvolvedor Android focado em soluções de ponto de captura para pagamentos.",
		descBullets: [
			"Coloquei em prática meus conhecimentos de Engenharia de Software e metodologia Agil time.",
			// "Desenvolvi uma aplicação Web baseada na arquitetura MVC usando NodeJS and JavaScript para lidar com algumas tarefas internas de forma automatizada. Integrei esse projeto com a aplicação Android da empresa, facilitando os usuários a saberem o que estava sendo testado.",
			"Tive contato com CI/CD, onde usei o Jenkins para desenvolver uma Pipeline para fazer build de alguns artefatos de forma automatizada.",
			"Aprendi Kotlin e modernizei algumas aplicações da empresa, usando essa tecnologia."
		],
	}
];

export const projects = [
	{
		name: "ARgro",
		desc: "Aplicativo que utiliza realizadade aumentada para facilitar o desenvolvimento de aplicaçõe no agronegócio.",
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

export const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+92-3243454077",
  email_address: "saadpasta70@gmail.com"
};

export const socialMediaLinks = {
  github: "https://github.com/saadpasta",
  linkedin: "https://www.linkedin.com/in/saadpasta/",
  gmail: "saadpasta70@gmail.com",
  gitlab: "https://gitlab.com/saadpasta",
  facebook: "https://www.facebook.com/saad.pasta7",
  medium: "https://medium.com/@saadpasta",
  stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};