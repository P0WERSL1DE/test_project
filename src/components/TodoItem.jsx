import React from 'react'
import { useState } from 'react'
import NewButton from './UI/button/NewButton'

const TodoItem = ({ todos, onClick }) => {

	const [background, setBackground] = useState('white')

	return (
		<div className="todo" style={{ width: "500px", background: background }}>
			<div>
				<input type="checkbox" onChange={(e) => { e.target.checked ? setBackground('gray') : setBackground('white') }} />
			</div>
			<div className="todo__text" id={todos.id}>{todos.text}</div>
			<div className="todo__button">
				<NewButton onClick={() => onClick(todos.id)}>Удалить</NewButton>
			</div>
		</div>
	)
}

export default TodoItem
