import React from 'react';
import { useSelector } from 'react-redux';
import Card from './Card/Card';

function List(props) {

  return (
    <div className="container">
    <div className="form-row">
      {props.props && props.props.map(pizza => <Card key={pizza._id} pizza={pizza} props={props}/>)}
    </div>
    </div>

  );
}

export default List;
