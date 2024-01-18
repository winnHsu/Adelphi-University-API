import React, { createContext, useState, useEffect } from 'react';

export const TotalPagesContext = createContext();

export const TotalPagesProvider = ({ apiEndpoint, children }) => {
    const [totalPages, setTotalPages] = useState(117);

    const findTotalPages = async (apiEndpoint, startingPage = 117, maxAttempts = 200) => {
        let currentPage = startingPage;
        let step = 1;
        while (currentPage >= 1 && currentPage <= maxAttempts) {
            try {
                const response = await fetch(`${apiEndpoint}?page=${currentPage}`);
                if (response.ok) {
                    if (step === -1) {
                        break;
                    }
                    currentPage += step;
                } else {
                    if (step === 1) {
                        step = -1;
                        currentPage--;
                    } else {
                        currentPage += step;
                    }
                }
                setTotalPages(currentPage);
            } catch (error) {
                console.error("Error occurred: ", error);
                break;
            }
        }
    };

    useEffect(() => {
        findTotalPages(apiEndpoint);
    }, [apiEndpoint]);

    return (
        <TotalPagesContext.Provider value={totalPages}>
            {children}
        </TotalPagesContext.Provider>
    );
};