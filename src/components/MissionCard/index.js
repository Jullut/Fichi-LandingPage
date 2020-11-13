import React from 'react';
import styles from './MissionCard.module.scss';
import Button from '../Button';

const MissionCard = ({ title, description, img }) => {
	return (
		<div className={styles.mainContainer}>
			<div className={styles.img}>
				<img src={img} alt="icon" />
			</div>
			<p className={styles.subTitle}>{title}</p>
			<p className={styles.description}>{description}</p>
			<div className={styles.btn}>
				<Button color="mint">Get Start</Button>
			</div>
		</div>
	);
};

export default MissionCard;
