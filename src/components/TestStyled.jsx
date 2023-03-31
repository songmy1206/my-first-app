import React from 'react';
import styled, { keyframes } from 'styled-components';
import logo from '../logo.svg';

const imgAnimation = keyframes`
  0%{
    transform: rotate(0deg);
  }
  100%{
    transform: rotate(360deg);
  }
`;

const Link = styled.a`
  color: #61dafb;
`;

const RootDiv = styled.div`
  text-align: center;
`;

const AppHeader = styled.header`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

const AppLogo = styled.img`
  width: 100%;
  height: 100%;
  animation: ${imgAnimation} 20s linear infinite;
`;

export default function TestStyled() {
  return (
    <RootDiv>
      <AppHeader>
        <AppLogo src={logo} alt="app" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Link
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </Link>
      </AppHeader>
    </RootDiv>
  );
}
