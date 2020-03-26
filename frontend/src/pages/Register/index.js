import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import * as Yup from 'yup';
import { Form, Input } from '@rocketseat/unform';
import { toast } from 'react-toastify';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';

import logoImg from '../../assets/logo.svg';

import { Container, Content } from './styles';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [city, setCity] = useState('');
  const [uf, setUf] = useState('');

  const history = useHistory();

  const schema = Yup.object().shape({
    name: Yup.string().required('O nome da ONG é obrigatório.'),
    email: Yup.string().email().required('O email é obrigatório.'),
    whatsapp: Yup.string().required('O whatsapp é obrigatório.'),
    city: Yup.string().required(''),
    uf: Yup.string().max(2).required(''),
  });

  async function handleRegister(e) {
    e.preventDefault();

    const data = {
      name,
      email,
      whatsapp,
      city,
      uf,
    };

    try {
      const response = await api.post('ongs', data);

      alert(`Seu id de acesso ${response.data.id}`);

      history.push('/');
    } catch (err) {
      toast.error(
        'Erro no cadastro, preencha todos os campos e tente novamente'
      );
    }
  }

  return (
    <Container>
      <Content>
        <section>
          <img src={logoImg} alt="Be The Hero" />

          <h1>Cadastro</h1>
          <p>
            Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem
            os casos da sua ONG.
          </p>
          <h2>**todos os campos são obrigatórios</h2>

          <Link to="/">
            <FiArrowLeft size={16} color="#e02041" />
            Voltar
          </Link>
        </section>

        <Form schema={schema} onSubmit={handleRegister}>
          <Input
            name="name"
            placeholder="Nome da ONG"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            name="email"
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            name="whatsapp"
            placeholder="WhatsApp"
            value={whatsapp}
            onChange={(e) => setWhatsapp(e.target.value)}
          />

          <div>
            <Input
              name="city"
              placeholder="Cidade"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
            <Input
              name="uf"
              placeholder="UF"
              style={{ width: 80 }}
              value={uf}
              onChange={(e) => setUf(e.target.value)}
            />
          </div>

          <button type="submit">Cadastrar</button>
        </Form>
      </Content>
    </Container>
  );
}
