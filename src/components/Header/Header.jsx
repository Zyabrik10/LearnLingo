import css from './Header.module.css';
import globalCss from 'css/global.module.css';
export default function Header() {
  return (
    <header className={css['header']}>
      <div className={`${globalCss['container']} ${css['header-container']}`}>
        <p>Header</p>
      </div>
    </header>
  );
}
