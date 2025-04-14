import { createContext, useState } from "react";

export const ApiContext = createContext(null);

const AppContext = ({children}) => {

    const [user, setUser] = useState(null)

    const name = {
        setUser,
        user
    }

    return (
        <ApiContext.Provider value={name}>
            {
                children
            }
        </ApiContext.Provider>
    );
};

export default AppContext;