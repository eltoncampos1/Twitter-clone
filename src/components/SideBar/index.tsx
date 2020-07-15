import React from 'react';
import StickyBox from 'react-sticky-box';

import News from '../News';
import FollowSugestion from '../FollowSugestion';
import List from '../List';

import { 
   Container,
   SearchWrapper,
   SearchInput,
   SearcIcon,
   Body,
} from './styles';

const SideBar: React.FC = () => {
  return (
    <Container>
      <SearchWrapper>
        <SearchInput placeholder="Buscar no Twitter" />
        <SearcIcon />
        </SearchWrapper>
       
       <StickyBox>
        <Body>
          <List
            title="Talvez você curta"
            elements={[
              <FollowSugestion
                name="user1"
                nickname="@user1"
              />,
              <FollowSugestion
                name="user2"
                nickname="@user2"
              />,
              <FollowSugestion
                name="user3"
                nickname="@user3"
              />
            ]}
          />

          <List
            title="Talvez você curta"
            elements={[<News />,<News />,<News />]} />
            <List
            title="Talvez você curta"
            elements={[<News />,<News />,<News />]} />
            <List
            title="Talvez você curta"
            elements={[<News />,<News />,<News />]} />
        </Body>
      </StickyBox>

    </Container>
  )
}

export default SideBar;