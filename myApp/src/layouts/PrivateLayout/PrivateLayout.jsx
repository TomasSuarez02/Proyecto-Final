"use client";
import React, { Children } from 'react';
import styles from './PrivateLayout.module.css';
import { useAuth } from '../../hooks';
import { useNavigate, NavLink, Outlet } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';

const PrivateLayout = () => {
	const {onLogout} = useAuth();
	const navigate = useNavigate();

	const handleClick = () => {
		onLogout();
		navigate('/');
	}

	const {theme} = useTheme();

	return (
		<div className={`${styles.privatelayout} && ${theme}`}>
 			<header className={styles.header}>
				<nav className={styles.nav}>
					<ul>
						<li>
							<NavLink to='/home' activeclassname='active'>Home</NavLink>
						</li>
						<li>
							<NavLink to='/employees' activeclassname='active'>Employees</NavLink>
						</li>
						<li>
							<NavLink to='/users' activeclassname='active'>Users</NavLink>
						</li>
					</ul>
					<button className={styles.button} type='button' onClick={handleClick}>Logout</button>
				</nav>
			</header>
			<main className={styles.main}><Outlet/></main>
			<footer className={styles.footer}>
				<h1 className={styles.footer}>Esto es un footer</h1>
			</footer>
 		</div>
	);
};

export default PrivateLayout;