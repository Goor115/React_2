function Login() {
  function handleFormSubmit(event) {
    event.preventDefault()

    const userData = {
      username: event.target.username.value,
      password: event.target.password.value,
    }
    alert(JSON.stringify(userData))
  }

  return (
    <>
      <h1>Login form</h1>
      <form onSubmit={handleFormSubmit}>
        <label>
          User Name <input type="text" name="username"></input>
        </label>
        <label>
          Password <input type="password" name="password"></input>
        </label>
        <button type="submit">Login</button>
      </form>
    </>
  )
}

export default Login
