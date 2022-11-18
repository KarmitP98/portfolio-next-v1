import {CTA} from './cta.model';

export interface PagePropsModel {
	direction: PageDirection;
	pageTitle: string;
	imageURL: string;
	imageLocation?: ImageLocation;
}

export type PageDirection = 'left' | 'center' | 'right';

export type ImageLocation = 'first' | 'second';

export interface PageContent {
	imageURL: string;
	title: string;
	description: string;
	cta: CTA;
}
