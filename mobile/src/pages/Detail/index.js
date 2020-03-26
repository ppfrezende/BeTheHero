import React from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Image, TouchableOpacity } from 'react-native';

import logoImg from '../../assets/logo.png';

import {
  Container,
  Header,
  Incident,
  IncidentText,
  IncidentValue,
  ContactBox,
  HeroTitle,
  HeroDescription,
  Actions,
  HandleButton,
  HandleButtonText,
} from './styles';

export default function Detail() {
  const navigation = useNavigation();

  function navigateBack() {
    navigation.goBack();
  }

  return (
    <Container>
      <Header>
        <Image source={logoImg} />
        <TouchableOpacity onPress={navigateBack}>
          <Feather name="arrow-left" size={28} color="#e02041" />
        </TouchableOpacity>
      </Header>

      <Incident>
        <IncidentText>ONG:</IncidentText>
        <IncidentValue>APAE</IncidentValue>

        <IncidentText>CASO:</IncidentText>
        <IncidentValue>Cadelinha atropelada</IncidentValue>

        <IncidentText>VALOR:</IncidentText>
        <IncidentValue>R$ 120,00</IncidentValue>
      </Incident>

      <ContactBox>
        <HeroTitle>Salve o dia!</HeroTitle>
        <HeroTitle>Seja o herói desse caso.</HeroTitle>

        <HeroDescription>Entre em contato</HeroDescription>

        <Actions>
          <HandleButton onPress={() => {}}>
            <HandleButtonText>WhatsApp</HandleButtonText>
          </HandleButton>

          <HandleButton onPress={() => {}}>
            <HandleButtonText>E-mail</HandleButtonText>
          </HandleButton>
        </Actions>
      </ContactBox>
    </Container>
  );
}
