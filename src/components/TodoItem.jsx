import { FaCheck, FaUndo, FaTrash } from 'react-icons/fa';



function TodoItem({ todo, toggleComplete, deleteTodo }) {
  return (
    <li style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
      <span>{todo.text}</span>
      <button onClick={() => toggleComplete(todo.id)}>
        {todo.completed ? 'Desfazer' : 'Concluir'}
      </button>
      <button onClick={() => deleteTodo(todo.id)}>Excluir</button>
    </li>
  );
}

export default TodoItem;