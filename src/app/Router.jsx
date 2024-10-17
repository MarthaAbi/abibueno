import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from '../pages/Home';
import Alta from '../pages/Alta';
import Baja from '../pages/Baja';
import Consulta from '../pages/Consulta';

const Router = () => (
    <BrowserRouter basename='/codifront'>
        <Routes>   
            <Route index element={<Home/>} />
            <Route path="/alta/" element={<Alta/>} />
            <Route path="/baja/" element={<Baja/>} />
            <Route path="/consulta/" element={<Consulta/>} />
             { /* Es muy recomendable añadir esta ruta para obtener un mensaje de error en el caso de que la ruta no exista. De lo contrario, si la ruta no existe llegaremos a una página en blanco */}    
            <Route path="*" element={<div>404</div> } />
        </Routes>
    </BrowserRouter>
);

export default Router;