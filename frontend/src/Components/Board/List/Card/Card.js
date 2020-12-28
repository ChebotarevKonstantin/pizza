import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCartAC, delFromCartAC } from '../../../../redux/actionCreatorsCart';
import Button from '../../../Button/Button';
import style from "./Card.module.css"




function Card({ pizza }) {
  const [state, setState] = useState(0)
  const [stateTotPrice, setStateTotPrice] = useState(0)
  const { card } = useSelector(store => store);

  const dispatch = useDispatch();
  // dispatch(card);

  useEffect(() => {
    const a = JSON.parse(localStorage.getItem('cartLS'))
    if (a) {
      for (let key in a.items) {
        if (key == pizza._id) {
          const count = a.items[key].length
          setState(count)
          setStateTotPrice(pizza.price*count)
        }
      }
    }
  }, [])


  const handleAdd = () => {
    setState((prev) => prev + 1)
    setStateTotPrice((prev) => prev + pizza.price)
    // console.log(pizza);
    // localStorage.setState
    dispatch(addToCartAC(pizza))
  };
  const handleRemove = () => {
    setState((prev) => prev - 1)
    setStateTotPrice((prev) => prev - pizza.price)
    dispatch(delFromCartAC(pizza))
  };

  return (
    <div className="form-group col-md-3">
      <div className={`card ${style.card}`} >
        <img src={pizza.picture} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{pizza.name} </h5>
          <p className="card-text">{pizza.description}</p>


          <div className={style.boxprice}>

            <div > Price: {pizza.price} USD</div>

            <div >
              {!state ? <div className={style.btn}><Button children={"ADD"} onClick={() => handleAdd()} className={"btnAdd"} /> </div> :

                <div>

                  <div className={style.btn}>
                    <Button
                      className={"button"}
                      onClick={() => handleRemove()}>  -  </Button>
                    <b> {state}  </b>
                    <Button
                      className={"button"}
                      onClick={() => handleAdd()}> + </Button>
                  </div>
                  <div className={style.btn}> {`Total price: ` + stateTotPrice}</div>
                </div>}
            </div>

          </div>

        </div>
      </div>


    </div>
  );
}

export default Card;
