import styled from "styled-components";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { CitiesSelect } from "../CitiesSelect";

export function Input(props){
    const { setFromCity } = props;
    return(
        <InputArea>
            <InputContainer>
                <LocationOnIcon color="#5B567B"/>
                <CitiesSelect setFromCity={setFromCity} placeholder="Partida"/>
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
`;