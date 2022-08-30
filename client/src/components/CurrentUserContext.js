import { createContext, useEffect, useState } from "react";

export const CurrentUserContext = createContext(null);

export const CurrentUserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [status, setStatus] = useState("loading");

    // Fetch the user data from the API (/api/me/profile)
    // When the data is received, update currentUser.
    // Also, set `status` to `idle`
    useEffect(()=>{
        fetch("/api/me/profile")
        .then((res)=>res.json())
        .then((userData)=>{
            setCurrentUser(userData)
            setStatus("idle");
        });
    }, [])

    return (
        <CurrentUserContext.Provider value={{ currentUser, status }}>
            {children}
        </CurrentUserContext.Provider>
    );
};