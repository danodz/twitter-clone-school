import { createContext } from "react";
import useFetch from "../hooks/useFetch";

export const CurrentUserContext = createContext(null);

export const CurrentUserProvider = ({ children }) => {
    const [currentUser, currentUserLoadingStatus] = useFetch("/api/me/profile");
    
    return (
        <CurrentUserContext.Provider value={{ currentUser, currentUserLoadingStatus }}>
            {children}
        </CurrentUserContext.Provider>
    );
};