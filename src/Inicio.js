import perfil from '../src/assets/perfil.jpg';
import './App.css';
function Inicio() {
    return(
        <div className='contenedor'>
            <div className='header'>
                <img src={perfil} alt="foto" className="foto" />
                <div>
                    <h1>Castrejon Alvarez Jesus Antonio
                        <span className="badge-disponible">Disponible</span>
                    </h1>
                    <p>Desarrollador de apps moviles y paginas web</p>
                </div>
            </div>
            <div>
                <span className="badge azul">Node.js</span>
                <span className="badge azul">PHP</span>
                <span className="badge azul">Java</span>
                <span className="badge morado">React</span>
                <span className="badge morado">React Native</span>
                <span className="badge morado">Javascript</span>
                <span className='badge rojo'>Git</span>
                <span className='badge rojo'>Expo</span>
                <span className='badge naranja'>MySQL</span>
                <span className='badge naranja'>XAMPP</span>
            </div>
            <div className='proyectos'>
                <h2>CRUD de una cremaria</h2>
                <p>Puedes llevar el inventario y las ventas pero plantilla sencila</p>
                <a href='https://github.com/Juan35z/plantillasencillaCRUD.git' target='_blank' rel='noreferrer'>GitHub</a>
                <a href='https://github.com/Juan35z/DBSale/releases/download/v3.0.1/Quesos.de.mi.Rancho.apk' target='_blank' rel='noreferrer'>Demo</a>
            </div>
            <div className='proyecto'>
                <h2>CRUD de una cremaria</h2>
                <p>Puedes llevar el inventario y ventas pero mas completo</p>
                <a href='https://github.com/Juan35z/plantillacontodoCRUD.git' target='_blank' rel='noreferrer'>GitHub</a>
                <a href='https://github.com/Juan35z/plantillacontodoCRUD/releases/download/v3.0/Stock.apk' target='_blank' rel='noreferrer'>Demo</a>
            </div>
            <div className='proyecto'>
                <h2>Llevar tu semana</h2>
                <p>Puedes llevar el control sobre los gastos de tu semana</p>
                <a href='https://github.com/Juan35z/prototipo.git' target='_blank' rel='noreferrer'>GitHub</a>
                <a href='https://github.com/Juan35z/prototipo/releases/download/v3.0/Gastos.apk' target='_blank' rel='noreferrer'>Demo</a>
            </div>
        </div>
    );
}
export default Inicio;