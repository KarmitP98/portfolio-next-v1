import type {NextPage} from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.scss';
import Navbar from '../components/navbar/navbar';
import React, {useEffect, useState} from 'react';
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
import {
	generatePersonSchema,
	generateWebSiteSchema,
	generateOrganizationSchema,
	generateProfilePageSchema
} from '../utils/structured-data';

const Home: NextPage = () => {
	
	const [activeTab, setActiveTab] = useState('home');
	const [opened, setOpened] = useState(false);
	const [scroll, setScroll] = useState(0);
	const [innerHeight, setInnerHeight] = useState(0);
	const [toast, setToast] = useState({success: false, message: ''});
	const [curtains, setCurtains] = useState(false);
	
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
		setTimeout(() => {
			setCurtains(true);
		}, 2_500);
	}, []);
	
	
	useEffect(() => {
		setInnerHeight(window.innerHeight);
		setScroll(window.scrollY);
		
		window.onscroll = () => {
			setScroll(window.scrollY);
			
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
			
			const activeTab = pages.find(page => -(page!.box!.top) >= (-innerHeight * 0.45))?.id || 'home';
			setActiveTab(activeTab);
		};
	}, [innerHeight]);
	
	const getElement = (id: string) => document.getElementById(id);
	
	const isPageLoaded = (pageNumber: number) => {
		return scroll >= innerHeight * ((pageNumber - 1) - 0.45);
	};
	
	const projects: ProjectPropsModel[] = [
		{
			description: 'Stay connected with your friends and family with a modern, minimalist chat application. It allows sharing your memories with your loved ones with stories.',
			imageName: 'Iphone-Mockup.png',
			title: 'Snazzy Chat',
			projectURL: 'https://github.com/KarmitP98/Snazzy-Chat',
			imageLoad: 'down',
			imageSide: 'end',
			id: 'projects',
			loaded: isPageLoaded(5)
		},
		{
			description: 'Check product inventories in real time and plan accordingly. Browse products from a plethora of stores and manage your shopping at the tip of your fingers.',
			imageURL: 'https://firebasestorage.googleapis.com/v0/b/karmitp98.appspot.com/o/MacBook-Mockup.png?alt=media&token=af44fe34-1144-403e-8360-5f8b03783c81',
			title: 'Shoppers Land',
			projectURL: 'https://smart-shoppers-2a1ab.web.app/',
			imageLoad: 'right',
			imageSide: 'start',
			id: 'project2',
			loaded: isPageLoaded(6)
		}
	];
	
	const aboutMe: ProjectPropsModel = {
		title: 'Who am I?',
		imageSide: 'start',
		imageLoad: 'right',
		imageURL: '/assets/profile-pic.png',
		projectURL: 'https://www.linkedin.com/in/karmitpatel/',
		description: 'I am a Frontend Web Developer who also likes to design UI for web and mobile applications. I work on designing eye pleasing minimalistic designs using geometric, isometric shapes and micro-animations. I aspire to become a full stack developer and develop high class web applications for the world to enjoy!',
		ctaLabel: 'Find Out More',
		loaded: isPageLoaded(2)
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
		],
		loaded: isPageLoaded(3)
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
		ctaURL: 'https://github.com/KarmitP98',
		loaded: isPageLoaded(4)
	};
	
	
	const siteUrl = 'https://karmitp.com/';
	const siteName = 'Karmit Patel Portfolio';
	const siteDescription = 'Karmit Patel is a professional Frontend Developer and UI/UX Designer based in Toronto. Specializing in React, Angular, and Vue.js development with expertise in creating modern, responsive web applications and e-commerce platforms.';
	const authorName = 'Karmit Patel';
	const ogImage = 'https://firebasestorage.googleapis.com/v0/b/karmitp98.appspot.com/o/meta-screenshot.png?alt=media&token=f21c3c0f-d159-470e-ab2d-52fa746527c2';
	
	const linkedInUrl = 'https://www.linkedin.com/in/karmitpatel/';
	const githubUrl = 'https://github.com/KarmitP98';
	const stackOverflowUrl = 'https://stackoverflow.com/users/9695681/karmit-patel';
	const figmaUrl = 'https://www.figma.com/@karmitpatel';
	const facebookUrl = 'https://www.facebook.com/karmit1998';
	
	const programmingLanguages = [
		'JavaScript',
		'TypeScript',
		'HTML5',
		'CSS3',
		'Java',
		'C#'
	];
	
	const frameworks = [
		'React',
		'Angular',
		'Vue.js',
		'Next.js'
	];
	
	const applications = [
		'Figma',
		'Firebase',
		'Git',
		'GitHub',
		'Visual Studio Code',
		'Adobe Creative Suite'
	];
	
	const allSkills = [
		'Frontend Development',
		'UI/UX Design',
		'Web Development',
		'E-Commerce Development',
		'Responsive Design',
		'Component-Based Architecture',
		'RESTful APIs',
		'State Management',
		'Micro-animations',
		'Minimalistic Design',
		'Geometric Design',
		'Isometric Design',
		'Mobile-First Development',
		'Progressive Web Apps',
		'Performance Optimization'
	];
	
	const personSchema = generatePersonSchema({
		name: authorName,
		jobTitle: 'Frontend Developer & UI/UX Designer',
		description: siteDescription,
		url: siteUrl,
		image: ogImage,
		socialProfiles: [
			linkedInUrl,
			githubUrl,
			stackOverflowUrl,
			figmaUrl,
			facebookUrl
		],
		skills: allSkills,
		programmingLanguages: programmingLanguages,
		frameworks: frameworks,
		applications: applications,
		linkedInUrl: linkedInUrl,
		location: {
			city: 'Toronto',
			region: 'Ontario',
			country: 'Canada'
		}
	});
	
	const webSiteSchema = generateWebSiteSchema({
		name: siteName,
		url: siteUrl,
		description: siteDescription,
		authorName: authorName
	});
	
	const organizationSchema = generateOrganizationSchema({
		name: siteName,
		url: siteUrl,
		logo: ogImage,
		description: siteDescription
	});
	
	const profilePageSchema = generateProfilePageSchema({
		name: `${authorName} - Professional Profile`,
		url: siteUrl,
		description: `${siteDescription} Connect on LinkedIn: ${linkedInUrl}`,
		personName: authorName,
		jobTitle: 'Frontend Developer & UI/UX Designer',
		personUrl: siteUrl,
		socialProfiles: [
			linkedInUrl,
			githubUrl,
			stackOverflowUrl,
			figmaUrl,
			facebookUrl
		]
	});
	
	return (
	  <div className={styles.container} itemScope itemType='https://schema.org/Person'>
		  <Head>
			  <link rel='icon' href='/favicon.ico'/>
			  <link rel='canonical' href={siteUrl}/>
			
			  <meta charSet='utf-8'/>
			  <meta content='width=device-width, initial-scale=1' name='viewport'/>
			  <meta content='#FFE240' name='theme-color'/>
			  
			  <title>Karmit Patel - Frontend Developer & UI/UX Designer | Portfolio</title>
			  <meta name='description' content={siteDescription}/>
			  <meta name='keywords' content={`Frontend Developer, UI/UX Designer, React Developer, Angular Developer, Vue.js Developer, Web Developer, Toronto, Next.js, TypeScript, JavaScript, Portfolio, E-Commerce Developer, ${programmingLanguages.join(', ')}, ${frameworks.join(', ')}, ${applications.join(', ')}, LinkedIn: ${linkedInUrl}`}/>
			  <meta name='author' content={authorName}/>
			  <meta name='robots' content='index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'/>
			  <meta name='language' content='English'/>
			  <meta name='geo.region' content='CA-ON'/>
			  <meta name='geo.placename' content='Toronto'/>
			  <meta name='geo.position' content='43.6532;-79.3832'/>
			  
			  <meta name='programming-languages' content={programmingLanguages.join(', ')}/>
			  <meta name='frameworks' content={frameworks.join(', ')}/>
			  <meta name='applications' content={applications.join(', ')}/>
			  <meta name='linkedin' content={linkedInUrl}/>
			  <meta name='github' content={githubUrl}/>
			  <meta name='stackoverflow' content={stackOverflowUrl}/>
			  <meta name='figma' content={figmaUrl}/>
			  <meta name='facebook' content={facebookUrl}/>
			  <meta name='skills' content={allSkills.join(', ')}/>
			  
			  <link href='/assets/logo192.png' rel='apple-touch-icon'/>
			
			  <meta property='og:type' content='website'/>
			  <meta property='og:title' content={`${authorName} - Frontend Developer & UI/UX Designer | Portfolio`}/>
			  <meta property='og:url' content={siteUrl}/>
			  <meta property='og:description' content={siteDescription}/>
			  <meta property='og:site_name' content={siteName}/>
			  <meta property='og:image' content={ogImage}/>
			  <meta property='og:image:width' content='1200'/>
			  <meta property='og:image:height' content='630'/>
			  <meta property='og:image:alt' content={`${authorName} Portfolio Website`}/>
			  <meta property='og:locale' content='en_US'/>
			  <meta property='article:author' content={authorName}/>
			  <meta property='profile:first_name' content='Karmit'/>
			  <meta property='profile:last_name' content='Patel'/>
			  <meta property='profile:username' content='karmitpatel'/>
			  
			  <meta name='linkedin:owner' content={linkedInUrl}/>
			  <meta name='linkedin:profile' content={linkedInUrl}/>
			  
			  <meta name='twitter:card' content='summary_large_image'/>
			  <meta name='twitter:site' content='@karmitpatel'/>
			  <meta name='twitter:creator' content='@karmitpatel'/>
			  <meta name='twitter:title' content={`${authorName} - Frontend Developer & UI/UX Designer`}/>
			  <meta name='twitter:description' content={siteDescription}/>
			  <meta name='twitter:image' content={ogImage}/>
			  <meta name='twitter:image:alt' content={`${authorName} Portfolio Website`}/>
			  
			  <script
			    type='application/ld+json'
			    dangerouslySetInnerHTML={{__html: JSON.stringify(personSchema)}}
			  />
			  <script
			    type='application/ld+json'
			    dangerouslySetInnerHTML={{__html: JSON.stringify(webSiteSchema)}}
			  />
			  <script
			    type='application/ld+json'
			    dangerouslySetInnerHTML={{__html: JSON.stringify(organizationSchema)}}
			  />
			  <script
			    type='application/ld+json'
			    dangerouslySetInnerHTML={{__html: JSON.stringify(profilePageSchema)}}
			  />
		  </Head>
		
		  <a href='#main-content' className='skip-to-main'>
			  Skip to main content
		  </a>
		  <main id='main-content' className={styles.main} role='main' tabIndex={-1}>
			  <Navbar
			    active={activeTab} setActive={setActiveTab} opened={opened} setOpened={setOpened}
			    navigateTo={navigateTo}
			  />
			  <Hero id={'home'} loaded={true}/>
			  <article itemScope itemType='https://schema.org/AboutPage' aria-labelledby='about-heading'>
				  <Project {...aboutMe} name={'about'} id={'about'}/>
			  </article>
			  <section itemScope itemType='https://schema.org/ItemList' aria-labelledby='services-heading'>
				  <ServiceLanguage {...languages} id={'services'}/>
			  </section>
			  <section itemScope itemType='https://schema.org/Service' aria-labelledby='languages-heading'>
				  <ServiceLanguage {...services} id={'languages'}/>
			  </section>
			  <section itemScope itemType='https://schema.org/ItemList' aria-labelledby='projects-heading'>
				  <h2 id='projects-heading' className='sr-only'>Portfolio Projects</h2>
				  {
					  projects.map((project, index) => <Project {...project} key={project.title + index}/>)
				  }
			  </section>
			  <aside role='complementary' aria-label='Additional Resources'>
				  <Strip>
					  <Cta theme={'secondary'} shape={'full'}>
						  See More at
						  <Image src={'/assets/svg/Github.svg'} alt={'Github logo - View more projects on GitHub'} width={24} height={24}/>
					  </Cta>
				  </Strip>
			  </aside>
			  <Contact id={'contact'} loaded={true} setToast={setToast}/>
			  <div className={`${styles.curtains} ${curtains ? styles.open : ''}`}>
				  <p className={styles.message}>Loading website...</p>
				  <div className={styles.cube}>
					  <div></div>
					  <div></div>
					  <div></div>
					  <div></div>
					  <div></div>
					  <div></div>
				  </div>
			  </div>
		  </main>
		  <Footer/>
		  <div 
		    className={`${styles.toast} ${toast && toast.message ? styles.show : ''}`}
		    role='alert'
		    aria-live='polite'
		    aria-atomic='true'
		  >
			  {
			    toast && toast.message.length &&
				  <>
					<h3>
					    {toast.success ? 'Success' : 'Error'}
					</h3>
					<p>
					    {toast.message}
					</p>
				  </>
			  }
		  </div>
	  </div>
	);
};

export default Home;
