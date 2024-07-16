import React from 'react';
import './App.css';
import styled from "styled-components";
import {myTheme} from "./styles/Theme.styled";
import {Card} from "./components/Card";

function App() {
    return (
        <div>
            <Box>
                <Card></Card>
                <Card></Card>
                <Card></Card>
            </Box>
        </div>
    );
}

export default App;

const Box = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  gap: 30px;
  
  @media ${myTheme.media.tablet} {
    flex-direction: column;
  }
`

