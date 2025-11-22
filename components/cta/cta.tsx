import {CTA} from '../../models/cta.model';
import classes from './cta.module.scss';

const Cta = ({shape, theme, type = 'button', ...props}: CTA) => {
	return (
	  <button 
	    {...props} 
	    type={type}
	    className={`${classes.cta} ${classes[theme]} ${classes[shape || '']}`}
	  >
		  {props.children}
	  </button>
	);
};

export default Cta;
