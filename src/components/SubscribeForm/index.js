import React, { useState } from 'react';
import styles from './SubscribeForm.module.scss';
import { useForm } from 'react-hook-form';

const SubscribeForm = () => {
	const { register, handleSubmit, errors, reset, formState } = useForm();

	const onSubmit = (data, e) => {
		console.log(data);
		e.target.reset();
	};

	const { isSubmitSuccessful, isSubmitted } = formState;

	return (
		<div>
			<div className={styles.text}>
				<h1 className={styles.title}>
					Get everything you need <br />
					<span>to succeed!</span>
				</h1>
				<p className={styles.subTitle}>Join the newsletter and get 2 months free with full access.</p>
			</div>

			<div className={styles.form}>
				<form onSubmit={handleSubmit(onSubmit)}>
					<input
						className={styles.formInput}
						name="email"
						placeholder="Email address"
						ref={register({
							required: true,
							pattern: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
						})}
					/>

					<input type="submit" value="Subscribe" className={styles.btn} />
					{errors.email &&
					errors.email.type === 'required' && <p className={styles.error}>This field is required</p>}
					{errors.email &&
					errors.email.type === 'pattern' && (
						<p className={styles.error}>Please, enter valid email address</p>
					)}
					{isSubmitted && <p className={styles.succes}>Thank you for subscribing!</p>}
				</form>
			</div>
		</div>
	);
};

export default SubscribeForm;
