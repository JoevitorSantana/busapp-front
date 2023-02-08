import { useEffect, useState } from "react";

export function useCities(){
    const [cities, setCities] = useState([]);
    useEffect(() => {
        fetch('http://localhost:3333/cities/list')
            .then((response) => response.json())
            .then((data) => setCities(data));
    }, []);
    
    return {
        cities
    };
};