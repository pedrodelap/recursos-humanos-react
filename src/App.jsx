import { AgregarEmpleado } from "./empleados/AgregarEmpleado"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { ListadoEmpleados } from "./empleados/ListadoEmpleados"
import { Navegacion } from "./plantilla/Navegacion"
import { EditarEmpleado } from "./empleados/EditarEmpleado"

export const App = () => {

    return (

        <div className="container">
            
            <BrowserRouter>
                <Navegacion />
                <Routes>
                    <Route exact path='/' element={ <ListadoEmpleados /> }/>
                    <Route exact path='/agregar' element={ <AgregarEmpleado /> }/>
                    <Route exact path='/editar/:id' element={ <EditarEmpleado /> }/>
                </Routes>
            </BrowserRouter>
        </div>
    )

}
