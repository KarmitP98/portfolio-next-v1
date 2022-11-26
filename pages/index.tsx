import type {NextPage} from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.scss';
import Navbar from '../components/navbar/navbar';
import {useEffect, useState} from 'react';
import {ProjectPropsModel} from '../models/props/project-props.model';
import Project from '../components/project/project';
import {ServicesLanguagesCommonPropsModel} from '../models/props/services-languages-common-props.model';
import ServiceLanguage from '../components/servicelanguage/servicelanguage';
import Strip from '../components/strip/strip';
import Cta from '../components/cta/cta';
import Image from 'next/image';
import Footer from '../components/footer/footer';
import Hero from '../components/hero/hero';
import Contact from '../components/contact/contact';

const Home: NextPage = () => {
	
	const [activeTab, setActiveTab] = useState('home');
	const [opened, setOpened] = useState(false);
	
	const navigateTo = (id: string) => {
		const page = getElement(id);
		let time = 0;
		if (opened) {
			setOpened(false);
			time = 250;
		}
		setTimeout(() => {
			page?.scrollIntoView({behavior: 'smooth', block: 'start'});
		}, time);
	};
	useEffect(() => {
		
		window.onscroll = () => {
			const scrollY = window.scrollY;
			
			const pages: { id: string, box: DOMRect | undefined }[] = [
				{
					id: 'contact', box: getElement('contact')?.getBoundingClientRect()
				},
				{
					id: 'projects', box: getElement('projects')?.getBoundingClientRect()
				},
				{
					id: 'services', box: getElement('services')?.getBoundingClientRect()
				},
				{
					id: 'about', box: getElement('about')?.getBoundingClientRect()
				}, {
					id: 'home', box: getElement('home')?.getBoundingClientRect()
				}
			];
			
			const activeTab = pages.find(page => -(page!.box!.top) >= 0)?.id || 'home';
			setActiveTab(activeTab);
		};
	});
	
	const getElement = (id: string) => document.getElementById(id);
	
	const projects: ProjectPropsModel[] = [
		{
			description: 'Stay connected with your friends and family with a modern, minimalist chat application. It allows sharing your memories with your loved ones with stories.',
			imageName: 'Iphone-Mockup.png',
			title: 'Snazzy Chat',
			projectURL: 'https://github.com/KarmitP98/Snazzy-Chat',
			imageLoad: 'down',
			imageSide: 'end',
			id: 'projects'
		},
		{
			description: 'Check product inventories in real time and plan accordingly. Browse products from a plethora of stores and manage your shopping at the tip of your fingers.',
			imageURL: 'https://firebasestorage.googleapis.com/v0/b/karmitp98.appspot.com/o/MacBook-Mockup.png?alt=media&token=af44fe34-1144-403e-8360-5f8b03783c81',
			title: 'Shoppers Land',
			projectURL: 'https://smart-shoppers-2a1ab.web.app/',
			imageLoad: 'right',
			imageSide: 'start',
			id: 'project2'
		}
	];
	
	const aboutMe: ProjectPropsModel = {
		title: 'Who am I?',
		imageSide: 'start',
		imageLoad: 'right',
		imageURL: '/assets/profile-pic.png',
		projectURL: 'https://www.linkedin.com/in/karmitpatel/',
		description: 'I am a Frontend Web Developer who also likes to design UI for web and mobile applications. I work on designing eye pleasing minimalistic designs using geometric, isometric shapes and micro-animations. I aspire to become a full stack developer and develop high class web applications for the world to enjoy!',
		ctaLabel: 'Find Out More'
	};
	
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
			  <link rel='icon' href='/favicon.ico'/>
			
			  <meta charSet='utf-8'/>
			  <meta content='width=device-width, initial-scale=1' name='viewport'/>
			  <meta content='#FFE240' name='theme-color'/>
			  <meta content='Personal portfolio website for Karmit Patel.' name='description'/>
			  <link href='/assets/logo192.png' rel='apple-touch-icon'/>
			
			  <meta content='Karmit Patel Portfolio' property='og:title'/>
			  <meta content='https://karmitp.com/' property='og:url'/>
			  <meta
			    content='Karmit Patel portfolio website. Learn more about my work, experiences, skills, awards, and intersets.'
			    property='og:description'
			  />
			  <meta content='Karmit Patel' property='article:author'/>
			  <meta content='Karmit Patel Portfolio' property='og:site_name'/>
			  <meta
			    content='https://firebasestorage.googleapis.com/v0/b/karmitp98.appspot.com/o/meta-screenshot.png?alt=media&token=f21c3c0f-d159-470e-ab2d-52fa746527c2'
			    property='og:image'
			  />
			  <title>Karmit Patel - Frontend & UI/UX</title>
		  </Head>
		
		  <main className={styles.main}>
			  <Navbar
			    active={activeTab} setActive={setActiveTab} opened={opened} setOpened={setOpened}
			    navigateTo={navigateTo}
			  />
			  <Hero id={'home'}/>
			  <Project {...aboutMe} name={'about'} id={'about'}/>
			  <ServiceLanguage {...languages} id={'services'}/>
			  <ServiceLanguage {...services} id={'languages'}/>
			  {
				  projects.map((project, index) => <Project {...project} key={project.title + index}/>)
			  }
			  <Strip>
				  <Cta theme={'secondary'} shape={'full'}>
					  See More at
					  <Image src={'/assets/svg/Github.svg'} alt={'Github logo'} width={24} height={24}/>
				  </Cta>
			  </Strip>
			  <Contact id={'contact'}/>
		  </main>
		  <Footer/>
	  </div>
	);
};

export default Home;
