import { useSelector } from 'react-redux';
import css from './HeaderAuth.module.css';
import loginImg from 'assets/icon/log-in.svg';
import { selectAuth } from '../../../../redux/auth/auth-selector';

import PropTypes from 'prop-types';

export default function HeaderAuth({ authClasses, setActive }) {
  const { isLoggedIn } = useSelector(selectAuth);

  const aClasses = authClasses ? authClasses.join(' ') : '';

  const regButtonHandler = (e) => {
    e.preventDefault();
    setActive(false);
  }

  const loginButtonHandler = (e) => {
    e.preventDefault();
    setActive(false);
  }

  const logoutButtonHandler = (e) => {
    e.preventDefault();
    setActive(false);
  }

  return (
    <div className={`${css['auth']} ${aClasses}`}>
      <button className={css['login']} onClick={loginButtonHandler} type='button'>
        <img src={loginImg} alt="" width="20" height="20" />
        <span>Log in</span>
      </button>
      <button className={css['registration']} onClick={regButtonHandler} type='button'>Registration</button>
      {isLoggedIn ? (
        <button className={css['logout']} onClick={logoutButtonHandler} type='button'>Log out</button>
      ) : null}
    </div>
  );
}

HeaderAuth.propTypes = {
  authClasses: PropTypes.array,
  setActive: PropTypes.func
}