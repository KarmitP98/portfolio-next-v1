import classes from './contact.module.scss';
import Image from 'next/image';
import Cta from '../cta/cta';
import {CommonProps} from '../../models/common-props.model';
import React, {FormEvent, useRef, useState} from 'react';
import {addMessage} from '../../firebase/store';
import {useTheme} from '../../context/ThemeContext';

const Contact = (props: CommonProps) => {

	const {theme} = useTheme();
	const [isLoading, setIsLoading] = useState(false);
	const nameRef = useRef() as React.MutableRefObject<HTMLInputElement>;
	const emailRef = useRef() as React.MutableRefObject<HTMLInputElement>;
	const messageRef = useRef() as React.MutableRefObject<HTMLTextAreaElement>;


	const sendMessage = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const email = emailRef.current.value;
		const name = nameRef.current.value;
		const message = messageRef.current.value;
		if (name && message && email) {
			setIsLoading(true);
			try {
				const response = await addMessage({name, email, message});
				clearForm();
				props.setToast(response);
				setTimeout(() => {
					props.setToast(undefined);
				}, 5000);
			} finally {
				setIsLoading(false);
			}
		}
	};

	const clearForm = () => {
		emailRef.current.value = '';
		nameRef.current.value = '';
		messageRef.current.value = '';
	};


	return (
	  <section className={`page ${props.loaded ? 'loaded' : ''}`} id={props.id}>
		  <article className={classes.contentPage}>
			  <div className={classes.contentInfo}>
				  <ul>
					  <li className={classes.line}>
						  <div className={classes.icon}>
							  <Image src={`/assets/svg/${theme}/mail.svg`} alt={'Mail'} width={32} height={32}/>
						  </div>
						  <a
							className={classes.text} href='mailto:karmit199@gmail.com' target='_blank' rel='noreferrer'
						  >
							  karmit199@gmail.com
						  </a>
					  </li>
					  <li className={classes.line}>
						  <div className={classes.icon}>
							  <Image src={`/assets/svg/${theme}/phone.svg`} alt={'Phone'} width={32} height={32}/>
						  </div>
						  <a className={classes.text} href='tel:+1-647-575-5240' target='_blank' rel='noreferrer'>
							  +1-647-575-5240
						  </a>
					  </li>
					  <li className={classes.line}>
						  <div className={classes.icon}>
							  <Image src={`/assets/svg/${theme}/location.svg`} alt={'Location'} width={32} height={32}/>
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
				  <form onSubmit={sendMessage}>
					  <h1>Get in Touch</h1>
					  <input
						  type='text' name='fullname' id='fullname' placeholder={'What do I call you?'} ref={nameRef}
						  autoComplete={'given-name'}
						  disabled={isLoading}
					  />
					  <input type='email' name='email' id='email' placeholder={'Maybe an email...'} ref={emailRef}
							 autoComplete={'email'} disabled={isLoading}/>
					  <textarea placeholder={'Tell me your story and how I can make it better'} ref={messageRef}
								disabled={isLoading}/>
					  <div className={classes.actionBar}>
						  <Cta theme={'primary'} shape={'full'} type={'submit'} disabled={isLoading}>
							  {isLoading ? (
								  <>
									<span className={`material-icons-round ${classes.spinner}`}>
										refresh
									</span>
									  Sending...
								  </>
							  ) : (
								  <>
									  Shoot Me A Message
									  <span className='material-icons-round'>
										send
									</span>
								  </>
							  )}
						  </Cta>
					  </div>
				  </form>
			  </div>
		  </article>
	  </section>
	);
};

export default Contact;
