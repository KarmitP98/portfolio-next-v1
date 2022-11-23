import {LargeCard} from '../../models/large-card.model';
import classes from './large-card.module.scss';
import Image from 'next/image';

const LargeCard = ({theme, icon, title, description, show}: LargeCard) => {
	return (
	  <section className={`${classes.largeCard} ${classes[theme]} ${show ? classes.show : ''}`}>
		  <div className={classes.titleBar}>
			  <div className={classes.logo}>
				  <Image src={icon} alt={icon} height={36} width={36}/>
			  </div>
			  <h1>
				  {title}
			  </h1>
		  </div>
		  <p>
			  {description}
		  </p>
	  </section>
	);
};

export default LargeCard;
