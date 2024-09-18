"use client";
import React from 'react';
import styles from './AddUserForm.module.css';

const AddUserForm = ({values, handleChange, handleSubmit, error}) => {
	if (error) return error;

	return (
		<div className={styles.adduserform}>
			<h1>Add New User</h1>
 			<form onSubmit={handleSubmit} className={styles.form}> 
				<div className={styles.formgroup}>
					<label htmlFor='id'>Id</label>
					<input type='text' id='id' name='id' required value={values.id} onChange={handleChange}/>
				</div>
				<div className={styles.formgroup}>
					<label htmlFor='username'>Username</label>
					<input type='text' id='username' name='username' required value={values.username} onChange={handleChange}/>
				</div>
				<div className={styles.formgroup}>
					<label htmlFor='email'>Email</label>
					<input type='email' id='email' name='email' required value={values.email} onChange={handleChange}/>
				</div>
				<div className={styles.formgroup}>
					<label htmlFor='password'>Password</label>
					<input type='password' id='password' name='password' required value={values.password} onChange={handleChange}/>
				</div>
				<button className={styles.submitButton} type='submit'>Enviar</button>
			</form>
 		</div>
	);
};

export default AddUserForm;