const App = ({ initialButtonText, initialClassList }) => {
  const [buttonText, setButtonText] = React.useState(initialButtonText)
  const [classList, setButtonGreen] = React.useState(initialClassList)

  const onButtonClick = () => {
    setButtonText('Hello from React')
    setButtonGreen('green-btn')
  }

  return (
    <div className="app">
      <button className={classList} onClick={onButtonClick}>
        {buttonText}
      </button>
    </div>
  )
}
const container = document.getElementById('app')
const root = ReactDOM.createRoot(container)
root.render(<App initialButtonText="Click me" initialClassList="" />)
