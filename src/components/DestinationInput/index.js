import styled from "styled-components";
import { CitiesSelect } from "../CitiesSelect";
import AssistantPhotoIcon from '@mui/icons-material/AssistantPhoto';

export function DestinationInput(props){
    return(
        <InputArea>
            <InputContainer>
                <AssistantPhotoIcon color="#5B567B"/>
                <CitiesSelect setDestinationCity={props.setDestinationCity} placeholder="Destino"/>
            </InputContainer>
        </InputArea>
    );
}

// const InputType = styled.input`
//     background: none;
//     border: none;
//     color: #D9D9D9;
//     margin-left: 10px; 
//     width: 100%;

//     ::placeholder,
//     ::-webkit-input-placeholder {
//         color: #D9D9D9;
//     }
//     :-ms-input-placeholder {
//         color: #D9D9D9;
//     }
// `;

const InputContainer = styled.div`
    margin: 10px;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
`;

const InputArea = styled.div`
    width: 100%;
    background: #333362;
    max-height: 60px;
    display: flex;
    align-items: center;
    border-radius: 5px;
    margin-top: 10px;
`;