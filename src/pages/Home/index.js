import { useState } from "react";
import styled from "styled-components";
import { Button } from "../../components/Button";
import { CalendarComponent } from "../../components/Calendar";
import { DestinationInput } from "../../components/DestinationInput";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";

export function Home() {
    const [fromCity, setFromCity] = useState(null);
    const [destinationCity, setDestinationCity] = useState(null);
    const [date, setDate] = useState(null);

    const handleSetFromCity = (city) => {
        setFromCity(city);
    };

    const handleSetDestinationCity = (city) => {
        setDestinationCity(city);
    };

    const handleSetDate = (date) => {
        setDate(formatDate(date));
    };

    function formatDate(date) {
        const year = new Date(date).getFullYear();
        const month = new Date(date).getMonth() + 1;
        const day = new Date(date).getDate();
        
        return (year + '-' + (month < 10 ? '0' + month : month) + '-' + (day < 10 ? '0' + day : day));
    }

    console.log({
        from: fromCity,
        destinationCity: destinationCity,
        date: formatDate(date),
    });

    // fetch(`http://localhost:3333/travels/${fromCity}/${destinationCity}?date=${date}`)
    //     .then((response) => response.json())
    //     .then((data) => console.log(data));

    return(
        <>
            <Header />
            <Container>
                <Content>
                    <InitialTitle>
                        <Banner>
                            <BannerImage src=""/>
                        </Banner>
                    </InitialTitle>
                    <MainSection>
                        <FormContainer>
                            <Form>
                                <FormContent>
                                    <Title>
                                        Para onde você deseja ir?
                                    </Title>
                                    <Inputs>
                                        <Input setFromCity={handleSetFromCity}/>
                                        <DestinationInput setDestinationCity={handleSetDestinationCity}/>
                                        <Calendar>
                                            <CalendarComponent handleSetDate={handleSetDate}/>
                                        </Calendar>
                                        <Submit>
                                            <Button 
                                                title="Buscar"
                                                color="#132D48"
                                                width="100%"
                                                height="60px"
                                            />
                                        </Submit>
                                    </Inputs>
                                </FormContent>
                            </Form>
                        </FormContainer>
                        <Promotions>
                        </Promotions>
                    </MainSection>
                </Content>
            </Container>
        </>
    );
}

const Promotions = styled.div``;

const Calendar = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin: 10px 0;
`;

const Submit = styled.div`
    margin-top: 10px;
`;

const Inputs = styled.div`
    padding-top: 10px;
`;

const Title = styled.div`
    font-weight: 700;
    font-size: 25px; 
`;

const FormContent = styled.div`
    height: 100%;
    margin: 30px;
    padding-top: 30px;
`;

const Form = styled.div`
    background: #5B567B;
    margin: 20px;
    height: 700px;
    border-radius: 10px;
`;

const FormContainer = styled.div`
    width: 50%;
`;

const MainSection = styled.div`
    width: 100%;
`;

const BannerImage = styled.img`
    width: 100%;
    object-fit: contain;
`;

const Banner = styled.div`
    width: 100%;
    margin: 20px;
    background: #5B567B;
    border-radius: 10px;
`;

const InitialTitle = styled.div`
    width: 100%;
    height: 200px;
    display: flex;
    justify-content: center;
    display: none;
`;

const Content = styled.div`
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
`;

const Container = styled.div`
    width: 100%;
`;