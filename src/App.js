import React, { Component } from 'react';
import './App.css'
import NuevaTarea from './NuevaTarea';
import firebase from 'firebase'
import {Row, Col} from 'antd'
import Tarea from './Tarea'
import NiceModal from './NiceModal'
import {ThemeProvider} from './Providers'
import FancyButton from './Button'

class App extends Component {

  state = {
    tareas: [],
    theme: 'white'
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
  }

  eliminarTarea = (tareaKey) => {
    firebase.database().ref(`/tareas/${tareaKey}`).remove()
  }

  cambiarTema = () => this.setState(state => ({
    theme: state.theme === "white" ? "dark" : "white"
  }))

  render(){
    const { tareas, theme } = this.state
    return (
      < ThemeProvider value={{theme: theme}} >
      <Row type="flex" justify="center">
        < Col span={8}>
          < NiceModal button={<FancyButton theme={theme}>Abrir</FancyButton>} titulo="Nuevo Modal" tituloBoton="Abrir Modal">
            < NuevaTarea guardarTarea={this.guardarTarea} />
          < /NiceModal>
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
      <FancyButton onClick={this.cambiarTema}>Camiar Tema</FancyButton>
      </ThemeProvider>
    )    
  }
  
}

export default App;
