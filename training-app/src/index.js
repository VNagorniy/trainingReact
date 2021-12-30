import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import styled from 'styled-components';
import { Button } from './App';

const BigButton = styled(Button)`
  margin: 0 auto;
  width: 245px;
  text-align: center;
`;

ReactDOM.render(
  <StrictMode>
    <App />
    <BigButton as='a'>Отправить отчёт</BigButton>
  </StrictMode>,
  document.getElementById('root')
);
