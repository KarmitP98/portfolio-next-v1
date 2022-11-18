export interface CTA {
	label: string;
	theme: 'primary' | 'secondary' | 'none';
	shape?: 'sm' | 'md' | 'full';
	children?: any;
	
	[x: string]: any
}
