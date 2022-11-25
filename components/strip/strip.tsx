import classes from './strip.module.scss';
import Cta from '../cta/cta';
import Image from 'next/image';

const Strip = () => {
	return (
	  <section className={classes.strip}>
		  <a href={'https://github.com/KarmitP98'} target={'_blank'} rel='noreferrer'>
			  <Cta theme={'secondary'} shape={'full'}>
				  See More at
				  <Image src={'/assets/svg/Github.svg'} alt={'Github logo'} width={24} height={24}/>
			  </Cta>
		  </a>
	  </section>
	);
};

export default Strip;
