import React from 'react';
import { Linking } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Image, TouchableOpacity } from 'react-native';

import * as MailComposer from 'expo-mail-composer';

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
  const message =
    'Olá APAE, estou entrando em contato pois gostaria de ajudar no caso "Cão Atropelado" no valor de R$ 120,00';

  function navigateBack() {
    navigation.goBack();
  }

  function sendMail() {
    MailComposer.composeAsync({
      subject: 'Herói do caso: Cão Atropelado',
      recipients: ['rezendefellipe9@gmail.com'],
      body: message,
    });
  }

  function sendWhatsapp() {
    Linking.openURL(`whatsapp://send?phone=5521976605854&text=${message}`);
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
          <HandleButton onPress={sendWhatsapp}>
            <HandleButtonText>WhatsApp</HandleButtonText>
          </HandleButton>

          <HandleButton onPress={sendMail}>
            <HandleButtonText>E-mail</HandleButtonText>
          </HandleButton>
        </Actions>
      </ContactBox>
    </Container>
  );
}
