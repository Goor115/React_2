import { RiDeleteBack2Line, RiTodoFill } from 'react-icons/ri'
import { FaCheck } from 'react-icons/fa'
import style from './Todo.module.css'

function Todo({ todo, deletTodo, togleTodo }) {
  return (
    <div
      className={`${style.todo}  ${
        todo.isCompleted ? style.completedTodo : ''
      }`}
    >
      <RiTodoFill className={style.todoIcon} />
      <div className={style.todoText}>{todo.text}</div>
      <RiDeleteBack2Line
        className={style.deleteIcon}
        onClick={() => deletTodo(todo.id)}
      />
      <FaCheck className={style.checkIcon} onClick={() => togleTodo(todo.id)} />
    </div>
  )
}

export default Todo
