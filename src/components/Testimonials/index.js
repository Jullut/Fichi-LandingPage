import React, { useState } from 'react';
import styles from './Testimonials.module.scss';

const Testimonials = () => {
	const testimonials = [
		{
			name: 'Tony Nguyen',
			position: '- Ceo Moontheme',
			quote:
				' Hendrerit ac nisi Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tate, tortor nec commodo ultricies vitae viverra urna. ',
			img: '/img/testimonials/navy-man.png',
			style: 'navyMan'
		},
		{
			name: 'Stacey Warner',
			position: '- Film producer',
			quote:
				" I'm unpredictable, I never know where I'm going until I get there, I'm so random, I'm always growing, learning, changing, I'm never the same person twice. But one thing you can be sure of about me; is I will always do exactly what I want to do. ",
			img: '/img/testimonials/blue-woman.png',
			style: 'blueWoman'
		},
		{
			name: 'Jasmine Morgan',
			position: '- Local govt worker',
			quote:
				' That proves you are unusual and I am convinced that the only people worthy of consideration in this world are the unusual ones. For the common folks are like the leaves of a tree, and live and die unnoticed. ',
			img: '/img/testimonials/navy-woman.png',
			style: 'navyWoman'
		},
		{
			name: 'Constance Bullock',
			position: '- Television presenter',
			quote:
				' A musician must make music, an artist must paint, a poet must write, if he is to be ultimately at peace with himself. What a man can be, he must be ',
			img: '/img/testimonials/ocean-woman.png',
			style: 'oceanWoman'
		},
		{
			name: 'Talia King',
			position: '- Crown prosecutor',
			quote:
				' It looks rather ordinary. Unless you consider that a top hat is always somewhat extraordinary, of course. ',
			img: '/img/testimonials/red-woman.png',
			style: 'redWoman'
		},
		{
			name: 'Adrian Atkins',
			position: '- Financial advisor',
			quote: ' Life would be a great deal easier if dead things had the decency to remain dead. ',
			img: '/img/testimonials/orange-man.png',
			style: 'orangeMan'
		},
		{
			name: 'Timothy Norris',
			position: '- Actor',
			quote:
				' I love jell-o. I love the way it comes in rainbow colours, wiggles and jiggles and looks like brains. ',
			img: '/img/testimonials/white-man.png',
			style: 'whiteMan'
		},
		{
			name: 'Gregory Mora',
			position: '- Managing director',
			quote:
				" The lampshade on my head is for my bright ideas. I won't be able to convey them until Monday, when my curtain gets out of the dry cleaners. ",
			img: '/img/testimonials/navy-man.png',
			style: 'navyManSecond'
		}
	];

	const [ curQuote, setQuote ] = useState([ testimonials[0].quote, testimonials[0].name, testimonials[0].position ]);

	return (
		<div className={styles.mainContainer}>
			<div className={styles.imgs}>
				{testimonials.map(({ img, style, quote, name, position }) => (
					<img
						src={img}
						alt="icon"
						onClick={() => setQuote([ quote, name, position ])}
						className={styles[style]}
					/>
				))}
			</div>

			<div className={styles.text}>
				<p className={styles.testimonial}>“ {curQuote[0]} ”</p>
				<p className={styles.name}>
					{curQuote[1]} <span>{curQuote[2]}</span>
				</p>
			</div>

			<div className={styles.stringImg}>
				<img src="/img/testimonials/red-string-bottom.png" />
			</div>
		</div>
	);
};

export default Testimonials;
