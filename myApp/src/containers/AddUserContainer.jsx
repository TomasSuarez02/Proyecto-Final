import { useState } from "react";
import { useForm } from '../hooks'
import { AddUserForm } from '../components';

const AddUserContainer = () => {
	const {values, handleChange, handleSubmit} = useForm({id: '', username: '', email: '', password: ''});
    const [error, setError] = useState(null);

	const submitForm = async () => {
        try {
			const requestOptions = {
				method: 'POST',
				headers: {'Content-Type': 'application/json'},
				body: JSON.stringify({id: values.id, username: values.username, email: values.email, password: values.password})
			}
			const response = await fetch(`http://localhost:3000/users`, requestOptions);

			if (!response.ok) {
				setError('Error al cargar el usuario', response.statusText);
				return;
			}

		} catch (error) {
			setError('Error al cargar el usuario');			
		}
	};
    
    return <AddUserForm 
        values={values} 
        handleChange={handleChange} 
        handleSubmit={handleSubmit(submitForm)}
        error={error}
    ></AddUserForm>;
};

export default AddUserContainer;