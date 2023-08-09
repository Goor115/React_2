import Todo from './Todo'
import styles from './TodoList.module.css'

function TodoList({ todos, deletTodo, togleTodo }) {
  return (
    <div className={styles.todoListContainer}>
      {todos.length === 0 && <h2>Todo list is empty</h2>}
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          deletTodo={deletTodo}
          togleTodo={togleTodo}
        />
      ))}
    </div>
  )
}

export default TodoList
