import { useState, useEffect, useContext } from 'react';
import links from '../config/links';

const useFetchEvents = (page, range) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            setError(null);

            try {
                const responses = await Promise.all(
                    Array.from({ length: range / 10 }, (_, i) => i + page).map(pageNum =>
                        fetch(`${links.apiEndpoint}?page=${pageNum}`).then(response => {
                            if (!response.ok) {
                                throw new Error('Network response was not ok');
                            }
                            return response.json();
                        })
                    )
                );
                const combinedData = responses.flatMap(response => response);
                setData(combinedData);
            } catch (error) {
                setError(error);
            } finally {
                setIsLoading(false);
            }
        };
        fetchData();
    }, [page, range]);

    return { data, isLoading, error };
};

export default useFetchEvents;