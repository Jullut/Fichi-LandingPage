import React from 'react';
import styles from './Header.module.scss';
import Button from '../Button';

const Header = () => {
	return (
		<header className={styles.mainContainer}>
			<div className={styles.logo}>
				<img src="/img/header/logo.png" alt="logo" />
			</div>

			<div>
				<ol className={styles.navigationList}>
					<li>Home</li>
					<li>About</li>
					<li>Work</li>
					<li>Contact</li>
				</ol>
			</div>

			<div className={styles.btnContainer}>
				<Button color="mint">Get Start</Button>
			</div>
		</header>
	);
};

export default Header;
