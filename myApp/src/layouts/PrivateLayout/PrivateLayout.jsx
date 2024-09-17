"use client";
import React, { Children } from 'react';
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
				<h1 className={styles.footer}>Esto es un footer</h1>
			</footer>
 		</div>
	);
};

export default PrivateLayout;