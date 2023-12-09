import css from './Footer.module.css';
import globalCss from 'css/global.module.css';
export default function Footer() {
  return (
    <footer className={css['footer']}>
      <div className={`${globalCss['container']} ${css['footer-container']}`}>
        <p>Footer</p>
      </div>
    </footer>
  );
}
