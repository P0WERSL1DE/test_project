import React from 'react'
import TodoItem from './TodoItem'

const TodoList = ({ todos, removeTodo }) => {
	return (
		<div className='todoList'>
			<h1 style={{ textAlign: 'center' }}> Список дел:</h1>
			{todos.length
				? todos.map((todo) => <TodoItem todos={todo} onClick={removeTodo} key={todo.id} />)
				: <h2 style={{ textAlign: 'center', marginTop: '10px' }}>Пусто!</h2>
			}
		</div>
	)
}

export default TodoList
