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
	  <footer className={`${classes.footer}`}>
		  {
			  footerLinks.map((link, index) =>
				<a key={`${index}-${link.label}`} href={link.url} target={'_blank'} rel='noreferrer'>
					<Cta theme={'secondary'} shape={'md'}>
						<Image src={`/assets/svg/${link.iconName}.svg`} alt={link.label} width={24} height={24}/>
						<span className={classes.label}>{link.label}</span>
					</Cta>
				</a>)
		  }
	  </footer>
	);
};

export default Footer;
