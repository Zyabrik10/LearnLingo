import css from './Statistics.module.css';
import globalCss from 'css/global.module.css';

export default function Statistics() {
  return (
    <section className={css['statistics']}>
      <div className={globalCss['container']}></div>
    </section>
  );
}
