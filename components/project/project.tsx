import Cta from '../cta/cta';

import {ProjectPropsModel} from '../../models/props/project-props.model';
import classes from './project.module.scss';
import Image from 'next/image';

const Project = ({
	                 title,
	                 description,
	                 imageName,
	                 imageURL,
	                 projectURL,
	                 imageSide,
	                 imageLoad,
	                 ctaLabel,
	                 name,
	                 id,
	                 loaded
                 }: ProjectPropsModel) => {
	
	const getImageURL = (): string => imageName ? `/assets/${imageName}` : imageURL || '';
	const isAboutSection = name === 'about';
	
	return (
	  <article 
	    className={`${classes.page} ${name ? classes.about : ''} ${loaded ? classes.loaded : ''}`} 
	    id={id}
	    itemScope 
	    itemType={isAboutSection ? 'https://schema.org/Person' : 'https://schema.org/CreativeWork'}
	    role={isAboutSection ? 'article' : 'article'}
	    aria-labelledby={`${id}-heading`}
	  >
		  <div className={`${classes.contentPage} ${classes[imageSide]}`}>
			  <div className={classes.contentInfo}>
				  <h2 id={`${id}-heading`} itemProp={isAboutSection ? 'name' : 'name'}>
					  {title}
				  </h2>
				  <p itemProp={isAboutSection ? 'description' : 'description'}>
					  {description}
				  </p>
				  <nav className='action-bar' aria-label={`Actions for ${title}`}>
					  <a 
					    href={projectURL} 
					    target={'_blank'} 
					    rel='noreferrer noopener'
					    itemProp={isAboutSection ? 'url' : 'url'}
					    aria-label={`${ctaLabel || 'View'} ${title} - Opens in new tab`}
					  >
						  <Cta theme={'primary'} shape={'full'}>
							  {ctaLabel || 'Check it out'}
							  <span className='material-icons-round' aria-hidden='true'>
								  open_in_new
							  </span>
						  </Cta>
					  </a>
				  </nav>
			  </div>
			  <figure className={classes.contentImage}>
				  <Image
					src={getImageURL()} 
					alt={`${title} - ${description.substring(0, 100)}${description.length > 100 ? '...' : ''}`} 
					width={1920} 
					height={1080}
					className={`${classes[imageLoad]}`}
					itemProp='image'
					loading={loaded ? 'eager' : 'lazy'}
				  />
			  </figure>
		  </div>
	  </article>
	);
};

export default Project;
