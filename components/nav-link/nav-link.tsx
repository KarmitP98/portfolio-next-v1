import classes from './nav-link.module.scss';
import {NavLink} from '../../models/navlink.model';
import React from 'react';

const NavLink = React.forwardRef<HTMLButtonElement, NavLink>(({active, ...props}, ref) => {
	return (
	  <button 
	    {...props} 
	    ref={ref}
	    type='button'
	    className={`${classes.navLink} ${active ? classes.active : ''}`}
	  >
		  {props.children}
	  </button>
	);
});

NavLink.displayName = 'NavLink';

export default NavLink;
