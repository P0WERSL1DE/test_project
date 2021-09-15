import React, { useState } from "react";
import AddForm from "./components/AddForm";
import TodoList from "./components/TodoList";
import NewInput from "./components/UI/input/NewInput";
import "./styles/App.css";

function App() {
	const [todos, setTodos] = useState([
		{ id: 2, text: "второе ДЕЛО" },
		{ id: 1, text: "дело первое" },
	]);



	const [newtodo, setNewtodo] = useState('')

	const [search, setSearch] = useState('')

	const filtertodos = todos.filter((elem) => elem.text.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
	
	const addNewTodo = (text) => {
		if (!text) {
			alert('Введите наименование дела')
		}
		else {
			const addedNewTodo = [{id: todos.length ? todos[0].id + 1 : 1, text: text}, ...todos]
			setTodos(addedNewTodo)
		}
	}


	
	const removeTodo = (id) => {
		setTodos(todos.filter((todo) => todo.id !== id))
	}

	

	return (
		<div className="App">
			<div className="tools">
				<AddForm value={newtodo} addNewTodo={addNewTodo} setNewtodo={setNewtodo} />
				<div className="search">
					<NewInput type='text' placeholder='Поиск' value={search} onChange={(e)=> setSearch(e.target.value)}/>
				</div>	
			</div>
			<TodoList todos={filtertodos} removeTodo={removeTodo} />
		</div>
	);
}

export default App;
