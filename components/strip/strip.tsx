import classes from './strip.module.scss';
import {CommonProps} from '../../models/common-props.model';

const Strip = (props: CommonProps) => {
	return (
	  <section className={classes.strip}>
		  <a href={'https://github.com/KarmitP98'} target={'_blank'} rel='noreferrer'>
			  {
				  props.children
			  }
		  </a>
	  </section>
	);
};

export default Strip;
