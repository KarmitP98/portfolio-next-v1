import Image from 'next/image';
import classes from './logo.module.scss';
import {CommonProps} from '../../models/common-props.model';

const Logo = (props: CommonProps) => {
	return (
	  <Image {...props} className={classes.logo} src={'/assets/logo192.png'} alt={'Logo'} width={30} height={48}
	         layout={'intrinsic'}
	  />
	);
};

export default Logo;
