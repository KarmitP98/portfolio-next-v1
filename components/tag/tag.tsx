import {CommonProps} from '../../models/common-props.model';
import classes from './tag.module.scss';

const Tag = (props: CommonProps) => {
	return (
	  <span className={`${classes.tag} ${classes[props.theme]}`}>
		  {props.children}
	  </span>
	);
};

export default Tag;
