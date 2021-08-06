import chatAppVue from '../assets/chatapp-vue.PNG';
import tenderApp from '../assets/tenderapp.PNG';
import countryRest from '../assets/countryREST.png';
import paperRockScissors from '../assets/paper-rock-scissors.PNG';
import musicMap from '../assets/musicmap.PNG';
import heroeApp from '../assets/heroapp.PNG';
import calendar from '../assets/Calendar.PNG';

import react from '../assets/stack/react.png';
import node from '../assets/stack/nodejs.png';
import jest from '../assets/stack/jest.png';
import express from '../assets/stack/express.png';
import mongodb from '../assets/stack/mongodb.png';
import vue from '../assets/stack/vue.png';
import ionic from '../assets/stack/ionic.png';
import firebase from '../assets/stack/firebase.png';
import redux from '../assets/stack/redux.png';
import animationcss from '../assets/stack/animationcss.png';
import mysql from '../assets/stack/mysql.png';
import html from '../assets/stack/html.png';
import css from '../assets/stack/css.png';
import javascript from '../assets/stack/javascript.png';

export const ReactPortfolio = [
	{
		id: 1,
		title: 'Mern calendar',
		img: calendar,
		demo_link: 'https://mern-calendar-maria.herokuapp.com/',
		gitHub_link:
			'https://github.com/maria-canals/React-from-0-to-expert/tree/main/09-calendar',
		description: [
			'Create your account or log in to add a note for your next event. A project built with react, with data persistence thanks to MongoDB.',
			"The use of Redux facilitates the handling of the states among all the components. JWT keeps the user's session and the last view.",
		],
		stack: [
			{ technology: react, alt: 'react', key: '1' },
			{ technology: node, alt: 'node', key: '2' },
			{ technology: express, alt: 'express', key: '3' },
			{ technology: mongodb, alt: 'mongodb', key: '4' },
			{ technology: jest, alt: 'jest', key: '5' },
			{ technology: redux, alt: 'redux', key: '6' },
		],
	},
	{
		id: 2,
		title: 'Heroes App',
		img: heroeApp,
		demo_link: 'https://heroesapp-mariacanals.herokuapp.com/login',
		gitHub_link: 'https://github.com/maria-canals/heroes-app',
		description: [
			'Log in and find your favorite hero. Build with React Hooks and React Router.',
			'Tested with Jest.',
		],
		stack: [
			{ technology: react, alt: 'react', key: '1' },
			{ technology: jest, alt: 'jest', key: '2' },
			{ technology: animationcss, alt: 'animationcss', key: '3' },
		],
	},
];

export const VuePortfolio = [
	{
		id: '1',
		title: 'Tender App',
		gitHub_link: 'https://github.com/Singulars2021/tender',
		demo_link:
			'https://mariacanals23-gmail.tinytake.com/tt/NTE5NTg1NF8xNjI2MTM3Mg',
		description: [
			'Tender App is a hybrid app built with Ionic and Vue 3. Its objective is to facilitate the adoption of animals. It was the final project of the front end module of the bootcamp. ',
			'I took part in the development of several components, including the registration form, the view of your animals and the view of filtering animals. We used Firestore for the backend.',
		],
		img: tenderApp,
		stack: [
			{ technology: vue, alt: 'vue', key: '1' },
			{ technology: ionic, alt: 'ionic', key: '2' },
			{ technology: firebase, alt: 'firebase', key: '3' },
		],
	},
	{
		id: '2',
		title: 'Chat App',
		gitHub_link: 'https://github.com/maria-canals/chatapp.git',
		demo_link: 'https://chatappvue-mariacanals.netlify.app/',
		description: [
			'Chat App is a component that I created from scratch for a technical interview. Represents a conversation between a teacher and a student.',
			"The biggest challenge was knowing how to conditionally render either the teacher's message, the file uploaded by the student, or the student's message.",
		],
		img: chatAppVue,
		stack: [{ technology: vue, alt: 'vue', key: '1' }],
	},
];

export const NodejsExpress = [
	{
		id: '1',
		title: 'Music Map',
		gitHub_link: 'musicmap',
		demo_link:
			'https://mariacanals23-gmail.tinytake.com/tt/NTUwMjIzMV8xNzE2OTYxMg',
		description: [
			'Music Map is the backend project for the bootcamp. Its main objective is to showcase the top 10 of the country that you clicked',
			'It gets the data from the Spotify APi. The global top ten is also shown. I took part in the map view. We use leaflet to import it.',
		],
		img: musicMap,
		stack: [
			{ technology: node, alt: 'node', key: '1' },
			{ technology: express, alt: 'express', key: '2' },
			{ technology: mongodb, alt: 'mongodb', key: '3' },
			{ technology: mysql, alt: 'mysql', key: '4' },
		],
	},
];

export const JavascriptPortfolio = [
	{
		id: '1',
		title: 'Countries Rest Api',
		gitHub_link: 'https://github.com/maria-canals/countries-rest-api.git',
		demo_link: 'https://countries-rest-api-mc.netlify.app/',
		description: [
			'This app has the purpose of showing all the countries of the world. Built with HTML, CSS, BOOTSTRAP 5 and JAVASCRIPT. It consumes an external API. Some of its main features are:',
			'You can change the theme to dark., You can search the country by its name. You can filter them by their region.',
			'It has a responsive design, mobile first design. ',
			'When clicking on a card, a modal opens showing more information about the country.',
		],
		techstack: '#HTML #CSSS #JAVSCRIPT',
		img: countryRest,
		stack: [
			{ technology: html, alt: 'html', key: '1' },
			{ technology: css, alt: 'css', key: '2' },
			{ technology: javascript, alt: 'javascript', key: '3' },
		],
	},
	{
		id: '2',
		title: 'Paper Rock Scisors',
		demo_link: 'https://paper-rock-scissors-mariacanalsm.netlify.app/',
		gitHub_link: 'https://github.com/maria-canals/paper-rock-scissors.git',
		description: [
			'I created this app to practice Algorithmia. It consists of the well-known rock-paper-scissors game. Created with HTML, CSS and Vanilla Javascript.',
		],
		stack: [
			{ technology: html, alt: 'html', key: '1' },
			{ technology: css, alt: 'css', key: '2' },
			{ technology: javascript, alt: 'javascript', key: '3' },
		],

		img: paperRockScissors,
	},
];
