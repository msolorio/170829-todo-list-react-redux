import React from 'react';
import {connect} from 'react-redux';

export function List(props) {
  const listItems = props.todoList.map((listItem) => {
    return (
      <li className="listItem">
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
