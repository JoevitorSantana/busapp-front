import { useState } from 'react';
import Select from 'react-select';
import { useCities } from '../../hooks/useCidades';

export function CitiesSelect(props) {

    const {placeholder} = props;

    const { cities } = useCities();

    const [ selectedCity, setSelectedCity ] = useState(null);

    const handleSetSelectedCity = (event) => {
        setSelectedCity(event.value);
        if (props.setFromCity) {
            props.setFromCity(event.value);
        }
        if (props.setDestinationCity) {
            props.setDestinationCity(event.value);
        }
    }

    const options = cities.map(city => ({
        value: city.city_id,
        label: `${city.city_name}-${city.city_state}`
    }));

    const colorStyles = {
        control: (styles, state) => ({
            ...styles,
            backgroundColor: '#333362',
            color: "#D9D9D9",
            border: 'none',
            width: '370px',
            boxShadow: 'none'
        }),
        option: (styles, {data, isDisabled, isFocused, isSelected}) => {
            return {
                ...styles,
                backgroundColor: isDisabled
                ? '#333362'
                : isSelected
                ? "#010D42"
                : isFocused
                ? '#010D42'
                :  '#333362'
            }
        },
        input: (styles) => ({ ...styles, color: '#D9D9D9', border: 'none'}),
        placeholder: (styles) => ({ ...styles }),
        singleValue: (styles, { data }) => ({ ...styles, color: '#D9D9D9', border: 'none' }),
        menuList: (base) => ({
            ...base,
        
            "::-webkit-scrollbar": {
              width: "4px",
              height: "0px",
            },
            "::-webkit-scrollbar-track": {
              background: "#333362"
            },
            "::-webkit-scrollbar-thumb": {
              background: "#010D42"
            },
            "::-webkit-scrollbar-thumb:hover": {
              background: "#555"
            }
        }),
        menu: (base) => ({
            ...base,
            backgroundColor: '#333362',
        })
    };

    const selectedOptionCity = options.find((e) => e.value === selectedCity);

    return (
        <Select 
            options={options}
            value={selectedOptionCity}
            styles={colorStyles}
            placeholder={placeholder}
            components={{ DropdownIndicator:() => null, IndicatorSeparator:() => null }}
            onChange={handleSetSelectedCity}
        />
    );
}