import React from 'react';
import { Link } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Container, IncidentList, Incident } from './styles';

export default function Profile() {
  return (
    <Container>
      <header>
        <img src={logoImg} alt="Be The Hero" />
        <span>Bem-vinda, 'ONG'</span>

        <Link to="/incidents/new">Cadastrar novo caso</Link>

        <button>
          <FiPower size={18} color="#e02041" />
        </button>
      </header>

      <h1>Casos cadastrados:</h1>

      <IncidentList>
        <Incident>
          <strong>CASO:</strong>
          <p>Caso teste</p>

          <strong>DESCRIÇÃO::</strong>
          <p>Descrição teste</p>

          <strong>VALOR:</strong>
          <h1>R$ 120,00</h1>

          <button type="button">
            <FiTrash2 size={20} color="#a8a8b3" />
          </button>
        </Incident>
        <Incident>
          <strong>CASO:</strong>
          <p>Caso teste</p>

          <strong>DESCRIÇÃO::</strong>
          <p>Descrição teste</p>

          <strong>VALOR:</strong>
          <h1>R$ 120,00</h1>

          <button type="button">
            <FiTrash2 size={20} color="#a8a8b3" />
          </button>
        </Incident>
        <Incident>
          <strong>CASO:</strong>
          <p>Caso teste</p>

          <strong>DESCRIÇÃO::</strong>
          <p>Descrição teste</p>

          <strong>VALOR:</strong>
          <h1>R$ 120,00</h1>

          <button type="button">
            <FiTrash2 size={20} color="#a8a8b3" />
          </button>
        </Incident>
        <Incident>
          <strong>CASO:</strong>
          <p>Caso teste</p>

          <strong>DESCRIÇÃO::</strong>
          <p>Descrição teste</p>

          <strong>VALOR:</strong>
          <h1>R$ 120,00</h1>

          <button type="button">
            <FiTrash2 size={20} color="#a8a8b3" />
          </button>
        </Incident>
      </IncidentList>
    </Container>
  );
}
