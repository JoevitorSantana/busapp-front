import { useEffect, useState } from "react";
import Calendar from 'react-calendar';
// import 'react-calendar/dist/Calendar.css';
import styled from "styled-components";

export function CalendarComponent(props) {
    const [date, setDate] = useState(new Date());
    
    const onChange = date => {
        setDate(date);
        if (props.handleSetDate) {
            props.handleSetDate(date);
        }
    }

    useEffect(() => {
        if (props.handleSetDate) {
            props.handleSetDate(date);
        }
    }, [date, props]);

    return (
        <CalendarContainer>
            <Calendar onChange={onChange} value={date} minDate={new Date()}/>
        </CalendarContainer>
    );
}

const CalendarContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin: auto;
    margin-top: 20px;
    background-color: #333362;
    padding: 10px;
    border-radius: 3px;

    .react-calendar__year-view__months{
        justify-content: center;
    }

    .react-calendar__month-view__weekdays {
        text-align: center;
        
        abbr {
            border-bottom: none !important;
            cursor: inherit !important;
            text-decoration: none !important;
            font-weight: 700;
        }
    }

    .react-calendar__month-view__days__day--neighboringMonth {
        opacity: 0.5;
      }
    .react-calendar__month-view__days__day--weekend {
        color: #dfdfdf;
    }

    .react-calendar__navigation {
        display: flex;
    }

    .react-calendar__navigation__prev2-button, 
    .react-calendar__navigation__next2-button {
        display: none;
    }

    .react-calendar__navigation__label, .react-calendar__navigation__arrow {
        font-size: 20px;
        background-color: transparent !important;
        &:hover {
            color: white !important;
        }
    }

    .react-calendar__month-view__days {
        justify-content: center !important;
    }

    .react-calendar__tile, .react-calendar__month-view__days__day, .react-calendar__month-view__days__day--neighboringMonth {
        flex: 0 0 11% !important;
        overflow: hidden;
        margin: 6px;
    }
    button {
        margin: 4px;
        background-color: #5B567B;
        border: 0;
        border-radius: 3px;
        color: white;
        font-weight: 700;
        padding: 5px 0;

        &:hover {
            background-color: #A7A2A9;
            color: #333362;
        }

        &:active {
            background-color: #A7A2A9;
            color: #333362;
        }

        &:disabled {
            opacity: 0.5;
        }
    }

    .react-calendar__tile--range {
        background-color: #A7A2A9;
        color: #333362;
    }

    .react-calendar__year-view__months, 
    .react-calendar__decade-view__years, 
    .react-calendar__century-view__decades {
        display: grid !important;
        grid-template-columns: 20% 20% 20% 20% 20%;

        &.react-calendar__year-view__months {
        grid-template-columns: 33.3% 33.3% 33.3%;
        }

        .react-calendar__tile {
        max-width: initial !important;
        }
    }
`;