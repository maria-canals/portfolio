import chatAppVue from '../src/chatapp-vue.PNG';
import tenderApp from '../src/tenderapp.PNG';
import countryRest from '../src/countryREST.png';
import hangman from '../src/hangman.PNG';
import paperRockScissors from '../src/paper-rock-scissors.PNG';
import musicMap from '../src/musicmap.PNG';

// export const ReactPortfolio = [
// 	{
// 		id: 2,
// 		title: 'React',
// 		img: '',
// 	},
// ];

export const VuePortfolio = [
	{
		id: '1',
		title: 'Tender App',
		gitHub_link: 'https://github.com/Singulars2021/tender',
		demo_link:
			'https://mariacanals23-gmail.tinytake.com/tt/NTE5NTg1NF8xNjI2MTM3Mg',
		description:
			'Tender App is a hybrid app built with Ionic and Vue 3. Its objective is to facilitate the adoption of animals. It was the final project of the front end module of the bootcamp. I took part in several components, including the registration form, the view of your animals and the view of filtering animals. We used Firestore for the backend.',
		img: tenderApp,
		techstack: '#Vue3, #Ionic #Capacitator #Firestore',
		skills: '#PairProgramming #GitWorkflow #workInTeam',
	},
	{
		id: '2',
		title: 'Chat App',
		gitHub_link: 'https://github.com/maria-canals/chatapp.git',
		demo_link: 'https://chatappvue-mariacanals.netlify.app/',
		description:
			"Chat App is an app that I created from scratch for a technical interview. Represents a conversation between a teacher and a student. The biggest challenge was knowing how to conditionally render ether the teacher's message, the file uploaded by the student, or the student's message.",
		skills: '#Vue #SelfLearning',
		img: chatAppVue,
	},
];

export const BackEnd = [
	{
		id: '1',
		title: 'Music Map',
		gitHub_link: 'musicmap',
		demo_link:
			'https://mariacanals23-gmail.tinytake.com/tt/NTUwMjIzMV8xNzE2OTYxMg',
		description:
			'Music Map is the app I participated in the backend module in the bootcamp. Its main objective is to showcase the top 10 of the country that you clicked. It gets the data from the Spotify APi. The global top ten is also shown. I took part in the view which the map is imported, we use leaflet.',
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
			'You can search the country by its name, You can filter them by their region. ',
			'It has a responsive design, mobile first design. ',
			'When clicking on the letter of the country, a modal opens which shows more information about the country. ',
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
	{
		id: '3',
		title: 'Hangman',
		gitHub_link: 'https://github.com/maria-canals/hangman.git',
		demo_link: 'https://hangman-mariacanals.netlify.app/',
		description:
			'Music Map is the app I participated in the backend module in the bootcamp. Its main purpose is that when you click on a country on the map, you get the top 10 of the country from the Spotify APi. The global top ten is also shown. I took part in the view which the map is imported, we use leaflet.',
		techstack: '#HTML #CSSS #JAVSCRIPT',
		img: hangman,
	},
];
