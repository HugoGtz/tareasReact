import React from 'react'
import { Card, Icon} from 'antd'

const Tarea = props => (
    <Card hoverable extra={<Icon type="close-circle" onClick={ e => props.eliminarTarea(props.tareaKey)}/>}>
        <Card.Meta 
            title={props.tarea.contenido}
            description={props.tarea.fecha} />
    </Card>
)

export default Tarea