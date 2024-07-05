import {Component} from 'react'

import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  onRandomNumber = () => Math.ceil(Math.random() * 100)

  increaseNumbers = () => {
    const randomNumber = this.onRandomNumber()
    this.setState(prevState => ({count: prevState.count + randomNumber}))
  }
  render() {
    const {count} = this.state
    const displayText = count % 2 === 0 ? 'Even' : 'Odd'
    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="count-view">Count {count}</h1>
          <p className="number-type">Count is {displayText}</p>
          <button
            type="button"
            className="button"
            onClick={this.increaseNumbers}
          >
            Increment
          </button>
          <p className="description">
            *Increase By Random Number Between 0 to 100
          </p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
