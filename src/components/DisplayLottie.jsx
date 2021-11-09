import React from "react";

import { Player } from '@lottiefiles/react-lottie-player';

import coding from '../assets/lottie/coding.json'
import build from '../assets/lottie/build.json'
import webdev from '../assets/lottie/webdev.json'

const GreetingLottie = ({ animationPath }) => {

	const animationsPath = {
		"../assets/lottie/coding.json": coding,
		"../assets/lottie/build.json": build,
		"../assets/lottie/webdev.json": webdev,
	} 

	return (
		<div onClick={() => null}>
			<Player
        autoplay={true}
        loop={true}
        controls={false}
        src={animationsPath[animationPath]}
      />

		</div>
	);
};

export default GreetingLottie;
