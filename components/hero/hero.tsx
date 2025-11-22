import classes from './hero.module.scss';
import Cta from '../cta/cta';
import Image from 'next/image';

const Hero = (props: any) => {
	return (
	  <header className={`page hero ${props.loaded ? 'loaded' : ''}`} id={props.id} role='banner' itemScope itemType='https://schema.org/Person'>
		  <section className={classes.contentPage}>
			  <div className={classes.header}>
				  <p className={classes.subtitle} role='text' aria-label='Greeting'>
					  HI THERE 👋🏻 I&apos;M
				  </p>
				  <h1 className={classes.title} itemProp='name'>
					  Karmit Patel
				  </h1>
			  </div>
			  <div className={classes.content}>
				  <h2 className={classes.title} itemProp='jobTitle'>
					  FRONTEND DEVELOPER + UI DESIGNER 💻
				  </h2>
				  <p itemProp='description'>
					  I'm a Professional Frontend Developer
					  with UI/UX Design Skills based in Toronto.
				  </p>
			  </div>
			  <nav className={classes.actionBar} aria-label='Primary Navigation'>
				  <a href='#about' aria-label='Navigate to About section'>
					  <Cta theme={'primary'} shape={'full'}>
						  Let&apos;s Check It Out
						  <span className='material-icons-round' aria-hidden='true'>
							  expand_more
						  </span>
					  </Cta>
				  </a>
			  </nav>
		  </section>
		  <figure className={classes.portrait}>
			  <Image
			    src={'/assets/3d-profile.png'} 
			    alt={'Karmit Patel - Frontend Developer and UI/UX Designer professional portrait'} 
			    className={classes.portraitImage} 
			    width={700} 
			    height={700}
			    itemProp='image'
			    priority
			  />
		  </figure>
	  </header>
	);
};

export default Hero;
