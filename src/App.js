import React, { Component } from 'react';
import './App.css'
import NuevaTarea from './NuevaTarea';
import firebase from 'firebase'
import {Row, Col} from 'antd'
import Tarea from './Tarea'

class App extends Component {

  state = {
    tareas: []
  }

  componentDidMount(){
    firebase.database().ref('/tareas').on('value', (snapshot) => {
      this.setState({
        tareas: snapshot.val() || {}
      })
    })
  }

  guardarTarea = (contenido) =>{
    firebase.database().ref('/tareas').push({
      contenido,
      fecha: Date.now()
    })
    this.setState( state => ({
      tareas:[...state.tareas, contenido]
    }))
  }

  eliminarTarea = (tareaKey) => {
    firebase.database().ref(`/tareas/${tareaKey}`).remove()
  }

  render(){
    const { tareas } = this.state
    return (
      <Row type="flex" justify="center">
        < Col span={8}>
          < NuevaTarea guardarTarea={this.guardarTarea} />
        </ Col>
        <ul>
          {
            Object.keys(tareas).map( (key, i) => (
                  <Tarea
                    eliminarTarea={this.eliminarTarea}
                    tarea={tareas[key]}
                    key={key}
                    tareaKey={key}
                    />
              )
            ) 
          }
        </ul>
      </Row>
    )    
  }
  
}

export default App;
