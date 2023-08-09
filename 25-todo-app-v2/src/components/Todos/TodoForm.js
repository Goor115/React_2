import { useState } from 'react'
import Button from '../UI/Button'
import styles from './TodoForm.module.css'

function TodoForm({ addTodo }) {
  const [text, setText] = useState('')
  const onSubmitHandler = (event) => {
    event.preventDefault()
    addTodo(text)
    setText('')
  }

  return (
    <div className={styles.todoFormContainar}>
      <form onSubmit={onSubmitHandler}>
        <input
          type="text"
          name="username"
          placeholder="Enter new todo"
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></input>
        <Button title="Submit" type="submit">
          Submit
        </Button>
      </form>
    </div>
  )
}

export default TodoForm
