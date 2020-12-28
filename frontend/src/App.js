import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

import Account from './Components/Account/Account';
import Board from './Components/Board/Board';
import Login from './Components/Login/Login';
import NavBar from './Components/NavBar/NavBar';
import Registration from './Components/Registration/Registration';
import Cart from './Components/Cart/Cart'
import { fetchGetPizzasAC } from './redux/actionCreatorsPizza';
// import CartItem from './Components/Cart/CartItem';



function App() {
  const isAuth = useSelector(state => state.user.isAuth)
  const {pizzas} = useSelector(store => store)

  const dispatch = useDispatch()


  useEffect(() => {
   dispatch(fetchGetPizzasAC())
    // console.log('****');
  }, [])
  // useEffect(() => {
  //     dispatch(fetchUserAuthAC())
  // }, [])

  return (
    <div className="App">
      <Route path="/">
        <NavBar/>
        </Route>
        <Route exact path="/">
        <Board />
        </Route>
      <Route path="/cart">
        <Cart />
        {/* <CartItem /> */}
      </Route>
      {isAuth &&
        <Switch>
          <Route path="/account">
            <Account />
          </Route>

        </Switch>
      }

      {/* {!isAuth &&
        <Switch>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/registration">
            <Registration />
          </Route>
        </Switch>
      } */}
    </div>
  );
}

export default App;
