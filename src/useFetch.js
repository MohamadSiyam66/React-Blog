import { useState, useEffect } from "react";

const useFetch = () => {
    const [data, setData] = useState(null);
    // const [name, setName] = useState("siyam");
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setTimeout(() => {
                fetch("http://localhost:8000/blogs")
            .then(response => {
                if(!response.ok){
                    throw Error('Could not fetch the data for that resource...');
                }
                return response.json();
            })
            .then(data => {
                setBlogs(data)
                setIsLoading(false)
            })
            .catch(err => {
                setIsLoading(false);
                setError(err.message);
            })
        },1000)
    },[]);
}

export default useFetch