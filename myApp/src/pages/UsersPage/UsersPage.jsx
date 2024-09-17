"use client";
import React from 'react';
import styles from './UsersPage.module.css';
import { UsersList } from '../../components'

const UsersPage = ({}) => {
	return (
		<div className={styles.userspage}>
 			<UsersList/>
 		</div>
	);
};

export default UsersPage;