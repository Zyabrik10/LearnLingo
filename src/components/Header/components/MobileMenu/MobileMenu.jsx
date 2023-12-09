import { useCallback, useEffect } from 'react';
import { HeaderAuth, HeaderNavigation } from '../index';
import css from './MobileMenu.module.css';

import PropTypes from 'prop-types';

export default function MobileMenu({ active, setActive }) {
  const closeOnBackground = ({ target, currentTarget }) =>
    target === currentTarget && setActive(false);

  const closeOnEscape = useCallback(
    ({ key }) => {
      if (key === 'Escape') setActive(false);
    },
    [setActive]
  );

  useEffect(() => {
    if (active) window.addEventListener('keydown', closeOnEscape);
    else window.removeEventListener('keydown', closeOnEscape);
  }, [active, closeOnEscape]);

  return (
    <div
      className={`${css['mobile-menu']} ${active ? css['active'] : ''}`}
      onMouseDown={closeOnBackground}
    >
      <HeaderNavigation
        navClasses={[css['nav']]}
        listClasses={[css['list']]}
        itemClasses={[css['item']]}
      />
      <HeaderAuth authClasses={[css['auth']]} setActive={setActive} />
    </div>
  );
}

MobileMenu.propTypes = {
  active: PropTypes.bool,
  setActive: PropTypes.func,
};
