import ModalWindow from 'components/ModalWindow/ModalWindow';
import modalCss from '../../ModalWindow.module.css';
import css from './LoginModal.module.css';
import ModalForm from '../ModalForm/ModalForm';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectModals } from '../../../../redux/modals/modals-select';

export default function LoginModal() {

  const { modalLogIn } = useSelector(selectModals);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const formHandler = e => {
    e.preventDefault();
  };

  return (
    <ModalWindow modal='modalLogIn' modalState={modalLogIn}>
      <p className={modalCss['title']}>Log in</p>
      <p className={`${modalCss['p']} ${css['p']}`}>
        Welcome back! Please enter your credentials to access your account and
        continue your search for an teacher.
      </p>

      <ModalForm
        formHandler={formHandler}
        buttonText="Log In"
        email={true}
        password={true}
        emailValue={email}
        passwordValue={password}
        emailPlaceholder="email"
        passwordPlaceholder="password"
        setEmail={setEmail}
        setPassword={setPassword}
      />
    </ModalWindow>
  );
}
