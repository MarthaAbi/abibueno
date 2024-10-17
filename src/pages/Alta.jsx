import { useState } from 'react';
import {savePersonName } from '../Service/api';

const Alta = () => {
    const [nameState, setNameState] = useState('');
    const [ageState, setAgeState] = useState('');
    
    const handleSave = () =>{
        const person ={name:nameState, age: ageState}
        savePersonName(person)
    }
    
        return (
            <div>
                <h1>Alta</h1>
            <p>Nombre: <input type="text" name="nombre" onChange={e => setNameState(e.target.value)}/></p>
            <p>Edad: <input type="number" age="edad" onChange={e => setAgeState(e.target.value)}/></p>
    
            <button onClick={handleSave}>Guardar</button>
            </div>
        )
    }
export default Alta;