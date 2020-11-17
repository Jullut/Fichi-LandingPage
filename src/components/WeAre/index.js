import React from 'react';
import styles from './WeAre.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const WeAre = () => {
	return (
		<div className={styles.mainContainer}>
			<div className={styles.img} data-aos="fade-right">
				<img src="/img/weare/phone-woman.png" alt="phone woman" />
			</div>

			<div className={styles.text} data-aos="fade-left">
				<h6>Who We Are</h6>
				<h1>An independent consulting firm</h1>
				<p>
					Vestibulum imperdiet nibh vel magna lacinia ultrices. Sed id interdum urna. Nam ac elit a ante
					commodo tristique. Duis lacus urna,condimentum a vehicula a, hendrerit ac nisi Lorem ipsum dolor sit
					amet, consectetur adipiscing elit. Aliquam tate, tortor nec commodo ultricies, vitae viverra urna .
				</p>

				<div className={styles.socialMedia}>
					<p>Trusted thounds of diverse companies</p>

					<FontAwesomeIcon icon={[ 'fab', 'angrycreative' ]} className={styles.icon} />
					<FontAwesomeIcon icon={[ 'fab', 'firstdraft' ]} className={styles.icon} />
					<FontAwesomeIcon icon={[ 'fab', 'mailchimp' ]} className={styles.icon} />
					<FontAwesomeIcon icon={[ 'fab', 'meetup' ]} className={styles.icon} />
				</div>
			</div>
		</div>
	);
};

export default WeAre;
