import css from './Hero.module.css';
import globalCss from 'css/global.module.css';

export default function Hero() {
  return (
    <section className={css['hero']}>
      <div className={globalCss['container']}></div>
    </section>
  );
}
