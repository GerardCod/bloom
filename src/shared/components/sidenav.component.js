import React from 'react';
import styled from 'styled-components';
import icon from '../../assets/img/android-icon-96x96.png';
import { FlexContainer, FlexItem } from '../containers/flex.container';
import SidenavLink from './sidenav-link.component';
import { faHome, faTasks, faCloud } from '@fortawesome/free-solid-svg-icons';

const AppName = styled.figure`
  margin: 0;
  display: flex;
  width: 100%;
  height: auto;
  align-items: center;
`

const AppTitle = styled.h1`
  margin: 0;
  color: ${props => props.theme.colors.text.light};
  font-size: 2vmax;
  font-weight: bold;
  height: 100%;
  margin-left: 10px;
`

const AppIcon = styled.img`
  width: 60px;
  height: 60px;
`

const Menu = styled.div`
  margin-top: 100px;
`;

export default function Sidenav() {
  return (
    <>
      <FlexContainer direction="column">
        <FlexItem alignSelf="flex-start">
          <AppName>
            <AppIcon src={icon} alt="app_icon" />
            <AppTitle>Bloom</AppTitle>
          </AppName>
        </FlexItem>
        <FlexItem alignSelf="flex-end">
          <Menu>
            <SidenavLink path="/browse/home" name="Inicio" icon={faHome} />
            <SidenavLink path="/browse/activities" name="Actividades" icon={faTasks} />
            <SidenavLink path="/browse/weather" name="Por clima" icon={faCloud} />
          </Menu>
        </FlexItem>
      </FlexContainer>
    </>
  );
}