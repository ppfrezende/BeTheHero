import styled from 'styled-components';
import { darken, lighten } from 'polished';

export const Container = styled.div`
  width: 100%;
  max-width: 1120px;
  height: 100vh;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  width: 100%;
  padding: 96px;
  background: #f0f0f5;
  box-shadow: 0 0 100px rgba(0, 0, 0, 0.15);
  border-radius: 8px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  section {
    width: 100%;
    max-width: 380px;

    a {
      display: flex;
      align-items: center;
      margin-top: 40px;
      color: #41414d;
      font-size: 18px;
      font-weight: bold;
      text-decoration: none;

      &:hover {
        color: ${lighten(0.08, '#41414d')};
      }
    }

    h1 {
      margin: 64px 0 32px;
      font-size: 32px;
    }

    p {
      font-size: 16px;
      color: #737380;
      line-height: 32px;
    }
  }

  form {
    width: 100%;
    max-width: 450px;

    span {
      padding: 5px;
      color: #e02041;
      opacity: 0.6;
      align-self: flex-start;
    }

    input {
      margin-top: 8px;
    }

    button {
      width: 100%;
      height: 60px;
      background: #e02041;
      border-radius: 8px;
      border: 0;
      color: #fff;
      font-size: 18px;
      font-weight: bold;
      margin-top: 16px;
      display: inline-block;
      text-align: center;
      text-decoration: none;
      line-height: 60px;
      transition: background 0.3s;

      &:hover {
        background: ${darken(0.04, '#e02041')};
      }
    }
  }
`;
