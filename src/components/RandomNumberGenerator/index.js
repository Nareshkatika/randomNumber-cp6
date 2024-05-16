// Write your code here
import {useState} from 'react'

import './index.css'

const RandomNumberGenerator = () => {
  const [number, setNumber] = useState(0)

  const randomNumber = Math.ceil(Math.random() * 100)

  const solution = () => {
    setNumber(randomNumber)
  }
  return (
    <div className="BgImg">
      <div className="WhitePageEl">
        <h1 className="headingEl1">Random Number</h1>
        <p>Generate a random number in the range of 0 to 100</p>
        <div>
          <button onClick={solution} className="buttonEl2" type="button">
            Generate
          </button>
        </div>
        <p>{number}</p>
      </div>
    </div>
  )
}

export default RandomNumberGenerator
