import React from 'react';
import { useHistory } from 'react-router-dom';
import {
  Classes,
  Navbar,
  NavbarGroup,
  NavbarHeading,
  NavbarDivider,
  Button,
  Popover,
  Menu,
  MenuItem
} from '@blueprintjs/core';

import Brbutton from '../../components/Brbutton';
import MrMenuItem from '../../components/MrMenuItem';

export default function Header(){

  const history = useHistory();

  const menuTypeImages = (
    <Menu>
      <MrMenuItem text="Imagens Pagas" to='/picbuy' />
      <MenuItem text='Imagens Gratis'>
        <MrMenuItem text="Pexels" to='/freeimages/pexels' />
        <MrMenuItem text="Pixabay" to='/freeimages/pixabay' />
        <MrMenuItem text="Unsplash" to='/freeimages/unsplash' />
      </MenuItem>
    </Menu>
  )

  return(
    <Navbar className={Classes.DARK}>
      <NavbarGroup>
        <NavbarHeading>
          Picbuy
        </NavbarHeading>
        <NavbarDivider />
          <Brbutton className={Classes.MINIMAL} icon='home' text='Home' to='/'/>
          <Popover content={menuTypeImages}>
            <Brbutton className={Classes.MINIMAL} icon='media' text='Imagens'/>
          </Popover>
          <Button className={Classes.MINIMAL} icon="person" text="Perfil" onClick={() => history.push('/profile')} />
      </NavbarGroup>
    </Navbar>
  );
}