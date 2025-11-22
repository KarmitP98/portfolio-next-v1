import {NavbarModel} from '../../models/navbar.model';
import Logo from '../logo/logo';
import classes from './navbar.module.scss';
import Cta from '../cta/cta';
import NavLink from '../nav-link/nav-link';

const Navbar = ({active, setActive, opened, setOpened, navigateTo, ...props}: NavbarModel) => {
	
	const tabs: { label: string, href: string }[] = [
		{label: 'Home', href: 'home'},
		{label: 'About', href: 'about'},
		{label: 'Services', href: 'services'},
		{label: 'Projects', href: 'projects'},
		{label: 'Contact Me', href: 'contact'}
	];
	
	return (
	  <nav 
	    className={classes.nav} 
	    role='navigation' 
	    aria-label='Main Navigation'
	    itemScope 
	    itemType='https://schema.org/SiteNavigationElement'
	  >
		  <Logo onClick={() => navigateTo('home')} aria-label='Home - Karmit Patel Portfolio'/>
		  <ul 
		    className={`${classes.links} ${opened ? classes.active : ''}`} 
		    role='menubar'
		    aria-expanded={opened}
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
					    >
						    {tab.label}
					    </NavLink>
				    </li>)
			  }
		  </ul>
		  <div className={classes.menuButton} onClick={() => setOpened(prevState => (!prevState))}>
			  <Cta theme={'none'} shape={'icon'}>
				  <span className='material-icons-round' aria-hidden='true'>
					  {opened ? 'close' : 'menu'}
				  </span>
			  </Cta>
		  </div>
	  </nav>
	);
};

export default Navbar;
