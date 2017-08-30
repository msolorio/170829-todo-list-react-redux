import * as actions from '../actions';

const initialState = {
  inputVal: '',
  todoList: []
};

export const todoListReducer = (state=initialState, action) => {

  if (action.type === actions.CHANGE_INPUT) {
    return Object.assign({}, state, {
      inputVal: action.inputVal
    });
  }

  if (action.type === actions.SUBMIT_FORM) {
    return Object.assign({}, state, {
      inputVal: '',
      todoList: [
        ...state.todoList, action.todoItem
      ]
    })
  }

  return state;
};
