import { createGlobalStyle } from 'styled-components';
import { lighten, darken } from 'polished';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Baloo+2:400,500&display=swap');

  * {
    padding: 0;
    margin: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    font: 400 14px 'Baloo 2', sans-serif;
    background: #f0f0f5;
    -webkit-font-smoothing: antialiased;
  }

  button {
    cursor: pointer;
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

  form input {
    width: 100%;
    height: 60px;
    color: #333;
    border: 1px solid #dcdce6;
    border-radius: 8px;
    padding: 0 24px;
    font-size: 12px;
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
`;
