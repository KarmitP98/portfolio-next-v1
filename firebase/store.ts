import {firestore} from './index';
import {addDoc, collection} from '@firebase/firestore';

export const addMessage = async ({
	                                 name,
	                                 email,
	                                 message
                                 }: { name: string, email: string, message: string }): Promise<{ success: boolean, message: string }> => {
	try {
		await addDoc(collection(firestore, 'messages'), {email, name, message});
		return {success: true, message: 'Message Received!'};
	} catch (e: any) {
		return {success: false, message: e.message};
	}
};
