import classes from './contact.module.scss';
import Image from 'next/image';
import Cta from '../cta/cta';
import {CommonProps} from '../../models/common-props.model';
import React, {FormEvent, useRef, useState} from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const Contact = (props: CommonProps) => {
	
	const [showToast, setShowToast] = useState(false);
	const nameRef = useRef() as React.MutableRefObject<HTMLInputElement>;
	const emailRef = useRef() as React.MutableRefObject<HTMLInputElement>;
	const messageRef = useRef() as React.MutableRefObject<HTMLTextAreaElement>;
	
	const firebaseConfig = {
		apiKey: process.env.NEXT_PUBLIC_APIKEY,
		authDomain: process.env.NEXT_PUBLIC_AUTHDOMAIN,
		projectId: process.env.NEXT_PUBLIC_PROJECTID,
		storageBucket: process.env.NEXT_PUBLIC_STORAGEBUCKET,
		messagingSenderId: process.env.NEXT_PUBLIC_MESSAGINGSENDERID,
		appId: process.env.NEXT_PUBLIC_APPID,
		measurementId: process.env.NEXT_PUBLIC_MEASUREMENTID
	};
	
	const app = firebase.initializeApp(firebaseConfig);
	const firestore = app.firestore();
	
	const sendMessage = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		
		const email = emailRef.current.value;
		const name = nameRef.current.value;
		const message = messageRef.current.value;
		if (name && message && email) {
			await firestore.collection('messages').add({email, name, message});
			emailRef.current.value = '';
			nameRef.current.value = '';
			messageRef.current.value = '';
			setShowToast(true);
			setTimeout(() => {
				setShowToast(false);
			}, 5000);
		}
		
	};
	
	
	return (
	  <section className={`page ${props.loaded ? 'loaded' : ''}`} id={props.id}>
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
				  <form onSubmit={sendMessage}>
					  <h1>Get in Touch</h1>
					  <input
					    type='text' name='fullname' id='fullname' placeholder={'What do I call you?'} ref={nameRef}
					  />
					  <input type='email' name='email' id='email' placeholder={'Maybe an email...'} ref={emailRef}/>
					  <textarea placeholder={'Tell me your story and how I can make it better'} ref={messageRef}/>
					  <div className={classes.actionBar}>
						  <Cta theme={'primary'} shape={'full'} type={'submit'}>
							  Shoot Me A Message
							  <span className='material-icons-round'>
								  send
							  </span>
						  </Cta>
					  </div>
				  </form>
			  </div>
			  <div className={`${classes.toast} ${showToast ? classes.show : ''}`}>
				  Your message has been delivered!
			  </div>
		  </article>
	  </section>
	);
};

export default Contact;
