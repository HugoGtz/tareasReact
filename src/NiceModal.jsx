import React, { useState, Fragment} from 'react'
import { Modal } from 'antd'


const NiceModal = props => {
    const [visible, setVisible] = useState(false)
    
    const accionar = () => setVisible(!visible)

    return (
        <Fragment>
            { props.button ? (
                    React.cloneElement(props.button,{ onClick: accionar})
                ) : (
                    <button onClick={accionar}> {props.tituloBoton}</button>
                    ) 
            }
            <Modal tittle={props.titulo} onCancel={accionar} visible={visible} footer={null}>
                {React.cloneElement(props.children, {cerrarModal:accionar})}
            </Modal>
        </Fragment>
    )
}

export default NiceModal