import {NavbarModel} from '../../models/navbar.model';
import Logo from '../logo/logo';
import classes from './navbar.module.scss';
import Cta from '../cta/cta';
import NavLink from '../nav-link/nav-link';

const Navbar = ({active, setActive, opened, setOpened, ...props}: NavbarModel) => {
	
	const tabs: { label: string, href: string }[] = [
		{label: 'Home', href: 'home'},
		{label: 'About', href: 'about'},
		{label: 'Services', href: 'services'},
		{label: 'Projects', href: 'projects'},
		{label: 'Contact Me', href: 'contact'}
	];
	
	return (
	  <nav className={classes.nav}>
		  <Logo onClick={() => setActive('home')}/>
		  <ul className={`${classes.links} ${opened ? classes.active : ''}`}>
			  {
				  tabs.map((tab, index) =>
					<li key={index + tab.href}>
						<NavLink active={active === tab.href} onClick={() => setActive(tab.href)}>
							{tab.label}
						</NavLink>
					</li>)
			  }
		  </ul>
		  <div className={classes.menuButton} onClick={() => setOpened(prevState => (!prevState))}>
			  <Cta theme={'none'} shape={'icon'}>
				  <span className='material-icons-round'>
					  {opened ? 'close' : 'menu'}
				  </span>
			  </Cta>
		  </div>
	  </nav>
	);
};

export default Navbar;
