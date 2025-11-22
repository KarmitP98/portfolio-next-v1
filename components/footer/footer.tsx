import classes from './footer.module.scss';
import Cta from '../cta/cta';
import Image from 'next/image';

const Footer = () => {
	
	const footerLinks: { label: string, url: string, iconName: string }[] = [
		{
			label: 'Github',
			url: 'https://github.com/KarmitP98',
			iconName: 'Github-White'
		},
		{
			label: 'LinkedIn',
			url: 'https://www.linkedin.com/in/karmitpatel/',
			iconName: 'LinkedIn'
		},
		{
			label: 'Stackoverflow',
			url: 'https://stackoverflow.com/users/9695681/karmit-patel',
			iconName: 'Stackoverflow'
		},
		{
			label: 'Figma',
			url: 'https://www.figma.com/@karmitpatel',
			iconName: 'Figma'
		},
		{
			label: 'Facebook',
			url: 'https://www.facebook.com/karmit1998',
			iconName: 'Facebook'
		}
	];
	
	
	return (
	  <footer 
	    className={`${classes.footer}`} 
	    role='contentinfo'
	    itemScope 
	    itemType='https://schema.org/WPFooter'
	    aria-label='Social Media and Professional Links'
	  >
		  <nav aria-label='Social Media Links'>
			  <ul role='list' style={{listStyle: 'none', padding: 0, margin: 0, display: 'flex', gap: '1rem'}}>
				  {
					  footerLinks.map((link, index) => (
						<li key={`${index}-${link.label}`} role='listitem'>
						  <a 
						    href={link.url} 
						    target={'_blank'} 
						    rel='noreferrer noopener me'
						    itemProp='sameAs'
						    aria-label={`${link.label} profile - Opens in new tab`}
						  >
							  <Cta theme={'secondary'} shape={'md'}>
								  <Image 
								    src={`/assets/svg/${link.iconName}.svg`} 
								    alt='' 
								    width={24} 
								    height={24}
								    aria-hidden='true'
								  />
								  <span className={classes.label}>{link.label}</span>
							  </Cta>
						  </a>
						</li>
					  ))
				  }
			  </ul>
		  </nav>
	  </footer>
	);
};

export default Footer;
