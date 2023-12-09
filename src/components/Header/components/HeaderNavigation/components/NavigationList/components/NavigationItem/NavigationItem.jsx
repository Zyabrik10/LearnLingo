import { NavLink } from 'react-router-dom';
import css from './NavigationItem.module.css';

import PropTypes from 'prop-types';

import styled from 'styled-components';
import { useSelector } from 'react-redux';
import selectWebsite from '../../../../../../../../redux/website/website-selector';

const StyledLink = styled(NavLink)`
  &.active {
    color: ${props => props.color};
  }
`;

export default function NavigationItem({ children, path, itemClasses }) {
  const { color } = useSelector(selectWebsite);

  const iClasses = itemClasses ? itemClasses.join(' ') : '';

  function chooseColor(color) {
    switch (color) {
      case 'orange':
        return 'orange';
      case 'red':
        return 'red';
      case 'green':
        return 'green';
      case 'blue':
        return 'blue';
      default:
        return 'black';
    }
  }

  return (
    <li className={`${iClasses}`}>
      <StyledLink color={chooseColor(color)} className={css['link']} to={path}>
        {children}
      </StyledLink>
    </li>
  );
}

NavigationItem.propTypes = {
  path: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  itemClasses: PropTypes.array,
};
