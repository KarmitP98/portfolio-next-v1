import {LargeCard} from '../../models/large-card.model';
import classes from './large-card.module.scss';
import Image from 'next/image';

const LargeCard = ({theme, icon, title, description, show}: LargeCard) => {
	const iconAlt = `${title} icon or logo`;
	
	return (
	  <article 
	    className={`${classes.largeCard} ${classes[theme]} ${show ? classes.show : ''}`}
	    itemScope 
	    itemType='https://schema.org/Service'
	    aria-labelledby={`card-${title.replace(/\s+/g, '-').toLowerCase()}-title`}
	  >
		  <header className={classes.titleBar}>
			  <figure className={classes.logo}>
				  <Image 
				    src={icon} 
				    alt={iconAlt} 
				    height={36} 
				    width={36}
				    itemProp='image'
				    aria-hidden='false'
				  />
			  </figure>
			  <h3 id={`card-${title.replace(/\s+/g, '-').toLowerCase()}-title`} itemProp='name'>
				  {title}
			  </h3>
		  </header>
		  <p itemProp='description'>
			  {description}
		  </p>
	  </article>
	);
};

export default LargeCard;
