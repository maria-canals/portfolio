import React, { useState } from 'react';
import contact from '../assets/contact.jpg';

export default function Contact() {
	const [message, setMessage] = useState(false);

	const handleSubmit = e => {
		e.preventDefault();
		setMessage(true);
	};
	return (
		<div className='contact' id='contact'>
			<div className='contact-container'>
				<div className='contact-left'>
					<img src={contact} alt='contact' />
				</div>
				<div className='contact-right'>
					<h1 className='contact_title mt-2'>Get In Touch</h1>
					<h5 className='contact_subtitle my-4'>Nice to meet you!</h5>
					<form onSubmit={handleSubmit}>
						<input type='text' placeholder='Email' />
						<textarea placeholder='Message'></textarea>
						<button className='contact-button' type='submit'>
							Send
						</button>
						{message && (
							<span>Thank you, your message has been sent correctly. </span>
						)}
					</form>
				</div>
			</div>
		</div>
	);
}
