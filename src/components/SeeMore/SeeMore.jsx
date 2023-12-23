import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTeachersList } from 'api/teachersAPI';
import { StyledButton } from 'components/StyledButton/StyledButton';
import { getTeachers, setLoading } from '../../redux/teachers/teachers-reducer';
import selectWebsite from '../../redux/website/website-selector';

import {  Bars } from 'react-loader-spinner';

import css from './SeeMore.module.css';
import { selectTeachers } from '../../redux/teachers/teachers-select';

export default function SeeMore() {
  const { isLoading } = useSelector(selectTeachers);
  const { color } = useSelector(selectWebsite);

  const dispatch = useDispatch();
  const [pageSize, setPageSize] = useState(4);

  useEffect(() => {
    dispatch(setLoading(true));

    getTeachersList(pageSize).then(res => {
      dispatch(getTeachers(res));
      dispatch(setLoading(false));
    });
  }, [dispatch, pageSize]);

  function buttonHandler() {
    setPageSize(pageSize + 4);
  }

  return isLoading ? (
    <Bars
      height="80"
      width="80"
      radius="9"
      color={color.primary}
      ariaLabel="loading"
      wrapperStyle={{
        display: 'flex',
        justifyContent: 'center',
      }}
    />
  ) : (
    <StyledButton
      color={color.primary}
      $subcolor={color.secondary}
      className={css['button']}
      onClick={buttonHandler}
        $maxwidth="183px"
        type='button'
    >
      More
    </StyledButton>
  );
}
