import React from 'react';
import styles from './ContactForm.module.scss';
import { useForm } from 'react-hook-form';

const ContactForm = () => {
	const { register, handleSubmit, errors, reset, formState } = useForm();

	const onSubmit = (data, e) => {
		console.log(data);
		e.target.reset();
	};

	const { isSubmitSuccessful } = formState;

	return (
		<div className={styles.mainContainer}>
			<div className={styles.text}>
				<h1>Get in touch</h1>
				<p>Vestibulum imperdiet nibh vel magna lacinia ultrices. Sed id interdum urna. </p>
			</div>

			<div className={styles.form}>
				<form onSubmit={handleSubmit(onSubmit)}>
					<div className={styles.firstRow}>
						<div>
							<input
								className={styles.formInput}
								name="name"
								placeholder="Enter your name"
								ref={register({ required: true })}
							/>
							{errors.name && <p className={styles.error}>This field is required</p>}
						</div>

						<div>
							<input
								className={styles.formInput}
								name="email"
								placeholder="Your Email"
								ref={register({
									required: true,
									pattern: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
								})}
							/>
							{errors.email &&
							errors.email.type === 'required' && <p className={styles.error}>This field is required</p>}
							{errors.email &&
							errors.email.type === 'pattern' && (
								<p className={styles.error}>Please, enter valid email address</p>
							)}
						</div>

						<div>
							<input
								className={styles.formInput}
								name="subject"
								placeholder="Subject"
								ref={register({ required: true })}
							/>
							{errors.subject && <p className={styles.error}>This field is required</p>}
						</div>
					</div>

					<div>
						<textarea
							rows="10"
							className={styles.textInput}
							name="message"
							placeholder="Your message here"
							ref={register({ required: true })}
						/>
						{errors.message && <p className={styles.error}>This field is required</p>}

						<input type="submit" value="Send" className={styles.btn} />
						{isSubmitSuccessful && (
							<p className={styles.succes}>Thank you, we will reach out to you shortly!</p>
						)}
					</div>
				</form>
			</div>
		</div>
	);
};

export default ContactForm;
