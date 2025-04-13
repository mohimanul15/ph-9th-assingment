import { createContext } from "react";

export const ApiContext = createContext(null);

const AppContext = ({children}) => {

    const name = {
        test: "this is test context"
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