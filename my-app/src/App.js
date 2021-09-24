import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addNewTodoListItem } from './actions/todo-list.actions';

function App(){
	
	/* Basic Destructuring of array
    var introduction = ["Hello", "I" , "am", "Sarah"];
    var [greeting, pronoun] = introduction;

    console.log(greeting);//"Hello"
    console.log(pronoun);//"I"
	*/
	const [getName, setName] = useState('');
	const todoList = useSelector(state => state.todoList);
	const [newTodoListItem, setNewTodoListItem] = useState('');
	const dispatch = useDispatch();
	
	const clickNewTodoListItem = () => {
		dispatch(addNewTodoListItem(newTodoListItem));
	};
	
	return (<div>
			<strong>Hello {getName} !</strong>
			<br/>
			<input type="text" value={getName} onChange={e => setName(e.target.value) } ></input>
			<br/>
			<h4>todo-list</h4>
			<input type="text" value={newTodoListItem} onChange={e => setNewTodoListItem(e.target.value)}></input>
			<button onClick={clickNewTodoListItem}>Ajouter</button>
			<ul>
				{todoList.map(item => (<li>{item}</li>))}
			</ul>
		</div>
		);
}

export default App;

