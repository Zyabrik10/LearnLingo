import css from './FavoritesTeachers.module.css';
import globalCss from 'css/global.module.css';

export default function FavoritesTeachers() {
  return (
    <section className={css['favorites-teachers']}>
      <div className={globalCss['container']}></div>
    </section>
  );
}
