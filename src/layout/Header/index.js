import React from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';
import {
  Classes,
  Navbar,
  NavbarGroup,
  NavbarHeading,
  NavbarDivider,
  Button,
} from '@blueprintjs/core';

export default function Header(){

  const history = useHistory();

  let math = useRouteMatch('/');

  function BtnBack(){
    if(!math.isExact){
      return (
        <>
          <Button className={Classes.MINIMAL} icon='arrow-left' />
          <NavbarDivider/>
          <NavbarHeading>
            Picbuy
          </NavbarHeading>
        </>
      );
    }else{
      return (
        <>
          <NavbarHeading>
            Picbuy
          </NavbarHeading>
        </>
      );
    }
  }

  return(
    <Navbar>
      <NavbarGroup>
        <BtnBack/>
        <NavbarDivider />
          <Button className={Classes.MINIMAL} icon="home" text="Home" onClick={() => history.push('/')} />
          <Button className={Classes.MINIMAL} icon="media" text="Imagens Gratis" onClick={() => history.push('/freeimages')} />
          <Button className={Classes.MINIMAL} icon="person" text="Perfil" onClick={() => history.push('/profile')} />
      </NavbarGroup>
    </Navbar>
  );
}