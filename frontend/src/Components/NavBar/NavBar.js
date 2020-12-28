import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useHistory } from 'react-router-dom'
import { logoutUserAC } from '../../redux/actionCreators'
import ModalForm from '../Modal/ModalForm';


function NavBar(props) {
  const isAuth = useSelector(state => state.user.isAuth)
  const dispatch = useDispatch()
  const heanderClickLogout = () => dispatch(logoutUserAC())
  const { cart } = useSelector(store => store)


  const [totalPrice, setTotalPrice] = useState(0)
  const [totalCount, setTotalCount] = useState(0)


  useEffect(() => {
    const cartFromLS = JSON.parse(localStorage.getItem('cartLS'))
    if (cartFromLS) {
      const allPizzas = [].concat.apply([], Object.values(cartFromLS.items));
      const unuqPizzas = [...new Set(allPizzas.map((item) => JSON.stringify(item)))]
      const cartPizzas = unuqPizzas.map((item) => JSON.parse(item))
      // setState(cartPizzas)
      setTotalPrice(cartFromLS.totalPrice)
      setTotalCount(cartFromLS.totalCount)
    }
  }, [cart])


  const [show, setShow] = useState(false);
  const handle = () => {
    setShow(true)
  }
  let history = useHistory();
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="nav-wrapper">
          <ul className="navbar-nav right hide-on-med-and-down">
            <li className="nav-item">
              <h2 className="navbar-brand"  onClick={()=> history.push("/")}>PIZZA</h2></li>
            {!isAuth && <li className="nav-item">
              <NavLink className="nav-link" to="/" onClick={handle}>Login</NavLink></li>}
            <ModalForm show={show} setShow={setShow} />
            {/* {!isAuth && <li className="nav-item">
              <NavLink className="nav-link" to="/" onClick={handle}>Registration</NavLink></li>} */}
            {isAuth && <li className="nav-item">
              {/* <NavLink className="nav-link" to="/tasks" onClick={heanderClickTasks}>Tasks</NavLink></li>}
            {isAuth && <li className="nav-item"> */}
              {/* <NavLink className="nav-link" to="/users" onClick={heanderClickUsers}>Users</NavLink></li>}
            {isAuth && <li className="nav-item"> */}
              <NavLink className="nav-link" to="/account">Account</NavLink></li>}
            {isAuth && <li className="nav-item">
              <NavLink className="nav-link" to="/login" onClick={heanderClickLogout}>Logout</NavLink></li>}
            {/* <li className="nav-item">
              <NavLink className="nav-link" to="/Cart">Cart</NavLink></li> */}
            <li className="nav-item">
              <NavLink className="nav-link" to="/cart" >{totalPrice}USD, total {totalCount}</NavLink></li>

          </ul>
        </div>
      </nav>
    </div >
  );
}

export default NavBar;
