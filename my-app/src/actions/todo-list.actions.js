import { ADD_TODO } from '../common/constants'

export const addNewTodoListItem = (item) => {
	return {
		type:ADD_TODO,
		payload:item
	};
}


