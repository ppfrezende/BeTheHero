import React from 'react';
import { FiLogIn } from 'react-icons/fi';

import { Container, Content } from './styles';

import heroesImg from '../../assets/heroes.png';
import logoImg from '../../assets/logo.svg';

export default function Logon() {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="Be The Hero" />

        <form>
          <h1>Faça seu logon</h1>

          <input placeholder="Sua ID" />
          <button type="submit">Entrar</button>

          <a href="/register">
            <FiLogIn size={16} color="#e02041" />
            Não tenho cadastro
          </a>
        </form>
      </Content>

      <img src={heroesImg} alt="Be The Hero" />
    </Container>
  );
}
