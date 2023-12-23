import FilterForm from 'components/FilterForm/FilterForm';
import css from './TeachersListSec.module.css';
import globalCss from 'css/global.module.css';
import TeachersList from 'components/TeachersList/TeachersList';
import { selectTeachers } from '../../../../redux/teachers/teachers-select';
import { useDispatch, useSelector } from 'react-redux';
import SeeMore from 'components/SeeMore/SeeMore';

import { useEffect } from 'react';
import {
  getTeachers,
  setLoading,
} from '../../../../redux/teachers/teachers-reducer';
import { getTeachersList } from 'api/teachersAPI';

export default function TeachersListSec() {
  const { teachers } = useSelector(selectTeachers);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setLoading(true));

    getTeachersList(4).then(res => {
      dispatch(getTeachers(res));
      dispatch(setLoading(false));
    });
  }, [dispatch]);

  return (
    <section className={css['teachers-list']}>
      <div className={globalCss['container']}>
        <FilterForm />
        {teachers?.length !== 0  && <TeachersList teachersList={teachers} />}
        <SeeMore />
      </div>
    </section>
  );
}
