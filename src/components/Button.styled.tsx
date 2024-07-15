import styled from "styled-components";
import {MyAnimation} from "../styles/animation/Animations";

export const StyledBtn = styled.button`
  border: none;
  background-color: rosybrown;
  padding: 10px 20px;
  color: snow;
  font-size: 2rem;
  font-weight: bold;

  &:last-child {
    background-color: #5ace6b;
  }

  &:hover {
    background-color: #6b36ec;
  }
`

export const SuperButton = styled(StyledBtn)`
  border-radius: 5px;
  background-color: #ceb82e;
  color: grey;
  
  &:hover {
    animation: ${MyAnimation} 2s ease-in-out;
  }
`