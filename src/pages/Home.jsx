import { Link } from 'react-router-dom';

const Home = ({ children }) => (
    <div>
        <div>
            <ul>
                <li><Link to="Alta">Alta</Link></li>
                <li><Link to="Baja">Baja</Link></li>
                <li><Link to="Consulta">Consulta</Link></li>
            </ul>
        </div>
        {children}
    </div>
)

export default Home;