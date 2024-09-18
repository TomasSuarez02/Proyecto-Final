"use client";
import React from 'react';
import styles from './EmployeesPage.module.css';
import { EmployeesList } from '../../components';

const EmployeesPage = ({}) => {

	return (
		<div className={styles.employeespage}>
 			<EmployeesList/>
 		</div>
	);
};

export default EmployeesPage;