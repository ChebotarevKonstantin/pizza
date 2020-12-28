import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGetPizzasAC } from '../../redux/actionCreatorsPizza';
import List from './List/List';

function Board(props) {
   const { pizzas } = useSelector(store => store)

  return (
    <div>
      <List props={pizzas} />
    </div>
  );

}

export default Board;

