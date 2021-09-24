import {GET_TODO_LIST, ADD_TODO} from '../common/constants'

const defaultTodoList = ['café', 'clope'];

const todoList = (state = defaultTodoList, action) => {
	switch(action.type) {
		case GET_TODO_LIST:{
			return state;
		}
		case ADD_TODO:{
			return [...state, action.payload];
		}
		default:{
			return state;
		}
	}
}


export default todoList;



