"use client";
import React, { useEffect, useState } from 'react';
import styles from './EmployeesList.module.css';
import { AddEmployeeContainer } from '../../containers';

const EmployeesList = ({}) => {
	const [employees, setEmployees] = useState([]);
	const [isLoading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchEmployees = async () => {
			try {
				const response = await fetch('http://localhost:3000/employees');

				if (!response.ok) {
					setError('Error al obtener los datos de los Empleados', response.statusText);
					return;
				}
				const data = await response.json();
				setEmployees(data);
				setLoading(false);

			} catch (error) {
				setError('Error de servidor');
				setLoading(false);				
			}
		} 

		fetchEmployees();
	}, [])

	if (isLoading) return <div>Loading...</div>;
	if (error == '') return <div>Error: {error.message}</div>;

	const deleteEmployee = async (id) => {
		try {
			const response = await fetch(`http://localhost:3000/employees/${id}`, {method: 'DELETE'})

			if (!response.ok) {
				setError('Error al eliminar el empleado', response.statusText);
				return;
			}

			const newEmployees = employees.filter((employee) => employee.id != id);
			setEmployees(newEmployees);

		} catch (error) {
			setError('Error al eliminar el empleado');
			setLoading(false);				
		}
	}

	return (
		<div className={styles.employeeslist}>
			<h1>Lista de Empleados</h1>
			<ul>
				{employees.map((employee) => (
					<p>
						<li key={employee.id}  className={styles.lista}>
							{employee.name} - {employee.surname} - {employee.cargo} - {employee.telefono}
						<button className={styles.button} type='button' onClick={() => deleteEmployee(employee.id)}>Eliminar</button>
						</li>
					</p>
				))}
			</ul>
			<AddEmployeeContainer/>
		</div>
	)
};

export default EmployeesList;