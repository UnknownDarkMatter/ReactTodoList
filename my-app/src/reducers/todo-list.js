import {GET_TODO_LIST, ADD_TODO} from '../common/constants'

const defaultTodoList = ['café', 'clope'];

const todoList = (state = defaultTodoList, action) => {
	switch(action.type) {
		case GET_TODO_LIST:{
			return state;
		}
		case ADD_TODO:{
            //return {
            //    ... post,
            //    content: action.payload.content,
            //}
			//return {...state, adresse:action.payload};
			//return [
			//...state,
			//	{
			//  	name: action.bird
			//	}
			//];
			return [...state, action.payload];
		}
		default:{
			return state;
		}
	}
}


export default todoList;



