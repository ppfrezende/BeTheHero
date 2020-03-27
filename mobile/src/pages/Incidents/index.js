import React, { useState, useEffect } from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Image, FlatList } from 'react-native';

import api from '../../services/api';

import logoImg from '../../assets/logo.png';

import {
  Container,
  Header,
  HeaderText,
  HeaderTextBold,
  Title,
  Description,
  IncidentList,
  Incident,
  IncidentText,
  IncidentValue,
  DetailsButton,
  DetailsButtonText,
} from './styles';

export default function Incidents() {
  const [incidents, setIncidents] = useState([]);
  const [totalIncidents, setTotalIncidents] = useState(0);

  const navigation = useNavigation();

  function navigateToDetail(incident) {
    navigation.navigate('Detail', { incident });
  }

  async function loadIncidents() {
    const response = await api.get('incidents');

    setIncidents(response.data);
    setTotalIncidents(response.headers['x-total-count']);
  }

  useEffect(() => {
    loadIncidents();
  }, []);

  return (
    <Container>
      <Header>
        <Image source={logoImg} />
        <HeaderText>
          Total de <HeaderTextBold>{totalIncidents} casos</HeaderTextBold>
        </HeaderText>
      </Header>

      <Title>Bem-vindo!</Title>
      <Description>Escolha um dos casos abaixo e salve o dia!</Description>

      <IncidentList>
        <FlatList
          data={incidents}
          keyExtractor={(incident) => String(incident.id)}
          showsVerticalScrollIndicator={false}
          renderItem={({ item: incident }) => (
            <Incident>
              <IncidentText>ONG:</IncidentText>
              <IncidentValue>{incident.name}</IncidentValue>

              <IncidentText>CASO:</IncidentText>
              <IncidentValue>{incident.title}</IncidentValue>

              <IncidentText>VALOR:</IncidentText>
              <IncidentValue>
                {Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                }).format(incident.value)}
              </IncidentValue>

              <DetailsButton onPress={() => navigateToDetail(incident)}>
                <DetailsButtonText>Ver mais detalhes</DetailsButtonText>
                <Feather name="arrow-right" size={16} color="#e02041" />
              </DetailsButton>
            </Incident>
          )}
        />
      </IncidentList>
    </Container>
  );
}
