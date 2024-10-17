import {useEffect, useState } from 'react';
import {getPersons} from '../Service/api';

const Consulta = () => {
        const [consultaState, setConsultaState] = useState();
        
useEffect(()=> {
getPersons().then( data => {
    setConsultaState(data.data)
});
},[])
       return (
        <div>
            {
                consultaState?.map(person => (
                    <div>
                        {person.id}<span>  </span>
                        {person.name}<span>  </span>
                        {person.age}
                        </div>
                ))
            }
        </div>
       )
        }
export default Consulta;