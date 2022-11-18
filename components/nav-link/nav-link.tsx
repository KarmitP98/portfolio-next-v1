import classes from './nav-link.module.scss';
import {NavLink} from '../../models/navlink.model';

const NavLink = ({active, ...props}: NavLink) => {
	return (
	  <button {...props} className={`${classes.navLink} ${active ? classes.active : ''}`}>
		  {props.children}
	  </button>
	);
};

export default NavLink;
