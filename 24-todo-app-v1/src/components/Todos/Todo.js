import { RiTodoFill } from 'react-icons/ri'
import style from './Todo.module.css'

function Todo({ todo, index, deletTodo }) {
  return (
    <div className={style.todo} onDoubleClick={() => deletTodo(index)}>
      <RiTodoFill className={style.todoIcon} />
      <div className={style.todoText}>{todo}</div>
    </div>
  )
}

export default Todo
