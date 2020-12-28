import React, { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { fetchUserLoginAC } from '../../redux/actionCreators';

function Login(props) {
  const dispatch = useDispatch();

  const login = useRef();
  const password = useRef();

  useEffect(() => {
    // login.current.focus()
  }, [])

  const handlerClick = () => {
    const user = {
      login: login.current.value,
      password: password.current.value
    };
    dispatch(fetchUserLoginAC(user))
  }
  return (
    // <div className="container">
    //   {/* <form> */}
    //     <div className="form-group col-md-4">
    //       <input ref={login} type="login" className="form-control" placeholder="Логин" />
    //     </div>
    //     <div className="form-group col-md-4">
    //       <input ref={password} className="form-control" placeholder="Пароль" />
    //     </div>
    //     <button onClick={handlerClick} className="btn btn-primary">Войти</button>
    //   {/* </form> */}
    // </div>
    <div>
  </div>
  );
}

export default Login;
