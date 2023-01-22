import { createContext, useState } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [loading, setLoading] = useState(true);


    return <AppContext.Provider value={{
        loading,
        setLoading
    }}>
        { children }
    </AppContext.Provider>
}

export default AppContext;