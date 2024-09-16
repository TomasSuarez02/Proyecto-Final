"use client";
import React from 'react';
import styles from './NotFoundPage.module.css';
import { useNavigate } from 'react-router-dom';

const NotFoundPage = ({}) => {
	const navigate = useNavigate();

	const handleClick = () => {
		navigate('/home');
	}

	return (
		<div className={styles.notfoundpage}>
 			¡404 Page Not Found!
			<button className={styles.button} type='button' onClick={handleClick}>Volver al Home</button>
 		</div>
	);
};

export default NotFoundPage;