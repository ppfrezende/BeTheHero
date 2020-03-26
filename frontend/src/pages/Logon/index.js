import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import { FiLogIn } from 'react-icons/fi';

import api from '../../services/api';

import { Container, Content } from './styles';

import heroesImg from '../../assets/heroes.png';
import logoImg from '../../assets/logo.svg';

export default function Logon() {
  const [id, setId] = useState('');

  const history = useHistory();

  async function handleLogin(e) {
    e.preventDefault();

    try {
      const response = await api.post('sessions', { id });

      localStorage.setItem('ongId', id);
      localStorage.setItem('ongName', response.data.name);

      history.push('/profile');
    } catch (err) {
      toast.error('Falha no login, tente novamente');
    }
  }

  return (
    <Container>
      <Content>
        <img src={logoImg} alt="Be The Hero" />

        <form onSubmit={handleLogin}>
          <h1>Faça seu logon</h1>

          <input
            placeholder="Sua ID"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
          <button type="submit">Entrar</button>

          <Link to="/register">
            <FiLogIn size={16} color="#e02041" />
            Não tenho cadastro
          </Link>
        </form>
      </Content>

      <img src={heroesImg} alt="Be The Hero" />
    </Container>
  );
}
