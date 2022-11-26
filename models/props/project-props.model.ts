export interface ProjectPropsModel {
	title: string;
	description: string;
	projectURL: string;
	imageSide: 'start' | 'end';
	imageLoad: 'up' | 'down' | 'left' | 'right';
	imageURL?: string;
	imageName?: string;
	ctaLabel?: string;
}
