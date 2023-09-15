// Write your code here.
import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component {
  state = {searchInput: ''}

  onChangeInput = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  render() {
    const {searchInput} = this.state

    return (
      <div className="calculator-bg">
        <div className="calculate-left-section">
          <h1 className="calculate-title">Calculate the Letters you enter</h1>
          <label htmlFor="text-id" className="calculate-phrase">
            Enter the phrase
          </label>
          <input
            type="text"
            id="text-id"
            className="text-box"
            placeholder="Enter the Phrase"
            value={searchInput}
            onChange={this.onChangeInput}
          />
          <p className="no-of-letters-box">
            No.of Letters: {searchInput.length}
          </p>
        </div>
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
            className="cal-image"
          />
        </div>
      </div>
    )
  }
}

export default LettersCalculator
