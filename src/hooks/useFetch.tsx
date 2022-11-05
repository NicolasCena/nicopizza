import { useEffect, useState } from 'react'

interface Props {
    url: string;
}

export const useFetch = ({ url }: Props) => {

    const [ data, setData ] = useState([]);

    const callApi = () => {
        fetch(url)
            .then( res => res.json())
            .then( dat => setData(dat.data))
            .catch( error => console.log(error))
    };

    useEffect(() => {
        callApi();
    
    }, [url]);
    

    return {
        data
    }
}
