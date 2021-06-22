import chatAppVue from '../src/chatapp-vue.PNG';
import tenderApp from '../src/tenderapp.PNG';
import countryRest from '../src/countryREST.png';
// import hangman from '../src/hangman.PNG';
import paperRockScissors from '../src/paper-rock-scissors.PNG';
import musicMap from '../src/musicmap.PNG';
import heroeApp from '../src/heroapp.PNG';

export const ReactPortfolio = [
	{
		id: 2,
		title: 'Heroes App',
		img: heroeApp,
		demo_link: 'https://heroesapp-mariacanals.herokuapp.com/login',
		gitHub_link: 'https://github.com/maria-canals/heroes-app',
		description: 'Log in and find your favorite hero. Build with React Hooks and React Router, tested with Jest.',
		techstack: '#React #React Hooks #Jest #AnimationCSS #React Router',
	},
	
];

export const VuePortfolio = [
	{
		id: '1',
		title: 'Tender App',
		gitHub_link: 'https://github.com/Singulars2021/tender',
		demo_link:
			'https://mariacanals23-gmail.tinytake.com/tt/NTE5NTg1NF8xNjI2MTM3Mg',
		description:
			'Tender App is a hybrid app built with Ionic and Vue 3. Its objective is to facilitate the adoption of animals. It was the final project of the front end module of the bootcamp. I took part in the development of several components, including the registration form, the view of your animals and the view of filtering animals. We used Firestore for the backend.',
		img: tenderApp,
		techstack: '#Vue3, #VueRouter #Vuex #Ionic #Capacitator #Firestore',
		skills: '#PairProgramming #GitWorkflow #workInTeam',
	},
	{
		id: '2',
		title: 'Chat App',
		gitHub_link: 'https://github.com/maria-canals/chatapp.git',
		demo_link: 'https://chatappvue-mariacanals.netlify.app/',
		description:
			"Chat App is an app that I created from scratch for a technical interview. Represents a conversation between a teacher and a student. The biggest challenge was knowing how to conditionally render either the teacher's message, the file uploaded by the student, or the student's message.",
		skills: '#Vue3 #SelfLearning',
		img: chatAppVue,
	},
];

export const NodejsExpress = [
	{
		id: '1',
		title: 'Music Map',
		gitHub_link: 'musicmap',
		demo_link:
			'https://mariacanals23-gmail.tinytake.com/tt/NTUwMjIzMV8xNzE2OTYxMg',
		description:
			'Music Map is the backend project for the bootcamp. Its main objective is to showcase the top 10 of the country that you clicked. It gets the data from the Spotify APi. The global top ten is also shown. I took part in the map view. We use leaflet to import it.',
		techstack: '#Nodejs #Express #MVC #MongoDB #Passport #Ejs #MongoDB #MySql',
		skills: '#PairProgramming #GitWorkflow #workInTeam',
		img: musicMap,
	},
];

export const JavascriptPortfolio = [
	{
		id: '1',
		title: 'Country Rest Api',
		gitHub_link: 'https://github.com/maria-canals/countries-rest-api.git',
		demo_link: 'https://countryrest-api-mariacanals.netlify.app/',
		description:
			'This app has the purpose of showing all the countries of the world. Built with HTML, CSS, BOOTSTRAP 5 and JAVASCRIPT. It consumes an external API. Some of its main features are:',
		description_list: [
			'You can change the theme to dark. ',
			'You can search the country by its name. You can filter them by their region. ',
			'It has a responsive design, mobile first design. ',
			'When clicking on a card, a modal opens showing more information about the country. ',
		],
		techstack: '#HTML #CSSS #JAVSCRIPT',
		img: countryRest,
	},
	{
		id: '2',
		title: 'Paper Rock Scisors',
		demo_link: 'https://paper-rock-scissors-mariacanalsm.netlify.app/',
		gitHub_link: 'https://github.com/maria-canals/paper-rock-scissors.git',
		description:
			'I created this app to practice logic. It consists of the well-known rock-paper-scissors game. Created with HTML, CSS and Vanilla Javascript.',
		techstack: '#HTML #CSSS #JAVSCRIPT',

		img: paperRockScissors,
	},
	
];
