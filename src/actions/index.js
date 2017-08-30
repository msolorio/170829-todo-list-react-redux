export const CHANGE_INPUT = 'CHANGE_INPUT';
export const changeInput = (inputVal) => ({
  type: CHANGE_INPUT,
  inputVal
});

export const SUBMIT_FORM = 'SUBMIT_FORM';
export const submitForm = (todoItem) => ({
  type: SUBMIT_FORM,
  todoItem
});
