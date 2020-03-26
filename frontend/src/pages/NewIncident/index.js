import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import * as Yup from 'yup';
import { Form, Input } from '@rocketseat/unform';
import { toast } from 'react-toastify';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';

import logoImg from '../../assets/logo.svg';

import { Container, Content } from './styles';

const schema = Yup.object().shape({
  title: Yup.string().required('O nome da caso é obrigatório.'),
  value: Yup.string().required('O valor é obrigatório.'),
});

export default function NewIncident() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [value, setValue] = useState('');

  const ongId = localStorage.getItem('ongId');

  const history = useHistory();

  async function handleNewIncident() {
    const data = {
      title,
      description,
      value,
    };

    try {
      await api.post('incidents', data, {
        headers: {
          Authorization: ongId,
        },
      });

      history.push('/profile');
    } catch (err) {
      toast.error('Erro ao cadastrar caso, tente novamente');
    }
  }

  return (
    <Container>
      <Content>
        <section>
          <img src={logoImg} alt="Be The Hero" />

          <h1>Cadastrar novo caso</h1>
          <p>
            Descreva o caso detalhadamente e encontre um herói para resolver
            isso
          </p>

          <Link to="/profile">
            <FiArrowLeft size={16} color="#e02041" />
            Voltar
          </Link>
        </section>

        <Form schema={schema} onSubmit={handleNewIncident}>
          <Input
            name="title"
            placeholder="Título do caso"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            placeholder="É sempre bom escrever uma descrição do seu caso."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <Input
            name="value"
            placeholder="Valor em reais"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />

          <button type="submit">Cadastrar</button>
        </Form>
      </Content>
    </Container>
  );
}
