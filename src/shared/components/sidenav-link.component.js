import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SideLink = styled(NavLink)`
  width: 100%;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  color: ${props => props.theme.colors.text.light};
  border-radius: 10px 10px;
  text-decoration: none;
  margin-top: 10px;
`;

const SideLinkName = styled.span`
  margin-left: 1rem;
  font-size: 1.2vmax;
`;

const SideNavIcon = styled(FontAwesomeIcon)`
  font-size: 1.2vmax;
`;

export default function SidenavLink({ path, icon, name }) {
  return (
    <SideLink to={path} activeClassName="SideNavLink__Active">
      <SideNavIcon icon={icon} />
      <SideLinkName>{name}</SideLinkName>
    </SideLink>
  );
}

SidenavLink.propTypes = {
  path: PropTypes.string.isRequired,
  icon: PropTypes.any.isRequired,
  name: PropTypes.string.isRequired
}
