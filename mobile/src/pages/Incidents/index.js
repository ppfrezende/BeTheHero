import React from 'react';
import { Feather } from '@expo/vector-icons';
import { Image, FlatList } from 'react-native';

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
  return (
    <Container>
      <Header>
        <Image source={logoImg} />
        <HeaderText>
          Total de <HeaderTextBold>0 casos</HeaderTextBold>
        </HeaderText>
      </Header>

      <Title>Bem-vindo!</Title>
      <Description>Escolha um dos casos abaixo e salve o dia!</Description>

      <IncidentList>
        <FlatList
          data={[1, 2, 3]}
          keyExtractor={incident => String(incident)}
          showsVerticalScrollIndicator={false}
          renderItem={() => (
            <Incident>
              <IncidentText>ONG:</IncidentText>
              <IncidentValue>APAE</IncidentValue>

              <IncidentText>CASO:</IncidentText>
              <IncidentValue>Cadelinha atropelada</IncidentValue>

              <IncidentText>VALOR:</IncidentText>
              <IncidentValue>R$ 120,00</IncidentValue>

              <DetailsButton onPress={() => {}}>
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
