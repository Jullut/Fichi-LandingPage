import React from 'react';
import styles from './Assisting.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '../Button';

const Assisting = () => {
	return (
		<div className={styles.mainContainer}>
			<div className={styles.socialMedia}>
				<ol>
					<li>
						<FontAwesomeIcon icon={[ 'fab', 'facebook' ]} className={styles.icon} />
					</li>
					<li>
						<FontAwesomeIcon icon={[ 'fab', 'twitter' ]} className={styles.icon} />
					</li>
					<li>
						<FontAwesomeIcon icon={[ 'fab', 'instagram' ]} className={styles.icon} />
					</li>
				</ol>
			</div>

			<div className={styles.content}>
				<div className={styles.text}>
					<h1 className={styles.title}>We are ready to assist our clients</h1>
					<p className={styles.description}>
						Vestibulum imperdiet nibh vel magna lacinia ultrices. Sed id interdum urna
					</p>
					<Button color="plum">Get Start</Button>
					<Button color="mint">How it Work</Button>
				</div>

				<div className={styles.img}>
					<img src="/img/assisting/purple-man.png" alt="funny looking purple man" />
				</div>
			</div>
		</div>
	);
};

export default Assisting;
