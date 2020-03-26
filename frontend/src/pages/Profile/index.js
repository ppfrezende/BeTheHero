import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import { FiPower, FiTrash2 } from 'react-icons/fi';

import api from '../../services/api';

import logoImg from '../../assets/logo.svg';

import { Container, IncidentList, Incident } from './styles';

export default function Profile() {
  const [incidents, setIncidents] = useState([]);

  const ongId = localStorage.getItem('ongId');
  const ongName = localStorage.getItem('ongName');

  const history = useHistory();

  useEffect(() => {
    api
      .get('profile', {
        headers: {
          Authorization: ongId,
        },
      })
      .then((response) => {
        setIncidents(response.data);
      });
  }, [ongId]);

  async function handleDeleteIncident(id) {
    try {
      await api.delete(`incidents/${id}`, {
        headers: {
          Authorization: ongId,
        },
      });

      setIncidents(incidents.filter((incident) => incident.id !== id));
    } catch (err) {
      toast.error('Erro ao deletar caso, tente novamente');
    }
  }

  function handleLogout() {
    localStorage.clear();

    history.push('/');
  }

  return (
    <Container>
      <header>
        <img src={logoImg} alt="Be The Hero" />
        <span>Bem-vinda, {ongName}</span>

        <Link to="/incidents/new">Cadastrar novo caso</Link>

        <button onClick={() => handleLogout()}>
          <FiPower size={18} color="#e02041" />
        </button>
      </header>

      <h1>Casos cadastrados:</h1>

      <IncidentList>
        {incidents.map((incident) => (
          <Incident key={incident.id}>
            <strong>CASO:</strong>
            <p>{incident.title}</p>

            <strong>DESCRIÇÃO:</strong>
            <p>
              {!incident.description ? 'Sem descrição' : incident.description}
            </p>

            <strong>VALOR:</strong>
            <h1>
              {Intl.NumberFormat('PT-BR', {
                style: 'currency',
                currency: 'BRL',
              }).format(incident.value)}
            </h1>

            <button
              onClick={() => handleDeleteIncident(incident.id)}
              type="button"
            >
              <FiTrash2 size={20} color="#a8a8b3" />
            </button>
          </Incident>
        ))}
      </IncidentList>
    </Container>
  );
}
