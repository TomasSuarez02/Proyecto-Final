"use client";
import React from 'react';
import styles from './AddEmployeeForm.module.css';

const AddEmployeeForm = ({values, handleChange, handleSubmit, error}) => {
	if (error) return error;

	return (
		<div className={styles.addemployeeform}>
			<h1>Add New Employee</h1>
 			<form onSubmit={handleSubmit} className={styles.form}> 
				<div className={styles.formgroup}>
					<label htmlFor='id'>Id</label>
					<input type='text' id='id' name='id' required value={values.id} onChange={handleChange}/>
				</div>
				<div className={styles.formgroup}>
					<label htmlFor='name'>Name</label>
					<input type='text' id='name' name='name' required value={values.name} onChange={handleChange}/>
				</div>
				<div className={styles.formgroup}>
					<label htmlFor='surname'>Surname</label>
					<input type='text' id='surname' name='surname' required value={values.surname} onChange={handleChange}/>
				</div>
				<div className={styles.formgroup}>
					<label htmlFor='cargo'>Cargo</label>
					<input type='text' id='cargo' name='cargo' required value={values.cargo} onChange={handleChange}/>
				</div>
				<div className={styles.formgroup}>
					<label htmlFor='telefono'>Telefono</label>
					<input type='text' id='telefono' name='telefono' required value={values.telefono} onChange={handleChange}/>
				</div>
				<div className={styles.formgroup}>
					<label htmlFor='email'>Email</label>
					<input type='email' id='email' name='email' required value={values.email} onChange={handleChange}/>
				</div>
				<button className={styles.submitButton} type='submit'>Enviar</button>
			</form>
 		</div>
	);
};

export default AddEmployeeForm;