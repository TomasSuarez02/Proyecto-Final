import { useState } from "react";
import { useForm } from '../hooks'
import { AddUserForm } from '../components';

const AddUserContainer = () => {
	const {values, handleChange, handleSubmit} = useForm({id: '', name: '', surname: '', cargo: '', telefono: '', email: ''});
    const [error, setError] = useState(null);

	const submitForm = async () => {
        try {
			const response = await fetch(`http://localhost:3000/users`, {method: 'POST'}, 
                {headers: {'Content-Type': 'application/json'}, 
                body: JSON.stringify({id: values.id, name: values.name, surname: values.surname, cargo: values.cargo, telefono: values.telefono, email: values.email})})

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