import React, {Fragment, useState} from 'react';
import { v4 as uuidv4 } from 'uuid';

const Formulario = ({crearCita}) => {

    //Crear usestate de cita
    const [cita, actualizarCita] = useState ({
        mascota: '',
        propietario: '',
        fecha: '',
        hora: '',
        sintomas: ''
    });

    const [error, actualizarError] = useState(false)

    //funcion que se ajecuta cada que el usuario escribe en un input
    const actualizarState = e => {
        actualizarCita({
            ...cita,
            [e.target.name]: e.target.value 
        })
    }

    //Extraer valores
    const{mascota, propietario, fecha, hora, sintomas } = cita;

    //Cuando el ususarios preciona agregar cita
    const submitCita = e => {
        e.preventDefault();

        //validar
        if (mascota.trim() ==='' || propietario.trim() ==='' ||  fecha.trim() ==='' || hora.trim() ==='' || sintomas.trim() ==='') {
            actualizarError(true);
            return;
        }

        //Eliminar mensaje de error
        actualizarError(false);

        //Asignar id
        cita.id = uuidv4();

        //Crear la cita
        crearCita(cita);

        //Reiniciar el form
        actualizarCita({
        mascota: '',
        propietario: '',
        fecha: '',
        hora: '',
        sintomas: ''
    });

    }

    return ( 
        <Fragment>
            <h2>Crear Cita</h2>

            {error ? <p className="alerta-error">Debes llenar todos los campos</p> :  null}

            <form
                onSubmit={submitCita}
            >
                <label>Nombre de la Mascota</label>
                <input 
                    type="text"
                    name="mascota"
                    className="u-full-width"
                    placeholder="Nombre de la Mascota"
                    onChange={actualizarState}
                    value={mascota}
                />

                <label>Nombre del Dueño</label>
                <input 
                    type="text"
                    name="propietario"
                    className="u-full-width"
                    placeholder="Nombre del dueño"
                    onChange={actualizarState}
                    value={propietario}
                />

                <label>Fecha</label>
                <input 
                    type="date"
                    name="fecha"
                    className="u-full-width"
                    onChange={actualizarState}
                    value={fecha}
                />
                <label>Hora</label>
                <input 
                    type="time"
                    name="hora"
                    className="u-full-width"
                    onChange={actualizarState}
                    value={hora}
                />

                <label>Sintomas</label>
                <textarea
                    className="u-full-width"
                    name="sintomas"
                    onChange={actualizarState}
                    value={sintomas}
                >
                </textarea>

                <button
                    type="submit"
                    className="u-full-width button-primary"
                >Agregar Cita</button>
            </form>
        </Fragment>
     );
}
 
export default Formulario;