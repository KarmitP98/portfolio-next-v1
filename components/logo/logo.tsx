import Image from 'next/image';
import classes from './logo.module.scss';
import {CommonProps} from '../../models/common-props.model';
import {useTheme} from '../../context/ThemeContext';

const Logo = (props: CommonProps) => {
    const {theme} = useTheme();

	return (
        <Image
            {...props}
            className={classes.logo}
            src={`/assets/svg/${theme}/logo.svg`}
            alt={'Logo'}
            width={36}
            height={48}
            fill={false}
	  />
	);
};

export default Logo;
