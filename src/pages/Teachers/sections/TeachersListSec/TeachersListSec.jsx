import FilterForm from 'components/FilterForm/FilterForm';
import css from './TeachersListSec.module.css';
import globalCss from 'css/global.module.css';
import TeachersList from 'components/TeachersList/TeachersList';

import { teachers } from 'teachers';

export default function TeachersListSec() {
  return (
    <section className={css['teachers-list']}>
      <div className={globalCss['container']}>
        <FilterForm />
        <TeachersList teachersList={teachers}/>
      </div>
    </section>
  );
}
