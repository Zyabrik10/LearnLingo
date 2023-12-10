import ModalWindow from 'components/ModalWindow/ModalWindow';
import modalCss from '../../ModalWindow.module.css';
import css from './RegistrationModal.module.css';
import ModalForm from '../ModalForm/ModalForm';
import { useState } from 'react';
import { selectModals } from '../../../../redux/modals/modals-select';
import { useSelector } from 'react-redux';

export default function RegistrationModal() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { modalRegistration } = useSelector(selectModals);

  const formHandler = e => {
    e.preventDefault();
  };

  return (
    <ModalWindow modal='modalRegistration' modalState={modalRegistration}>
      <p className={modalCss['title']}>Registration</p>
      <p className={`${modalCss['p']} ${css['p']}`}>
        Thank you for your interest in our platform! In order to register, we
        need some information. Please provide us with the following information
      </p>

      <ModalForm
        formHandler={formHandler}
        buttonText="Sign Up"
        name={true}
        email={true}
        password={true}
        nameValue={name}
        emailValue={email}
        passwordValue={password}
        namePlaceholder="name"
        emailPlaceholder="email"
        passwordPlaceholder="password"
        setName={setName}
        setEmail={setEmail}
        setPassword={setPassword}
      />
    </ModalWindow>
  );
}
