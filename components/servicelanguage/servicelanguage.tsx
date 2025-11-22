import {ServicesLanguagesCommonPropsModel} from '../../models/props/services-languages-common-props.model';
import classes from './servicelanguage.module.scss';
import Cta from '../cta/cta';
import LargeCard from '../large-card/large-card';
import Tag from '../tag/tag';
import React from 'react';

const ServiceLanguage = ({title, subtitle, ctaURL, largeCards, id, loaded}: ServicesLanguagesCommonPropsModel) => {
	
	const style = {'--cards': largeCards.length} as React.CSSProperties;
	const isServicesSection = id === 'services';
	const headingId = `${id}-heading`;
	
	return (
	  <section 
	    className={`page ${ctaURL && 'services'} ${loaded ? 'loaded' : ''}`} 
	    id={id}
	    itemScope 
	    itemType={isServicesSection ? 'https://schema.org/ItemList' : 'https://schema.org/Service'}
	    aria-labelledby={headingId}
	  >
		  <div className={classes.contentPage}>
			  <header className={classes.contentInfo}>
				  <h2 id={headingId} itemProp='name'>{title}</h2>
				  <p className={classes.subtitle} role='text' aria-label='Section subtitle'>{subtitle}</p>
			  </header>
			  <div className={classes.contentCards} itemProp={isServicesSection ? 'itemListElement' : 'offers'}>
				  <div className={`${classes.cards}`} style={style} role='list'>
					  {
						largeCards && largeCards.map((card, index) => (
						  <div key={card.title + index} role='listitem' itemScope itemType='https://schema.org/ListItem'>
							  <LargeCard {...card}/>
						  </div>
						))
					  }
				  </div>
				  <nav className={classes.actionBar} aria-label={`Actions for ${title}`}>
					  {
						!ctaURL && <>
							<h3 className='sr-only'>Additional Technologies</h3>
							<div className={classes.tabs} role='list' aria-label='Additional programming languages and technologies'>
							  <Tag theme={'accent-8'} role='listitem'>Javascript</Tag>
							  <Tag theme={'accent-5'} role='listitem'>Next.js</Tag>
							  <Tag theme={'accent-6'} role='listitem'>HTML 5</Tag>
							  <Tag theme={'accent-7'} role='listitem'>CSS 3</Tag>
							  <Tag theme={'accent-4'} role='listitem'>Java</Tag>
							  <Tag theme={'accent-2'} role='listitem'>C#</Tag>
							</div>
						  </>
					  }
					  {
						ctaURL &&
						  <a 
						    href={ctaURL} 
						    target={'_blank'} 
						    rel='noreferrer noopener'
						    itemProp='url'
						    aria-label={`View ${title} projects on GitHub - Opens in new tab`}
						  >
							<Cta theme={'primary'} shape={'full'}>
							  View Projects
							  <span className='material-icons-round' aria-hidden='true'>
								open_in_new
							  </span>
							</Cta>
						  </a>
					  }
				  </nav>
			  </div>
		  </div>
	  </section>
	);
};

export default ServiceLanguage;
