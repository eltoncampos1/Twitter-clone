import React from 'react';

import {
   Container, 
   Banner, 
   Avatar, 
   ProfileData, 
   LocationIcon, 
   CakeIcon, 
   FollowAge,
   EditButton
  } from './styles';

const ProfilePage: React.FC = () => {
  return(
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        <EditButton outlined>Editar perfil</EditButton>
        <h1>Elton Campos</h1>
        <h2>@worst1</h2>

        <p>
          Developer at <a href="https://rocketseat.com.br">@Rocketseat</a>
        </p>

        <ul>
          <li>
            <LocationIcon />
            nascido(a) em 18 de Maio de 1997
          </li>
          <li>
            <CakeIcon />
            São Paulo, Brasil
          </li>
        </ul>

        <FollowAge >
          <span>
            seguindo <strong>94</strong>
          </span>
          <span>
          <strong>879 </strong>seguidores 
          </span>
        </FollowAge>
      </ProfileData>

      <Feed />
      
    </Container>
  )
}

export default ProfilePage;