import css from './TeachersList.module.css';
import globalCss from 'css/global.module.css';

export default function TeachersList() {
  return (
    <section className={css['teachers-list']}>
      <div className={globalCss['container']}></div>
    </section>
  );
}
