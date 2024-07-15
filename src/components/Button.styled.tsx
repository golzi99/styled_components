import styled, {css} from "styled-components";

type StyledBtnPropsType = {
    color?: string,
    fontSize?: string
    btnType?: 'primary' | 'outlined' | 'secondary'
    active?: boolean
}

export const StyledBtn = styled.button<StyledBtnPropsType>`
  border: none;
  background-color: ${props => props.color || '#C962D3FF'};
  padding: 10px 20px;
  color: #6670ce;
  font-size: ${props => props.fontSize || '2rem'};
  font-weight: bold;
  border-radius: 5px;

  ${props => props.btnType === 'outlined' && css<StyledBtnPropsType>`
    //outlined
    border: 2px solid ${props => props.color || 'rosybrown'};
    color: ${props => props.color || '#fb3f76'};
    background-color: transparent;
    
    &:hover {
      border-color: #4053cc;
      color: #4053cc;
      background-color: transparent;
    }
  `}

  ${props => props.btnType === 'primary' && css<StyledBtnPropsType>`
    //primary
    background-color: ${props => props.color || 'rosybrown'};
    color: snow;

    &:hover {
      background-color: #6b36ec;
    }
    
  `}
  
    ${props => props.active && css<StyledBtnPropsType>`
    box-shadow: 2px 2px 2px 2px rgba(37, 37, 44, 0.6);
  `}
`

export const CardButton = styled.button<StyledBtnPropsType>`
  border-radius: 5px;
  border-color: dodgerblue;
  
  ${props => props.btnType === "primary" && css<StyledBtnPropsType>`
    background-color: dodgerblue;
    color: snow;
  `}

  ${props => props.btnType === "secondary" && css<StyledBtnPropsType>`
    background-color: transparent;
    color: dodgerblue;
  `}
`