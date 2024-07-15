import React from 'react';
import './App.css';
import styled from "styled-components";
import {StyledBtn} from './components/Button.styled';
import {Link} from "./components/Link";

function App() {
    return (
        <div>
            <Box>
                {/*<StyledBtn color={"green"} fontSize={'1.5rem'}>Hello</StyledBtn>*/}
                {/*<StyledBtn color={"yellow"}>Hello</StyledBtn>*/}
                {/*<StyledBtn fontSize={'40px'}>Hello</StyledBtn>*/}

                <StyledBtn btnType={"primary"} active>Hello</StyledBtn>
                <StyledBtn btnType={"outlined"}>Hello</StyledBtn>
                <StyledBtn>Hello</StyledBtn>
            </Box>
        </div>
    );
}

export default App;

const Box = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  gap: 20px;

  button {
    cursor: pointer;
  }

  ${Link} {
    cursor: zoom-in;
  }
  
  @media screen and (max-width: 800px) {
    flex-direction: column;
  }
`

