import classes from './hero.module.scss';
import Cta from '../cta/cta';
import Image from 'next/image';

const Hero = (props: any) => {
	return (
	  <section className={'page hero'} id={props.id}>
		  <section className={classes.contentPage}>
			  <div className={classes.header}>
				  <h2 className={classes.subtitle}>
					  HI THERE 👋🏻 I'M
				  </h2>
				  <h1 className={classes.title}>
					  Karmit Patel
				  </h1>
			  </div>
			  <div className={classes.content}>
				  <h2 className={classes.title}>
					  FRONTEND DEVELOPER + UI DESIGNER 💻
				  </h2>
				  <p>
					  I’m a Professional Frontend Developer
					  with UI/UX Design Skills based in Toronto.
				  </p>
			  </div>
			  <div className={classes.actionBar}>
				  <Cta theme={'primary'} shape={'full'}>
					  Let's Check It Out
				  </Cta>
			  </div>
		  </section>
		  <Image
			src={'/assets/3d-profile.png'} alt={'3D-Profile'} className={classes.portrait} width={1000} height={1000}
		  />
	  </section>
	);
};

export default Hero;
