import React from 'react';
import styles from './FeaturedWork.module.scss';
import Button from '../Button';

const FeaturedWork = () => {
	return (
		<div className={styles.mainContainer}>
			<div className={styles.text}>
				<h6>Featured Work</h6>
				<h1>The personal Finance App</h1>
				<p>
					Vestibulum imperdiet nibh vel magna lacinia ultrices. Sed id interdum urna. Nam ac elit a ante
					commodo tristique. Duis lacus urna condimentum a vehicula a, hendrerit ac nisi.
				</p>
				<Button color="plum">View Project</Button>
			</div>

			<div className={styles.img}>
				<img src="/img/featuredWork/phone-icons.png" className={styles.imgBig} />
				<img src="/img/featuredWork/phone-icons-sm.png" className={styles.imgSm} />
			</div>
		</div>
	);
};

export default FeaturedWork;
