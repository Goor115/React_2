import Todo from './Todo'
import styles from './TodoList.module.css'

function TodoList({ todos, deletTodo }) {
  return (
    <div className={styles.todoListContainer}>
      {todos.length === 0 && <h2>Todo list is empty</h2>}
      {todos.map((todo, index) => (
        <Todo key={index} todo={todo} deletTodo={deletTodo} index={index} />
      ))}
    </div>
  )
}

export default TodoList
