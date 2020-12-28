import React, { useEffect, useState } from 'react';

import Card from '../Board/List/Card/Card';
import { Link } from 'react-router-dom';
import { clearCartAC } from '../../redux/actionCreatorsCart';
import { useDispatch } from 'react-redux';

function ListCart(props) {
  const dispatch = useDispatch()
  const [state, setState] = useState(null)
  const [totalPrice, setTotalPrice] = useState(0)
  const [totalCount, setTotalCount] = useState(0)


  useEffect(() => {
    const cartFromLS = JSON.parse(localStorage.getItem('cartLS'))
    console.log(cartFromLS);
    if (cartFromLS) {
      const allPizzas = [].concat.apply([], Object.values(cartFromLS.items));
      const unuqPizzas = [...new Set(allPizzas.map((item) => JSON.stringify(item)))]
      const cartPizzas = unuqPizzas.map((item) => JSON.parse(item))
      setState(cartPizzas)
      setTotalPrice(cartFromLS.totalPrice)
      setTotalCount(cartFromLS.totalCount)
    }
  }, [])

  const onClearCart = () => {
    if (window.confirm('Are you sure you want to empty your cart?')) {
      dispatch(clearCartAC());
      setState(null)
    }
  };

  return (
    <div className="container">
      <div className="form-row">
        {!state ?
          <div className="cart cart--empty">
            <h2>
              Cart is clear
                   </h2>
            <p>
              You didn't order pizza.
                     <br></br>
                  To order pizza, go to the main page.
                 </p>
            <Link to="/" className="button button--black">
              <span>Back</span>
            </Link>
          </div>
          :
          state && state.map(pizza => <Card key={pizza._id} pizza={pizza} props={props} />)}

      </div>
      {state ?
        <div>
          <div>

            Total cost: {totalPrice},  Total goods: {totalCount}

            <span onClick={onClearCart}>Clear cart?</span>
          </div>
          <div>
            <span onClick={onClearCart}>CLEAR CART?</span>
          </div>
        </div>



        : null}
    </div>
  );
}

export default ListCart;
