import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

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

  textarea {
    width: 100%;
    resize: vertical;
    margin-top: 8px;
    min-height: 140px;
    color: #333;
    border: 1px solid #dcdce6;
    border-radius: 8px;
    padding: 16px 24px;
    font-size: 12px;
    line-height: 24px;
  }
`;
