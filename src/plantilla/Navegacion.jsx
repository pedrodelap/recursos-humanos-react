import { Link } from "react-router-dom"

export const Navegacion = () => {
    
    return (
    
        <div className='container'>

            <nav className='navbar navbar-expand-lg bg-body-tertiary'>
                <div className='container-fluid'>
                    <Link className='navbar-brand' to='/'>
                        {/* <img src='assets/react.svg' alt='Logo' width='30' height='24' className='d-inline-block align-text-top' /> */}
                        Sistema de Recursos Humanos
                    </Link>
                    <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarNav' aria-controls='navbarNav' aria-expanded='false' aria-label='Toggle navigation'>
                    <span className='navbar-toggler-icon'></span>
                    </button>
                    <div className='collapse navbar-collapse' id='navbarNav'>
                    <ul className='navbar-nav'>
                        <li className='nav-item'>
                        <Link className='nav-link active' aria-current='page' to='/' >Inicio</Link>
                        </li>
                        <li className='nav-item'>
                        <Link className='nav-link' to='/agregar'>Agregar Empleado</Link>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>

        </div>
    
    )

}


// https://www.npmjs.com/package/react-router-dom
// https://reactrouter.com/en/main/start/tutorial
// $ npm install react-router-dom