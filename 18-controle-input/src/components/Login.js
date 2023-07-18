import { useState } from 'react'

function Login() {
  const [data, setData] = useState({ username: '', password: '' })

  function handleFormSubmit(event) {
    event.preventDefault()
    alert(JSON.stringify(data))
  }

  function handleInputChange(e, name) {
    setData({ ...data, [name]: e.target.value })
  }

  return (
    <>
      <h1>Login form</h1>
      <form onSubmit={handleFormSubmit}>
        <label>
          <input
            type="text"
            value={data.username}
            onChange={(e) => handleInputChange(e, 'username')}
          ></input>
        </label>
        <label>
          <input
            type="password"
            value={data.password}
            onChange={(e) => handleInputChange(e, 'password')}
          ></input>
        </label>
        <button type="submit">Login</button>
      </form>
    </>
  )
}

export default Login
