import React from 'react';
import {connect} from 'react-redux';
import {submitForm, changeInput} from '../actions';

export function Form(props) {

  function onSubmit(e, todoItem) {
    e.preventDefault();

    props.dispatch(submitForm(todoItem));
  }

  function onInputChange(inputVal) {
    props.dispatch(changeInput(inputVal));
  }

  return (
    <div className="Form">
      <form className="form"
        onSubmit={(e) => onSubmit(e, props.inputVal)}>
        <div className="formGroup">
          <label className="label"
            htmlFor="itemName">Item Name: &nbsp;</label>
          <input className="input"
            id="itemName"
            onChange={(e) => onInputChange(e.target.value)}
            value={props.inputVal}/>
        </div>
        <button className="button"
          type="submit">Add Item</button>
      </form>
    </div>
  );
}

const mapStateToProps = (state) => ({...state});

export default connect(mapStateToProps)(Form);
