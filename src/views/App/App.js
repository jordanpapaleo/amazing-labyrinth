import './app.scss'
import React, {Component} from 'react'
import Board from 'components/Board'

class App extends Component {
  render () {
    return (
      <div className='app-component'>
        <Board size={5} />
      </div>
    )
  }
}

export default App
