import {LargeCard} from '../large-card.model';

export interface ServicesLanguagesCommonPropsModel {
	title: string;
	subtitle: string;
	largeCards: LargeCard[];
	ctaURL?: string;
	
	[x: string]: any;
}
