"use client";
import React from 'react';
import styles from './PublicLayout.module.css';
import { Outlet } from 'react-router-dom';

const PublicLayout = () => {
	return (
		<div className={styles.publiclayout}><Outlet/></div>
	);
};

export default PublicLayout;