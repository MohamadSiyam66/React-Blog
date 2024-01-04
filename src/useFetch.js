import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setTimeout(() => {
                fetch(url)
            .then(response => {
                if(!response.ok){
                    throw Error('Could not fetch the data for that resource...');
                }
                return response.json();
            })
            .then(data => {
                setData(data)
                setIsLoading(false)
            })
            .catch(err => {
                setIsLoading(false);
                setError(err.message);
            })
        },1000)

        return () => console.log('cleanup');
    },[url]);

    return { data, isLoading, error }
}

export default useFetch