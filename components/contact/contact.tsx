import classes from './contact.module.scss';
import Image from 'next/image';
import Cta from '../cta/cta';
import {CommonProps} from '../../models/common-props.model';
import React, {FormEvent, useRef} from 'react';
import {addMessage} from '../../firebase/store';

const Contact = (props: CommonProps) => {
	
	const nameRef = useRef() as React.MutableRefObject<HTMLInputElement>;
	const emailRef = useRef() as React.MutableRefObject<HTMLInputElement>;
	const messageRef = useRef() as React.MutableRefObject<HTMLTextAreaElement>;
	
	
	const sendMessage = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		
		const email = emailRef.current.value;
		const name = nameRef.current.value;
		const message = messageRef.current.value;
		if (name && message && email) {
			const response = await addMessage({name, email, message});
			clearForm();
			props.setToast(response);
			setTimeout(() => {
				props.setToast(undefined);
			}, 5000);
		}
	};
	
	const clearForm = () => {
		emailRef.current.value = '';
		nameRef.current.value = '';
		messageRef.current.value = '';
	};
	
	
	return (
	  <section 
	    className={`page ${props.loaded ? 'loaded' : ''}`} 
	    id={props.id}
	    itemScope 
	    itemType='https://schema.org/ContactPage'
	    aria-labelledby='contact-heading'
	  >
		  <article className={classes.contentPage}>
			  <aside className={classes.contentInfo} itemScope itemType='https://schema.org/Person' aria-label='Contact Information'>
				  <h2 id='contact-heading' className='sr-only'>Contact Information</h2>
				  <address>
					  <ul role='list' aria-label='Contact methods'>
						  <li className={classes.line} itemProp='email'>
							  <figure className={classes.icon} aria-hidden='true'>
								  <Image src={'/assets/svg/mail.svg'} alt={''} width={32} height={32}/>
							  </figure>
							  <a
								className={classes.text} 
								href='mailto:karmit199@gmail.com' 
								target='_blank' 
								rel='noreferrer'
								itemProp='email'
								aria-label='Send email to karmit199@gmail.com'
							  >
								  karmit199@gmail.com
							  </a>
						  </li>
						  <li className={classes.line} itemProp='telephone'>
							  <figure className={classes.icon} aria-hidden='true'>
								  <Image src={'/assets/svg/phone.svg'} alt={''} width={32} height={32}/>
							  </figure>
							  <a 
								className={classes.text} 
								href='tel:+1-647-575-5240' 
								target='_blank' 
								rel='noreferrer'
								itemProp='telephone'
								aria-label='Call +1-647-575-5240'
							  >
								  +1-647-575-5240
							  </a>
						  </li>
						  <li className={classes.line} itemScope itemType='https://schema.org/PostalAddress'>
							  <figure className={classes.icon} aria-hidden='true'>
								  <Image src={'/assets/svg/location.svg'} alt={''} width={32} height={32}/>
							  </figure>
							  <a
								className={classes.text} 
								href='https://goo.gl/maps/Vyj82w4XdnijGX9o9' 
								target='_blank'
								rel='noreferrer'
								itemProp='address'
								aria-label='View location on Google Maps - Toronto, Canada'
							  >
								  <span itemProp='addressLocality'>Toronto</span>, <span itemProp='addressCountry'>Canada</span>
							  </a>
						  </li>
					  </ul>
				  </address>
			  </aside>
			  <div className={classes.contentForm}>
				  <form onSubmit={sendMessage} itemScope itemType='https://schema.org/ContactForm' aria-labelledby='contact-form-heading'>
					  <h2 id='contact-form-heading'>Get in Touch</h2>
					  <label htmlFor='fullname' className='sr-only'>Your Name</label>
					  <input
					    type='text' 
					    name='fullname' 
					    id='fullname' 
					    placeholder={'What do I call you?'} 
					    ref={nameRef}
					    aria-required='true'
					    aria-label='Enter your full name'
					  />
					  <label htmlFor='email' className='sr-only'>Your Email</label>
					  <input 
					    type='email' 
					    name='email' 
					    id='email' 
					    placeholder={'Maybe an email...'} 
					    ref={emailRef}
					    aria-required='true'
					    aria-label='Enter your email address'
					  />
					  <label htmlFor='message' className='sr-only'>Your Message</label>
					  <textarea 
					    id='message'
					    name='message'
					    placeholder={'Tell me your story and how I can make it better'} 
					    ref={messageRef}
					    aria-required='true'
					    aria-label='Enter your message'
					  />
					  <div className={classes.actionBar}>
						  <Cta theme={'primary'} shape={'full'} type={'submit'} aria-label='Submit contact form'>
							  Shoot Me A Message
							  <span className='material-icons-round' aria-hidden='true'>
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
