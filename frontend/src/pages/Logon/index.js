import React, { useState } from 'react';
import * as Yup from 'yup';
import { Link, useHistory } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import { toast } from 'react-toastify';
import { FiLogIn } from 'react-icons/fi';

import api from '../../services/api';

import { Container, Content } from './styles';

import heroesImg from '../../assets/heroes.png';
import logoImg from '../../assets/logo.svg';

const schema = Yup.object().shape({
  id: Yup.string().required('O ID é obrigatório!'),
});

export default function Logon() {
  const [id, setId] = useState('');

  const history = useHistory();

  async function handleLogin() {
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

        <Form schema={schema} onSubmit={handleLogin}>
          <h1>Faça seu logon</h1>

          <Input
            name="id"
            placeholder="Sua ID"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
          <button type="submit">Entrar</button>

          <Link to="/register">
            <FiLogIn size={16} color="#e02041" />
            Não tenho cadastro
          </Link>
        </Form>
      </Content>

      <img src={heroesImg} alt="Be The Hero" />
    </Container>
  );
}
