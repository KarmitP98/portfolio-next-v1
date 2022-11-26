import type {NextPage} from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.scss';
import Navbar from '../components/navbar/navbar';
import {useState} from 'react';
import {ProjectPropsModel} from '../models/props/project-props.model';
import Project from '../components/project/project';
import {ServicesLanguagesCommonPropsModel} from '../models/props/services-languages-common-props.model';
import ServiceLanguage from '../components/servicelanguage/servicelanguage';
import Strip from '../components/strip/strip';
import Cta from '../components/cta/cta';
import Image from 'next/image';
import Footer from '../components/footer/footer';

const Home: NextPage = () => {
	
	const [activeTab, setActiveTab] = useState('home');
	const [opened, setOpened] = useState(false);
	
	const projects: ProjectPropsModel[] = [
		{
			description: 'Stay connected with your friends and family with a modern, minimalist chat application. It allows sharing your memories with your loved ones with stories.',
			imageName: 'Iphone-Mockup.png',
			title: 'Snazzy Chat',
			projectURL: 'https://github.com/KarmitP98/Snazzy-Chat',
			imageLoad: 'down',
			imageSide: 'end'
		},
		{
			description: 'Check product inventories in real time and plan accordingly. Browse products from a plethora of stores and manage your shopping at the tip of your fingers.',
			imageURL: 'https://firebasestorage.googleapis.com/v0/b/karmitp98.appspot.com/o/MacBook-Mockup.png?alt=media&token=af44fe34-1144-403e-8360-5f8b03783c81',
			title: 'Shoppers Land',
			projectURL: 'https://smart-shoppers-2a1ab.web.app/',
			imageLoad: 'right',
			imageSide: 'start'
		}
	];
	
	const languages: ServicesLanguagesCommonPropsModel = {
		title: 'Languages I work with',
		subtitle: 'YOU KNOW... THE BIG 3!',
		largeCards: [
			{
				title: 'Angular',
				show: true,
				description: 'I apply DRY principal and design reusable components to greatly reduce development time.',
				icon: '/assets/svg/logo-angular.svg',
				theme: 'accent-4'
			},
			{
				title: 'React',
				description: 'I design and develop web applications using modern hook based architecture.',
				theme: 'accent-5',
				show: true,
				icon: '/assets/svg/logo-react.svg'
			},
			{
				title: 'Vue',
				description: 'I design and develop highly responsive web applications to get you up and running quickly.',
				theme: 'accent-1',
				show: true,
				icon: '/assets/svg/logo-vue.svg'
			}
		]
	};
	
	const services: ServicesLanguagesCommonPropsModel = {
		title: 'Services I Provide',
		subtitle: 'DESIGN & DEVELOP',
		largeCards: [
			{
				title: 'Frontend Development',
				show: true,
				description: 'I develop feature rich web application, websites as well as E-Commerce Platform to solve your business needs.',
				icon: '/assets/svg/code.svg',
				theme: 'accent-8'
			},
			{
				title: 'UI / UX Designing',
				description: 'I design eye pleasing and minimalistic Web Fronts that increase conversion rate and user interaction.',
				theme: 'accent-5',
				show: true,
				icon: '/assets/svg/git-branch.svg'
			}
		],
		ctaURL: 'https://github.com/KarmitP98'
	};
	
	return (
	  <div className={styles.container}>
		  <Head>
			  <title>Create Next App</title>
			  <meta name='description' content='Generated by create next app'/>
			  <link rel='icon' href='/favicon.ico'/>
		  </Head>
		
		  <main className={styles.main}>
			  <Navbar active={activeTab} setActive={setActiveTab} opened={opened} setOpened={setOpened}/>
			  <ServiceLanguage {...languages}/>
			  <ServiceLanguage {...services}/>
			  {
				  projects.map((project, index) => <Project {...project} key={project.title + index}/>)
			  }
			  <Strip>
				  <Cta theme={'secondary'} shape={'full'}>
					  See More at
					  <Image src={'/assets/svg/Github.svg'} alt={'Github logo'} width={24} height={24}/>
				  </Cta>
			  </Strip>
		  </main>
		  <Footer/>
	  </div>
	);
};

export default Home;
