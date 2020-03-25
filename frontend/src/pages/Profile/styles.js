import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  width: 100%;
  max-width: 1180px;
  padding: 0 30px;
  margin: 32px auto;

  header {
    display: flex;
    align-items: center;

    span {
      font-size: 18px;
      margin-left: 24px;
    }

    img {
      height: 64px;
    }

    a {
      width: 260px;
      margin-top: 0;
      margin-left: auto;
      height: 60px;
      background: #e02041;
      border-radius: 8px;
      border: 0;
      color: #fff;
      font-size: 18px;
      font-weight: bold;
      display: inline-block;
      text-align: center;
      text-decoration: none;
      line-height: 60px;
      transition: background 0.3s;

      &:hover {
        background: ${darken(0.04, '#e02041')};
      }
    }

    button {
      height: 60px;
      width: 60px;
      border-radius: 50%;
      border: 1px solid #dcdce6;
      background: transparent;
      margin-left: 16px;
      transition: border-color 0.3s;

      &:hover {
        border-color: #999;
      }
    }
  }

  h1 {
    margin-top: 80px;
    margin-bottom: 24px;
  }
`;

export const IncidentList = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 24px;
  list-style: none;
`;

export const Incident = styled.li`
  background: #fff;
  padding: 24px;
  border-radius: 8px;
  position: relative;

  hr {
    margin-top: 10px;
    border-radius: 1px;
    border: 1px solid #eee;
  }

  button {
    position: absolute;
    right: 24px;
    top: 24px;
    border: 0;

    &:hover {
      opacity: 0.8;
    }
  }

  strong {
    display: block;
    margin-bottom: 8px;
    color: #41414d;
  }

  p {
    color: #737380;
    margin-bottom: 25px;
    line-height: 21px;
    font-size: 16px;
  }

  > h1 {
    font-size: 16px;
    margin: 0 auto;
    font-weight: normal;
    color: #737380;
  }
`;
