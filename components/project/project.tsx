import {ProjectPropsModel} from '../../models/props/project-props.model';
import classes from './project.module.scss';
import Image from 'next/image';
import Cta from '../cta/cta';

const Project = ({title, description, imageName, imageURL, projectURL, imageSide, imageLoad}: ProjectPropsModel) => {
	
	const getImageURL = (): string => imageName ? `/assets/${imageName}` : imageURL || '';
	
	return (
	  <section className={classes.page}>
		  <div className={`${classes.contentPage} ${classes[imageSide]}`}>
			  <div className={classes.contentInfo}>
				  <h1>{title}</h1>
				  <p>{description}</p>
				  <div className='action-bar'>
					  <a href={projectURL} target={'_blank'} rel='noreferrer'>
						  <Cta theme={'primary'} shape={'full'}>
							  Check it out
							  <span className='material-icons-round'>
								  open_in_new
							  </span>
						  </Cta>
					  </a>
				  </div>
			  </div>
			  <div className={classes.contentImage}>
				  <Image
				    src={getImageURL()} alt={`${title}-Image`} width={1920} height={1080}
				    className={`${classes[imageLoad]}`}
				  />
			  </div>
		  </div>
	  </section>
	);
};

export default Project;
