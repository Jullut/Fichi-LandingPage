import React from 'react';
import styles from './MissionCard.module.scss';

const MissionCard = ({ title, description, img }) => {
	return (
		<div>
			<img src={img} alt="icon" />
			<p className={styles.subTitle}>{title}</p>
			<p className={styles.description}>{description}</p>
		</div>
	);
};

export default MissionCard;
