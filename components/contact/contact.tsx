import classes from './contact.module.scss';
import Image from 'next/image';
import Cta from '../cta/cta';

const Contact = () => {
	return (
	  <section className={'page'}>
		  <article className={classes.contentPage}>
			  <div className={classes.contentInfo}>
				  <ul>
					  <li className={classes.line}>
						  <div className={classes.icon}>
							  <Image src={'/assets/svg/mail.svg'} alt={'Mail'} width={32} height={32}/>
						  </div>
						  <a
							className={classes.text} href='mailto:karmit199@gmail.com' target='_blank' rel='noreferrer'
						  >
							  karmit199@gmail.com
						  </a>
					  </li>
					  <li className={classes.line}>
						  <div className={classes.icon}>
							  <Image src={'/assets/svg/phone.svg'} alt={'Phone'} width={32} height={32}/>
						  </div>
						  <a className={classes.text} href='tel:+1-647-575-5240' target='_blank' rel='noreferrer'>
							  +1-647-575-5240
						  </a>
					  </li>
					  <li className={classes.line}>
						  <div className={classes.icon}>
							  <Image src={'/assets/svg/location.svg'} alt={'Location'} width={32} height={32}/>
						  </div>
						  <a
							className={classes.text} href='https://goo.gl/maps/Vyj82w4XdnijGX9o9' target='_blank'
							rel='noreferrer'
						  >
							  Toronto, Canada
						  </a>
					  </li>
				  </ul>
			  </div>
			  <div className={classes.contentForm}>
				  <form>
					  <h1>Get in Touch</h1>
					  <input type='text' name='fullname' id='fullname' placeholder={'What do I call you?'}/>
					  <input type='email' name='email' id='email' placeholder={'Maybe an email...'}/>
					  <textarea placeholder={'Tell me your story and how I can make it better'}/>
					  <div className={classes.actionBar}>
						  <Cta theme={'primary'} shape={'full'}>
							  Shoot Me A Message
							  <span className='material-icons-round'>
								  send
							  </span>
						  </Cta>
					  </div>
				  </form>
			  </div>
		  </article>
	  </section>
	);
};

export default Contact;
