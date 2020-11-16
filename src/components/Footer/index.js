import React from 'react';
import styles from './Footer.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
	return (
		<footer className={styles.mainContainer}>
			<div className={styles.logo}>
				<img src="/img/footer/logo.png" alt="logo" />
				<p>©Copyright 2020. Made by moontheme</p>
			</div>

			<div className={styles.links}>
				<p>Link</p>
				<ol>
					<li>Home</li>
					<li>About</li>
					<li>Work</li>
					<li>Contact</li>
				</ol>
			</div>

			<div className={styles.contactUs}>
				<p className={styles.title}>Stay Connected</p>
				<p className={styles.email}>info@moontheme.net</p>
				<p className={styles.contacts}>
					004 Riley Street, Surry<br /> Hills 2050 Sydney, Australia
				</p>
				<p className={styles.contacts}>+ 452 56 4332 4456</p>
			</div>

			<div className={styles.icons}>
				<FontAwesomeIcon icon={[ 'fab', 'facebook' ]} className={styles.facebook} />
				<FontAwesomeIcon icon={[ 'fab', 'twitter' ]} className={styles.twitter} />
				<FontAwesomeIcon icon={[ 'fab', 'instagram' ]} className={styles.instagram} />
			</div>
		</footer>
	);
};

export default Footer;
