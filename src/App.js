import React, { Fragment, useState } from 'react';
import Formulario from './components/Formulario';


function App() {

  //Arreglo de citas
  const [citas, guardarCitas] = useState([]);

  //función que toma las citas actuales y agrega la nueva
  const crearCita = cita => {
    guardarCitas([
      ...citas,
      cita
    ]);
  }

  return (
    <Fragment>
      <h1>Administrador de Citas</h1>

      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario 
              crearCita={crearCita}
            />
          </div>
          <div className="one-half column">
            2
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
