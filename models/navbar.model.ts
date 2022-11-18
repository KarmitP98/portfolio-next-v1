import {Dispatch, SetStateAction} from 'react';

export interface NavbarModel {
	active: string;
	setActive: Dispatch<SetStateAction<string>>;
	opened: boolean;
	setOpened: Dispatch<SetStateAction<boolean>>;
	
	[x: string]: any;
}
