import contact from '../assets/contact.jpg';
import Swal from 'sweetalert2';
import { useForm } from '../hooks/useForm';
import validator from 'validator';

export default function Contact() {
	const [inputValues, setInputValues, reset] = useForm({
		email: '',
		message: '',
	});

	const { email, message } = inputValues;

	const handleSubmit = e => {
		e.preventDefault();
		const options = { min: 3 };
		const validEmail = validator.isEmail(email);
		const validMessage = validator.isLength(message, options);

		if (!validEmail) {
			Swal.fire({
				icon: 'error',
				text: 'Please enter a valid email',
				confirmButtonColor: '#3085d6',
			});
			return;
		} else if (!validMessage) {
			Swal.fire({
				icon: 'error',
				text: 'message must not be empty',
				confirmButtonColor: '#3085d6',
			});
			return;
		}

		Swal.fire({
			icon: 'success',
			iconColor: '#3085d6',
			text: 'Your message has been successfully sent!',
			confirmButtonColor: '#3085d6',
		});

		return reset();
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
						<input
							type='text'
							placeholder='Email'
							onChange={setInputValues}
							name='email'
							value={email}
						/>
						<textarea
							placeholder='Message'
							name='message'
							value={message}
							onChange={setInputValues}></textarea>
						<button className='contact-button' type='submit'>
							Send
						</button>
					</form>
				</div>
			</div>
		</div>
	);
}
