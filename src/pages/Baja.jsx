import { useState } from 'react';
import { deletePerson} from '../Service/api';
const Baja = () => {
    const [id, setId] = useState('');

    return (
        <div>
            <h1>Baja</h1>
            <p>
                <input type="number" id='Id' onChange={e => setId(e.target.value)} />
                
                <button onClick={async () => {
                    await deletePerson(id);
                
                }}>Eliminar</button>
            </p>

        </div>
    )
}

export default Baja;