import React from 'react'
import NewButton from './UI/button/NewButton'
import NewInput from './UI/input/NewInput'

const AddForm = ({ value, addNewTodo, setNewtodo }) => {
	return (
		<div className='addTodo'>
			<NewInput style={{ padding: '5px 15px' }} type='text' placeholder='Новое задание' value={value} onChange={(e) => setNewtodo(e.target.value)} />
			<NewButton onClick={() => { addNewTodo(value); setNewtodo('') }}>Добавить</NewButton>
		</div>
	)
}

export default AddForm
