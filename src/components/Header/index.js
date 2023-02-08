import styled from "styled-components";
import { Button } from "../Button";
import logo from '../../assets/images/logo.PNG';

export function Header() {
    return (
        <Container>
            <Content>
                <Logo>
                    <img src={logo} alt="logo"/>
                </Logo>
                <HeaderOptions>
                    <Option>
                        Linhas
                    </Option>
                    <Option>
                        Destinos
                    </Option>
                    <Option>
                        Promoções
                    </Option>
                    <LoginButton>
                        <Button 
                            title="Login"
                            color="#132D48"
                            width="100px"
                            height="70%"
                        />
                    </LoginButton>
                </HeaderOptions>
            </Content>
        </Container>
    );
}

const LoginButton = styled.div`
    display: flex;
    align-items: center;
    height: 100%;
    padding: 0 5%;
`;

const Option = styled.div`
    display: flex;
    align-items: center;
    height: 100%;
    padding: 0 5%;
    transition: ease-in 0.2s;

    &:hover{
        color: #FFE442;
        border-bottom: 2px solid #FFE442;
        cursor: pointer;
    }
`;

const HeaderOptions = styled.div`
    display: flex;
    align-items: center;
    justify-content: right;
    width: 100%;
    height: 100%;
`;

const Logo = styled.div`
    width: 150px;
    img {
        width: 100%;
        objecto-fit: contain;
    } 
`;

const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1024px;
    width: 100%;
    height: 100%;
    margin: 0 auto;
`;

const Container = styled.div`
    width: 100%;
    height: 60px;
    border-bottom: 1px solid #5B567B;
    background: #010D42;
`;