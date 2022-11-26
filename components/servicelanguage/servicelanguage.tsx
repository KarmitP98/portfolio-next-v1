import {ServicesLanguagesCommonPropsModel} from '../../models/props/services-languages-common-props.model';
import classes from './servicelanguage.module.scss';
import Cta from '../cta/cta';
import LargeCard from '../large-card/large-card';
import Tag from '../tag/tag';
import React from 'react';

const ServiceLanguage = ({title, subtitle, ctaURL, largeCards, id}: ServicesLanguagesCommonPropsModel) => {
	
	const style = {'--cards': largeCards.length} as React.CSSProperties;
	return (
	  <section className={`page ${ctaURL && 'services'}`} id={id}>
		  <div className={classes.contentPage}>
			  <div className={classes.contentInfo}>
				  <h1>{title}</h1>
				  <h3>{subtitle}</h3>
			  </div>
			  <div className={classes.contentCards}>
				  <div className={`${classes.cards}`} style={style}>
					  {
						largeCards && largeCards.map((card, index) => <LargeCard key={card.title + index} {...card}/>)
					  }
				  </div>
				  <div className={classes.actionBar}>
					  {
						!ctaURL && <><h3>AND MANY MORE...</h3>
							<div className={classes.tabs}>
							  <Tag theme={'accent-8'}>Javascript</Tag>
							  <Tag theme={'accent-5'}>Next.js</Tag>
							  <Tag theme={'accent-6'}>HTML 5</Tag>
							  <Tag theme={'accent-7'}>CSS 3</Tag>
							  <Tag theme={'accent-4'}>Java</Tag>
							  <Tag theme={'accent-2'}>C#</Tag>
							</div>
						  </>
					  }
					  {
						ctaURL &&
						  <a href={ctaURL} target={'_blank'} rel='noreferrer'>
							<Cta theme={'primary'} shape={'full'}>
							  View Projects
							  <span className='material-icons-round'>
								open_in_new
							  </span>
							</Cta>
						  </a>
					  }
				  </div>
			  </div>
		  </div>
	  </section>
	);
};

export default ServiceLanguage;
