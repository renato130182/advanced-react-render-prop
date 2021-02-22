import React, { Component,Fragment } from "react";
import Counter from "./Counter";

const Buttons = ({incremet,decrement,count}) => (
  <Fragment>
    <h1>Valor atual {count}</h1>
    <div>
      <button onClick={incremet}>Adicionar</button> 
    </div>
    <div>
      <button onClick={decrement}>Remover</button>
    </div>
  </Fragment>
)

class App extends Component{

  render(){
    return(
      <Fragment>
        <Counter render={({incremet,decrement,count}) => (
          <Buttons incremet={incremet} decrement={decrement} count={count}>            
          </Buttons>
        )
      }>          
        </Counter>
      </Fragment>
    )
  }
}
export default App;
