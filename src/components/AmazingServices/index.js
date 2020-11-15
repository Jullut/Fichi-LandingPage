import React from 'react';
import styles from './AmazingServices.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket, faDice, faChartPie } from '@fortawesome/free-solid-svg-icons';

const AmazingServices = () => {
	const services = [
		{
			icon: faChartPie,
			title: 'Business Strategy',
			description: 'Imperdiet nibh vel magna lacinia ultrices. Sed id interdum urna.',
			style: 'chart'
		},
		{
			icon: faDice,
			title: 'Financial Planing',
			description: 'Imperdiet nibh vel magna lacinia ultrices. Sed id interdum urna.',
			style: 'dice'
		},
		{
			icon: faRocket,
			title: 'Life and Pensions',
			description: 'Imperdiet nibh vel magna lacinia ultrices. Sed id interdum urna.',
			style: 'rocket'
		}
	];
	return (
		<div className={styles.mainContainer}>
			<div className={styles.manImg}>
				<img src="/img/amazingServices/spyglass-man.png" alt="strange spyglass man" />
			</div>

			<div className={styles.servicesList}>
				<ol>
					{services.map(({ icon, title, description, style }, index) => (
						<li style={{ marginLeft: index === 1 ? '200px' : 'none' }}>
							<FontAwesomeIcon icon={icon} className={styles[style]} />
							<h3>{title}</h3>
							<p>{description}</p>
						</li>
					))}
				</ol>
			</div>

			<div className={styles.stringImg}>
				<img src="img/amazingServices/red-string-top.png" alt="curly red string" />
			</div>

			<div className={styles.text}>
				<h6>Amazing Services</h6>
				<h1>
					We provide smart and effective <span>solutions</span>
				</h1>
				<p>
					Nibh vel magna lacinia ultrices. Sed id interdum urna. Nam ac elit a ante commodo tristique. Duis
					lacus urna,condimentum a vehicula a, hendrerit ac nisi Lorem ipsum dolor sit amet, consectetur
					adipiscing elit. Aliquam tate, tortor nec commodo ultricies, vitae viverra urna .
				</p>
			</div>
		</div>
	);
};

export default AmazingServices;
