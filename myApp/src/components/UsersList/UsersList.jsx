"use client";
import { useState, useEffect } from 'react';
import styles from './UsersList.module.css';

const UsersList = ({}) => {
	const [users, setUsers] = useState([]);
	const [isLoading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchUsers = async () => {
			try {
				const response = await fetch('http://localhost:3000/users');

				if (!response.ok) {
					setError('Error al obtener los datos de los Usuarios', response.statusText);
					return;
				}
				const data = await response.json();
				setUsers(data);
				setLoading(false);

			} catch (error) {
				setError('Error de servidor');
				setLoading(false);				
			}
		} 

		fetchUsers();
	}, [])

	if (isLoading) return <div>Loading...</div>;
	if (error == '') return <div>Error: {error.message}</div>;

	const deleteUser = async (id) => {
		try {
			const response = await fetch(`http://localhost:3000/users/${id}`, {method: 'DELETE'})

			if (!response.ok) {
				setError('Error al eliminar el usuario', response.statusText);
				return;
			}

		} catch (error) {
			setError('Error al eliminar el usuario');
			setLoading(false);				
		}
	}

	return (
		<div className={styles.employeeslist}>
			<h1>Lista de Usuarios</h1>
			<ul>
				{users.map((user) => (
					<p>
						<li key={user.id}>
							{user.username} - {user.email}
						<button className={styles.button} type='button' onClick={() => deleteUser(user.id)}>Eliminar</button>
						</li>
					</p>
				))}
			</ul>
		</div>
	)
};

export default UsersList;