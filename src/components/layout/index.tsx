import React from 'react';

import SideBar from '../SideBar';
import MenuBar from '../MenuBar';
import Main from '../Main';
import { Container, Wrapper } from './styles';

const layout: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <MenuBar/>
        <Main />
        <SideBar />
      </Wrapper>
    </Container>
  )
}

export default layout;