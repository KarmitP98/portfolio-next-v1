import Image from 'next/image';
import classes from './logo.module.scss';
import {CommonProps} from '../../models/common-props.model';
import React from 'react';

const Logo = ({onClick, onKeyDown, tabIndex, role, 'aria-label': ariaLabel, ...props}: CommonProps) => {
	const handleKeyDown = (e: React.KeyboardEvent) => {
		if ((e.key === 'Enter' || e.key === ' ') && onClick) {
			e.preventDefault();
			onClick(e as any);
		}
		if (onKeyDown) {
			onKeyDown(e);
		}
	};

	if (onClick || role === 'button') {
		return (
		  <button
		    onClick={onClick}
		    onKeyDown={handleKeyDown}
		    tabIndex={tabIndex ?? 0}
		    role={role}
		    aria-label={ariaLabel || 'Home - Karmit Patel Portfolio'}
		    className={classes.logoButton}
		  >
			  <Image 
			    {...props} 
			    className={classes.logo} 
			    src={'/assets/logo192.png'} 
			    alt={''} 
			    width={36} 
			    height={48}
			    fill={false}
			    priority
			    aria-hidden='true'
			  />
		  </button>
		);
	}

	return (
	  <Image 
	    {...props} 
	    className={classes.logo} 
	    src={'/assets/logo192.png'} 
	    alt={ariaLabel || 'Karmit Patel Portfolio Logo'} 
	    width={36} 
	    height={48}
	    fill={false}
	    priority
	  />
	);
};

export default Logo;
