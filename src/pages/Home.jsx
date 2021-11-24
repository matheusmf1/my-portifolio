import { React, Component } from "react";
// import dynamic from "next/dynamic";
import PropTypes from "prop-types";

import SEO from "../components/SEO";
import Greetings from "../containers/Greetings/Greetings";
import Skills from "../containers/Skills/Skills";
import Proficiency from "../containers/Proficiency/Proficiency";
import Education from "../containers/Education/Education";
import Experience from "../containers/Experience";
import Projects from "../containers/Projects";
import Feedbacks from "../containers/Feedbacks";
import GithubProfileCard from "../components/GithubProfileCard";

import { openSource } from "../assets/portfolio";
import { Header } from "../components/Header/Header";

export class Home extends Component {

	// constructor(props) {
	// 	super(props);
	// 	this.state = {gitData: []};
	// }

	// componentDidMount() {
	// 	fetch(`https://api.github.com/users/${openSource.githubUserName}`)
	// 	.then( (res) => res.json() )
	// 	.then( (data) => { this.setState({ gitData: data })});
	// }

	render() {
		return (
			<div>
			{/* <SEO/> */}
			<Header/>
			<Greetings />
			<Skills />
			<Proficiency />
			<Education />
			<Experience />
			{/* <Feedbacks /> */}
			<Projects />
			{/* <GithubProfileCard prof={this.state.gitData}/> */}
		</div>
		);
	}
}