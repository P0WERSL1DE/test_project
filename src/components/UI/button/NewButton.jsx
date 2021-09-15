import React from 'react'
import classes from './NewButton.module.css'

const NewButton = ({children, onClick}) => {
	return (
		<button className = {classes.newButton} onClick={onClick}>
			{children}
		</button>
	)
}

export default NewButton
