import React, { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchUserLoginAC, fetchUserRegAC } from '../../redux/actionCreators';
import { Modal } from 'react-bootstrap'

function ModalForm({ show, setShow }) {

  const dispatch = useDispatch();

  const login = useRef();


  useEffect(() => {
    // login.current.focus()
  }, [])
  const [reg, setReg] = useState(false)
  // const handlerClick = () => {
  //   const user = {
  //     login: login.current.value,
  //     password: password.current.value
  //   };
  // dispatch(fetchUserLoginAC(user))
  // }
  const subLog = (e) => {
    e.preventDefault();
    const {
      login: {
        value: login
      },
      password: {
        value: password
      }
    } = e.target
    dispatch(fetchUserLoginAC({ login, password }))
    setShow(false);
  }


  const subReg = (e) => {
    e.preventDefault();
    const {
      login: {
        value: login
      },
      password: {
        value: password
      },
      email: {
        value: email
      }
    } = e.target
    dispatch(fetchUserRegAC({ login, password, email }))
    setReg(false);
    setShow(false);
  }


  const handleClose = (e) => {
    setShow(false);
    setReg(false)
  }
  const handleCloseBtn = (e) => {
    e.preventDefault();
    setShow(false);
    setReg(false)
  }
  const handleReg = () => {
    setReg(true)
  }
  const handleNotReg = () => {
    setReg(false)
  }


  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Footer>
          <form onSubmit={subLog}>
            {!reg ?
              <div className="form-group">
                <input ref={login} type="text" className="form-control" placeholder='login' name="login" />
                <input type="text" className="form-control" placeholder='password' name="password" />
              </div>
              : null}
            <div class="modal-footer">
              {!reg ? <button class="btn btn-secondary" data-dismiss="modal" onClick={handleCloseBtn}>Back</button> : null}
              {!reg ? <button type="submit" class="btn btn-primary">Login</button> : null}
              {!reg ? <button class="btn btn-primary" onClick={handleReg}> For registration</button> : null}
            </div>
          </form>

          <form onSubmit={subReg}>
            {reg ?
              <div className="form-group">
                <input type="text" ref={login} name="login" className="form-control" placeholder='login' />
                <input type="text" name="password" className="form-control" placeholder='password' />
                <input type="text" name="email" className="form-control" placeholder='email' />
              </div>
              : null}

            <div class="modal-footer">
              {reg ? <button class="btn btn-secondary" data-dismiss="modal" onClick={handleNotReg}>Back</button> : null}
              {reg ? <button type="submit" class="btn btn-primary"> Registration</button> : null}
            </div>
          </form>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ModalForm;
