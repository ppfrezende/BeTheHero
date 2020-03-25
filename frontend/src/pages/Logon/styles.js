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

export const Content = styled.section`
  width: 100%;
  max-width: 350px;
  margin-right: 30px;

  form {
    margin-top: 100px;

    h1 {
      font-size: 32px;
      margin-bottom: 32px;
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
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.04, '#e02041')};
      }
    }

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

      svg {
        margin-right: 10px;
      }
    }
  }
`;
