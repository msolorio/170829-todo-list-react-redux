import React from 'react';
import {connect} from 'react-redux';

export function List(props) {
  const listItems = props.todoList.map((listItem, index) => {
    return (
      <li className="listItem" key={index}>
        {listItem}
      </li>
    )
  });

  return (
    <div className="List">
      {listItems}
    </div>
  );
}

const mapStateToProps = (state) => ({...state});

export default connect(mapStateToProps)(List);
