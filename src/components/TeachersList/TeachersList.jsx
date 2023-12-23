import PropTypes from 'prop-types';

import css from './TeachersList.module.css';
import TeachersItem from './components/TeachersItem/TeachersItem';
import { nanoid } from '@reduxjs/toolkit';

export default function TeachersList({ teachersList }) {
  return (
    teachersList?.length !== 0 ? (
      <ul className={css['list']}>
        {teachersList.map((teacher) => (
            <TeachersItem key={nanoid()} teacher={teacher} />
        ))}
      </ul>
    ) : <p className={css["p"]}>No teachers</p>
  );
}

TeachersList.propTypes = {
  teachersList: PropTypes.array,
};
