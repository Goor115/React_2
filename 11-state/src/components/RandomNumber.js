import { useState } from 'react'
import generateRandomNumb from '../utils/generateRendomNumb'

function RandomNumber(props) {
  const { maxNumb } = props
  const [rendomNumb, setRendomNumb] = useState(generateRandomNumb(maxNumb))
  const changeRandomNumb = () => {
    setRendomNumb(generateRandomNumb(maxNumb))
  }
  return (
    <div>
      <h1>{rendomNumb}</h1>
      <button onClick={changeRandomNumb}>Generate new random number</button>
    </div>
  )
}

export default RandomNumber
