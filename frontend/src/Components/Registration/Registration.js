import React, { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { fetchUserRegAC } from '../../redux/actionCreators'
import style from './Registration.module.css'

function Registration(props) {
  const dispatch = useDispatch();
  const email = useRef();
  const login = useRef();
  const password = useRef();

  useEffect(() => {
    login.current.focus()
  }, [])

  const handlerClick = () => {
    const user = {
      email: email.current.value,
      login: login.current.value,
      password: password.current.value,
    };
    dispatch(fetchUserRegAC(user))
    // console.log(user);
  }

  return (
    <div className="container" style={style}>
      {/* <form> */}

      <div className="form-row">
        <div className="form-group col-md-3">
          <input ref={email} type="email" className="form-control" placeholder="Эл. почта" />
        </div>
        <div className="form-group col-md-3">
          <input ref={login} type="login" className="form-control" placeholder="Уникальное имя" />
        </div>
        <div className="form-group col-md-3">
          <input ref={password} className="form-control" placeholder="Пароль" />
        </div>
      </div>
      <button onClick={handlerClick} className="btn btn-primary">Зарегистрировать</button>
      {/* </form> */}
    </div>




  );
}

export default Registration;
