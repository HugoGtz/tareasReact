import React, { useState } from 'react'

const NuevaTarea = (props) => {
    const [ contenido, setContenido ] = useState('Escriba la tarea')

    const subirTarea = e => {
        e.preventDefault()
        setContenido("")
        props.guardarTarea(contenido)
        props.cerrarModal()
    }

    return (
        <div>
            <form onSubmit={subirTarea}>
                <label hmtlFor="contenido">
                    Escribe una nueva tarea
                    <br/>
                    {contenido}
                    <input
                        id="contenido"
                        value={contenido}
                        onChange={e => setContenido(e.target.value)} />
                </label>
                <button type="submit"> Guardar </button>
            </form>
        </div>
    )
}
export default NuevaTarea