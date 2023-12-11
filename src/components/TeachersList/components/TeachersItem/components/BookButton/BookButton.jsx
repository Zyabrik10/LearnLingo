import { StyledButton } from 'components/StyledButton/StyledButton';
import css from './BookButton.module.css';
import { useSelector } from 'react-redux';
import selectWebsite from '../../../../../../redux/website/website-selector';

export default function BookButton() {
  const { color } = useSelector(selectWebsite);

  return (
    <StyledButton
      $maxwidth="232px"
      color={color.primary}
      $subcolor={color.secondary}
      className={css['button']}
      type="button"
    >
      Book trial lesson
    </StyledButton>
  );
}
