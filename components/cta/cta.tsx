import {CTA} from '../../models/cta.model';
import classes from './cta.module.scss';

const Cta = ({shape, theme, ...props}: CTA) => {
	return (
	  <button {...props} className={`${classes.cta} ${classes[theme]} ${classes[shape || '']}`}>
		  {props.children}
	  </button>
	);
};

export default Cta;
