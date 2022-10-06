import './App.css';

import {Component} from 'react'
import Char from './components/Char.jsx'
import Pika from './components/Pika.jsx'

import CharPic from './charizard.png'
import PikaPic from './pikachu.png'

class App extends Component {

  state = {
    charizard: '100',
    pikachu: '100',
    status: 'Waiting for an attack..'
  }

  attackC= () => {
    let temp = (this.state.charizard * 1) - 10 
    this.setState({charizard: temp})
    this.setState({status: 'Pikachu Attacks!'})
  }

  attackP = () => {
    let temp = (this.state.pikachu * 1) - 10 
    this.setState({pikachu: temp})
    this.setState({status: 'Charizard Attacks!'})
  }

  render() {
    return (
      <div className='main-div'> 
        
        <div className='char-div'> 
        <Char pic={CharPic}/> 
        <button onClick={this.attackP}>Charizard Attacks!</button>
        <h1> HP: {this.state.charizard} </h1>
        </div> 

        <div className='pika-div'> 
        <Pika pic={PikaPic}/>
        <button onClick={this.attackC}>Pikachu Attacks!</button>
        <h1> HP: {this.state.pikachu} </h1>
        </div> 

        <div className='status'> 
        <h1> {this.state.status} </h1>
        </div>
      
      </div>
    )
  }
}

export default App;
