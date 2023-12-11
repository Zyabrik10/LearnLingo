import {
  BookButton,
  HeaderBox,
  LevelsOfLanguage,
  LocalInfoList,
  ReadMore,
  Reviews,
} from '../';

import css from './InfoBox.module.css';

import PropTypes from 'prop-types';

export default function InfoBox({ teacher }) {
  const {
    name,
    surname,
    rating,
    lessons_done,
    price_per_hour,
    languages,
    lesson_info,
    conditions,
    levels,
    reviews,
    experience,
  } = teacher;

  return (
    <div className={css['box']}>
      <HeaderBox
        rating={rating}
        lessons_done={lessons_done}
        price_per_hour={price_per_hour}
      />
      <p className={css['name']}>
        {name} {surname}
      </p>
      <LocalInfoList
        languages={languages}
        lesson_info={lesson_info}
        conditions={conditions}
      />
      <p className={css['experience']}>{experience}</p>
      <ReadMore />
      <Reviews reviews={reviews} />
      <LevelsOfLanguage levels={levels} />
      {reviews.length > 0 ? <BookButton /> : null}
    </div>
  );
}

InfoBox.propTypes = {
  teacher: PropTypes.object,
};
