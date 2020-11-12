import React from 'react';
import styles from './OurMission.module.scss';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const OurMission = () => {
	const responsive = {
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 3
		},
		tablet: {
			breakpoint: { max: 1024, min: 464 },
			items: 2
		},
		mobile: {
			breakpoint: { max: 464, min: 0 },
			items: 1
		}
	};

	return (
		<div className={styles.mainContainer}>
			<div className={styles.title}>
				<h6>Our Mission</h6>
				<h1>
					We want to contribute to the <span>creation</span> of valua
				</h1>
			</div>

			<div className={styles.carousel}>
				<Carousel
					responsive={responsive}
					infinite={true}
					keyBoardControl={true}
					arrows={false}
					focusOnSelect={true}
					afterChange={() => {
						alert('uwu');
					}}
				>
					<div className={styles.carouselItem}>
						<img src="/img/mission/money.png" alt="money" />
						<p className={styles.subTitle}>Accountancy</p>
						<p className={styles.description}>
							Vestibulum imperdiet nibh vel magna lacinia ultrices. Sed id interdum urna.
						</p>
					</div>
					<div>
						<img src="/img/mission/support.png" alt="support" />
						<p className={styles.subTitle}>Corporate Finance</p>
						<p className={styles.description}>
							Nullam lacinia faucibus risus, a euismod lorem tincidunt id.
						</p>
					</div>
					<div>
						<img src="/img/mission/legal.png" alt="legal" />
						<p className={styles.subTitle}>Tax & Legal</p>
						<p className={styles.description}>
							Class aptent taciti sociosqu ad litora torquent per conubia nostra
						</p>
					</div>
				</Carousel>
			</div>
		</div>
	);
};

export default OurMission;
