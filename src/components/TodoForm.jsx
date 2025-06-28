import { useState } from 'react';

function TodoForm({ addTodo }) {
  const [text, setText] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) {
      setError(true);
      return;
    }
    addTodo(text);
    setText('');
    setError(false);
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        className={`todo-input ${error ? 'input-error' : ''}`}
        type="text"
        placeholder="Digite uma tarefa"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button className="todo-button" type="submit">Adicionar</button>
    </form>
  );
}

export default TodoForm;