tsParticles.load("tsparticles", {
	fpsLimit: 60,
	particles: {
		number: {
			value: 0,
			density: {
				enable: true,
				value_area: 800,
			},
		},
		color: {
			value: "#ff0000",
			animation: {
				enable: true,
				speed: 180,
				sync: true,
			},
		},
		shape: {
			type: "circle",
			stroke: {
				width: 0,
				color: "#000000",
			},
			polygon: {
				nb_sides: 5,
			},
			image: {
				src: "https://cdn.matteobruni.it/images/particles/github.svg",
				width: 100,
				height: 100,
			},
		},
		opacity: {
			value: 0.5,
			random: false,
			anim: {
				enable: false,
				speed: 1,
				opacity_min: 0.1,
				sync: false,
			},
		},
		size: {
			// size was 60
			value: 60,
			random: {
				enable: true,
				minimumValue: 10,
			},
			animation: {
				enable: true,
				speed: 5,
				minimumValue: 10,
				sync: true,
				startValue: "min",
				destroy: "max",
			},
		},
		links: {
			enable: false,
		},
		move: {
			enable: true,
			//speed was 10
			speed: 8,
			direction: "none",
			random: false,
			straight: false,
			outMode: "destroy",
			attract: {
				enable: false,
				rotateX: 600,
				rotateY: 1200,
			},
		},
	},
	interactivity: {
		detectsOn: "window",
		events: {
			onhover: {
				enable: true,
				mode: "trail",
			},
			onclick: {
				enable: true,
				mode: "push",
			},
			resize: true,
		},

		//distance was 400
		modes: {
			grab: {
				distance: 10,
				line_linked: {
					opacity: 0.8,
				},
			},
			//distance was 400, duration was 2, speed was 3
			bubble: {
				distance: 10,
				size: 80,
				duration: 2,
				opacity: 1,
				speed: 0,
			},
			repulse: {
				distance: 200,
			},
			push: {
				particles_nb: 4,
			},
			remove: {
				particles_nb: 2,
			},
			//trail was 5
			trail: {
				delay: 0,
				quantity: 12,
			},
		},
	},
	retina_detect: true,
	background: {
		color: "#000000",
		image: "url('https://res.cloudinary.com/dn1e07eul/image/upload/v1615054343/100%20Days%20Of%20Code/wanda01_jrpv3h.jpg')",
		position: "50% 50%",
		repeat: "no-repeat",
		size: "cover",
	},
	backgroundMask: {
		enable: true,
		cover: {
			color: "#000000",
		},
	},
});

function swRegistration() {
	const heart = ["font-size: 20px", "padding: 12px", "margin: 4px 0 4px 4px", "color: rgba(238,58,136,1)"].join(";");
	if ("serviceWorker" in navigator) {
		navigator.serviceWorker
			.register("/mousetrail-wandavision/sw.js", {
				scope: "/mousetrail-wandavision/",
			})
			.then(function (registration) {
				console.log("%c❤️", heart);
			})
			.catch(function (err) {
				console.log(err);
			});
	}
}

function consoleText() {
	console.clear();
	const styles = [
		"color: white",
		"background: rgba(238,58,136,1)",
		"font-size: 18px",
		"padding: 12px",
		"margin: 6px 0 6px 14px",
	].join(";");
	const styles2 = ["font-size: 14px", "padding: 16px", "margin: 6px 0 6px 0", "color: rgba(238,58,136,1)"].join(";");
	console.log("%cHello World! I'm Emmanuel.", styles);
	console.log("%cThank you for checking out my work!", styles2);
	const gradient = [
		"font-size: 14px",
		"color: #fff",
		"width: 200px",
		"padding: 8px",
		"margin: 6px 0 6px 14px",
		"border-radius: 4px",
		"background: rgba(238,58,136,1)",
		"background: linear-gradient( 109.6deg, rgba(238,58,136,1) 11.2%, rgba(128,162,245,1) 91.1% )",
	].join(";");
	console.log("%cPortfolio%chttps://bit.ly/3QQr1Ux", gradient, styles2);
	console.log("%cLinkedin %chttps://bit.ly/3cygAD4", gradient, styles2);
	console.log("%cGithub   %chttps://bit.ly/3iwQC6U", gradient, styles2);
	console.log("%cThe README   %chttps://bit.ly/3RUOgOb", gradient, styles2);
	console.log("%cHave a wonderful day!", styles2);
}

swRegistration();
consoleText();
