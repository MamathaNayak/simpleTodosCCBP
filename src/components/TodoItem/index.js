// Write your code here
import './index.css'

const TodoItem = props => {
  const {todoItem, userDelete} = props
  const {id, title} = todoItem
  const onDelete = () => {
    userDelete(id)
  }
  return (
    <li className="todo-container">
      <p className="paragraph">{title}</p>
      <button type="button" className="button" onClick={onDelete}>
        Delete
      </button>
    </li>
  )
}
export default TodoItem
