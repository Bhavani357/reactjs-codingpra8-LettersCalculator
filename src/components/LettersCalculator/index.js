import './index.css'
import {Component} from 'react'

class LettersCalculator extends Component {
  state = {count: 0}

  onCountingLetters = event => {
    const inputText = event.target.value

    if (inputText.length > 0) {
      this.setState({
        count: inputText.length,
      })
    } else {
      this.setState({
        count: 0,
      })
    }
  }

  render() {
    const {count} = this.state

    return (
      <div className="bg-container">
        <div className="left-container">
          <h1 className="heading">
            Calculate the
            <br />
            Letters you
            <br />
            enter
          </h1>
          <label htmlFor="inputElement" className="label">
            Enter the phrase
          </label>
          <input
            type="text"
            id="inputElement"
            placeholder="Enter the phrase"
            className="input-element"
            onChange={this.onCountingLetters}
          />
          <p className="bottom-para">No.of letters: {count}</p>
        </div>

        <img
          src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
          alt="letters calculator"
          className="image"
        />
      </div>
    )
  }
}
export default LettersCalculator
