import React from 'react';
import styles from './OurMission.module.scss';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import MissionCard from '../MissionCard';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

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

	const cards = [
		{
			title: 'Accountancy',
			description: 'Vestibulum imperdiet nibh vel magna lacinia ultrices. Sed id interdum urna.',
			img: '/img/mission/money.png'
		},
		{
			title: 'Corporate Finance',
			description: 'Nullam lacinia faucibus risus, a euismod lorem tincidunt id.',
			img: '/img/mission/support.png'
		},
		{
			title: 'Tax & Legal',
			description: 'Class aptent taciti sociosqu ad litora torquent per conubia nostra',
			img: '/img/mission/legal.png'
		}
	];

	return (
		<div className={styles.mainContainer} data-aos="zoom-in">
			<div className={styles.title}>
				<h6>Our Mission</h6>
				<h1>
					We want to contribute to the
					<span> creation</span>
					<img src="/img/mission/line.png" alt="mint line" className={styles.line} /> of valua
				</h1>
			</div>

			<div className={styles.carousel}>
				<Carousel
					responsive={responsive}
					infinite={true}
					keyBoardControl={true}
					arrows={false}
					focusOnSelect={true}
				>
					{cards.map(({ title, description, img }) => (
						<div className={styles.carouselItem}>
							<MissionCard title={title} description={description} img={img} />
						</div>
					))}
				</Carousel>
			</div>
		</div>
	);
};

export default OurMission;
