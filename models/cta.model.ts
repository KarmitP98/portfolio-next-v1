export interface CTA {
	theme: 'primary' | 'secondary' | 'none';
	shape?: 'sm' | 'md' | 'full' | 'icon';
	children?: any;
	
	[x: string]: any;
}
