import { useState, useEffect } from 'react';

export const useFetch = (path) => {
    const [data, setData] = useState([]);
    const [isLoaded, setIsLoaded] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(`https://scachkov-starlader.firebaseio.com${path}.json`)
            .then(res => res.json())
            .then(res => {
                setIsLoaded(true)
                setData(res)
            })
            .catch(error => {
                setError(error)
            });
    }, []);

    return {
        data,
        isLoaded,
        error
    }
}