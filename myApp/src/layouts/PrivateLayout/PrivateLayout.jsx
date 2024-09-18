"use client";
import React from 'react';
import styles from './PrivateLayout.module.css';
import { Outlet } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import { NavBar } from '../../components';

const PrivateLayout = () => {
	const {theme} = useTheme();

	return (
		<div className={`${styles.privatelayout} && ${theme}`}>
 			<header className={styles.header}>
				<NavBar/>
			</header>
			<main className={styles.main}><Outlet/></main>
			<footer className={styles.footer}>
				<div className={styles.footerInfo}>
					<h1 className={styles.footerInfo}>Contacta con nosotros</h1>
					<p className={styles.footerInfo}>Email: myApp@gmail.com</p>
					<p className={styles.footerInfo}>Telefono: 341-3-568792</p>
				</div>
			</footer>
 		</div>
	);
};

export default PrivateLayout;