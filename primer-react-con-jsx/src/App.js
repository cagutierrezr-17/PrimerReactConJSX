import { Component } from "react";
import ListaTareas from "./Componentes/listaTareas.js"

class App extends Component{
  render (){
    return(
      <div>
        <h1>Hello Dojo!</h1>
        <ListaTareas></ListaTareas>
      </div>
    );
  }
}

export default App;
