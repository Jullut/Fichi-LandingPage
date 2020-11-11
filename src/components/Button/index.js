import React from 'react';
import styles from './Button.module.scss';
import cx from 'classnames';

const Button = ({ color, children }) => {
	return <button className={cx(styles.btn, styles[color])}>{children}</button>;
};

export default Button;
