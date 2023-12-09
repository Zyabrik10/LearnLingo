import css from './Header.module.css';
import globalCss from 'css/global.module.css';

import { HeaderAuth, HeaderLogo, HeaderNavigation } from './components/index';

import burgerMenu from 'assets/icon/burger-menu.svg';
import MobileMenu from './components/MobileMenu/MobileMenu';
import { useState } from 'react';

export default function Header() {
  const [activeBurgerMenu, setActiveBurgerMenu] = useState(false);

  const openBurgerMenu = () => setActiveBurgerMenu(true);

  return (
    <>
      <MobileMenu active={activeBurgerMenu} setActive={setActiveBurgerMenu}/>
      <header className={css['header']}>
        <div className={`${globalCss['container']} ${css['header-container']}`}>
          <HeaderLogo />
          <button className={css['burger-button']} onClick={openBurgerMenu}>
            <img src={burgerMenu} alt="" width="30" height="30" />
          </button>
          <HeaderNavigation />
          <HeaderAuth />
        </div>
      </header>
    </>
  );
}
