import styled from "styled-components";
import { CardButton } from "./Button.styled";


export const Card = () => {
    return (
        <div>
            <CardBack>
                <img alt={"img"} src={'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Libya_4608_Idehan_Ubari_Dunes_Luca_Galuzzi_2007.jpg/1200px-Libya_4608_Idehan_Ubari_Dunes_Luca_Galuzzi_2007.jpg'}/>
                <h2>Headline</h2>
                <CardDescription>
                    Feucibus. Feucibus. Sit sit saoien sit tempusrisu ut. Sit molesite ornare in venen.
                </CardDescription>
                <CardButton btnType={"primary"}>See More</CardButton>
                <CardButton btnType={"secondary"}>Save</CardButton>
            </CardBack>
        </div>
    )
}

const CardBack = styled.div`
  background-color: aliceblue;
  border-radius: 1.5rem;
  width: 25rem;
  height: 30rem;
  
  img {
    padding: 10px;
    width: 25rem;
    height: 15rem;
    border-radius: 1.5rem;
  }
  
  h2 {
    padding: 15px;
  }
  
  button {
    margin: 15px;
    font-weight: bold;
    height: 2.5rem;
    width: 6rem;
  }
`

const CardDescription = styled.div`
  color: #939393;
  padding: 15px;
  font-size: large;
  font-weight: 500;
`
