import css from './ModalForm.module.css';
import closeEyes from 'assets/icon/eye-off.svg';

import PropTypes from 'prop-types';
import FormInput from './components/FormInput/FormInput';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import selectWebsite from '../../../../redux/website/website-selector';

const StyledButton = styled.button`
  background: ${props => props.color.primary};

  &:focus,
  &:hover {
    background: ${props => props.color.secondary};
  }
`;

export default function ModalForm({
  formHandler,
  buttonText = '',
  email = false,
  password = false,
  name = false,
  emailValue = '',
  passwordValue = '',
  nameValue = '',
  namePlaceholder = '',
  emailPlaceholder = '',
  passwordPlaceholder = '',
  setName,
  setEmail,
  setPassword,
}) {
  const { color } = useSelector(selectWebsite);

  const onIconClick = ({ currentTarget }) => {
    const input = currentTarget.parentElement.querySelector('input');

    input.type = input.type === 'text' ? 'password' : 'text';
  };

  return (
    <form className={css['form']} action="" onSubmit={formHandler}>
      {name ? (
        <FormInput
          label="name"
          type="text"
          value={nameValue}
          placeholder={namePlaceholder}
          setText={setName}
        />
      ) : null}
      {email ? (
        <FormInput
          label="email"
          type="email"
          value={emailValue}
          placeholder={emailPlaceholder}
          setText={setEmail}
        />
      ) : null}
      {password ? (
        <FormInput
          label="password"
          type="password"
          value={passwordValue}
          isIcon={true}
          icon={closeEyes}
          placeholder={passwordPlaceholder}
          setText={setPassword}
          onIconClick={onIconClick}
        />
      ) : null}
      <StyledButton color={color} className={css['button']}>
        {buttonText}
      </StyledButton>
    </form>
  );
}

ModalForm.propTypes = {
  formHandler: PropTypes.func.isRequired,
  buttonText: PropTypes.string,
  email: PropTypes.bool,
  password: PropTypes.bool,
  name: PropTypes.bool,
  emailValue: PropTypes.string,
  passwordValue: PropTypes.string,
  nameValue: PropTypes.string,
  namePlaceholder: PropTypes.string,
  emailPlaceholder: PropTypes.string,
  passwordPlaceholder: PropTypes.string,
  setName: PropTypes.func,
  setEmail: PropTypes.func,
  setPassword: PropTypes.func,
};
