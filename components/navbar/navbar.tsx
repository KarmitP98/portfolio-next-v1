import {NavbarModel} from '../../models/navbar.model';
import Logo from '../logo/logo';
import classes from './navbar.module.scss';
import Cta from '../cta/cta';
import NavLink from '../nav-link/nav-link';
import React, {useRef, useEffect} from 'react';

const Navbar = ({active, setActive, opened, setOpened, navigateTo, ...props}: NavbarModel) => {
	
	const menuButtonRef = useRef<HTMLButtonElement>(null);
	const firstMenuItemRef = useRef<HTMLButtonElement>(null);
	
	const tabs: { label: string, href: string }[] = [
		{label: 'Home', href: 'home'},
		{label: 'About', href: 'about'},
		{label: 'Services', href: 'services'},
		{label: 'Projects', href: 'projects'},
		{label: 'Contact Me', href: 'contact'}
	];
	
	const handleMenuToggle = () => {
		setOpened(prevState => (!prevState));
	};
	
	const handleKeyDown = (e: React.KeyboardEvent) => {
		if (e.key === 'Escape' && opened) {
			setOpened(false);
			menuButtonRef.current?.focus();
		}
	};
	
	useEffect(() => {
		if (opened && firstMenuItemRef.current) {
			firstMenuItemRef.current.focus();
		}
	}, [opened]);
	
	return (
	  <nav 
	    className={classes.nav} 
	    role='navigation' 
	    aria-label='Main Navigation'
	    itemScope 
	    itemType='https://schema.org/SiteNavigationElement'
	    onKeyDown={handleKeyDown}
	  >
		  <Logo onClick={() => navigateTo('home')} aria-label='Home - Karmit Patel Portfolio' role='button'/>
		  <ul 
		    id='main-navigation-menu'
		    className={`${classes.links} ${opened ? classes.active : ''}`} 
		    role='menubar'
		    aria-label='Main navigation menu'
		  >
			  {
				  tabs.map((tab, index) =>
				    <li key={index + tab.href} role='none'>
					    <NavLink 
						    active={active === tab.href} 
						    onClick={() => navigateTo(tab.href)}
						    role='menuitem'
						    aria-current={active === tab.href ? 'page' : undefined}
						    aria-label={`Navigate to ${tab.label} section`}
						    ref={index === 0 ? firstMenuItemRef : undefined}
					    >
						    {tab.label}
					    </NavLink>
				    </li>)
			  }
		  </ul>
		  <button
		    ref={menuButtonRef}
		    className={classes.menuButton}
		    onClick={handleMenuToggle}
		    aria-label={opened ? 'Close navigation menu' : 'Open navigation menu'}
		    aria-expanded={opened}
		    aria-controls='main-navigation-menu'
		    type='button'
		  >
			  <span className='material-icons-round' aria-hidden='true'>
				  {opened ? 'close' : 'menu'}
			  </span>
		  </button>
	  </nav>
	);
};

export default Navbar;
