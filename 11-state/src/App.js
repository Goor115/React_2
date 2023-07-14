import './App.css'
import RandomNumber from './components/RandomNumber'

function App() {
  return (
    <div className="App">
      <RandomNumber maxNumb={1000} />
    </div>
  )
}

export default App
