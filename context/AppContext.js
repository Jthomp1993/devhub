import { createContext, useState } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [formErr, setFormErr] = useState(false);
    const [results, setResults] = useState([]);
    const [formData, setFormData] = useState({
        name: '',
        language: '',
        location: ''
    });

    const fetchData = async () => {
        if(formData.name === '') {
            const response = await fetch(`https://api.github.com/search/users?q=language:${formData.language}+location:${formData.location}`);
            const data = await response.json();
            setResults(data.items);
        } else {
            const response = await fetch(`https://api.github.com/search/users?q=${formData.name}+language:${formData.language}+location:${formData.location}`);
            const data = await response.json();
            setResults(data.items);
        }
    }


    return <AppContext.Provider value={{
        loading,
        setLoading,
        formData,
        setFormData,
        results,
        setResults,
        formErr,
        setFormErr,

        fetchData
    }}>
        { children }
    </AppContext.Provider>
}

export default AppContext;