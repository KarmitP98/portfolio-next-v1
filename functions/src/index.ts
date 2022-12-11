/* eslint-disable */
import * as admin from 'firebase-admin';
import {firestore} from 'firebase-admin';
import * as functions from 'firebase-functions';
import * as nodemailer from 'nodemailer';
import Timestamp = firestore.Timestamp;

admin.initializeApp();

/**
 * Here we're using Gmail to send
 */
const transporter = nodemailer
  .createTransport({
	  service: 'gmail',
	  auth: {
		  user: 'karmit199@gmail.com',
		  pass: 'xtkpcvajdsbmxrzh'
	  }
  });
/**
 * Send email to my gmail account on new message created on the website.
 */
exports.sendEmail = functions.firestore
  .document('messages/{messageId}')
  .onWrite((change) => {
	  const {email, name, message}: any = change.after.data() || {
		  email: undefined,
		  name: undefined,
		  message: undefined
	  };
	  
	  const createTime: Timestamp = change.after.createTime;
	  const createTimeDate: Date = createTime.toDate();
	  
	  if (email && name && message) {
		  const emailData = {
			  from: `${name} <${email}>`,
			  to: 'karmit199@gmail.com',
			  subject: `${email}::${name} is trying to reach out!`,
			  html: `${message}\n-${createTimeDate.toLocaleTimeString('en-ca', {dateStyle: 'full'})}`
		  };
		  
		  return transporter.sendMail(emailData, (error) => {
			  if (error) {
				  functions.logger.error(error);
			  }
		  });
	  }
  });
