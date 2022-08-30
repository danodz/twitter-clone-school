import { createContext, useEffect, useState } from "react";

export const CurrentUserContext = createContext(null);

export const CurrentUserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [status, setStatus] = useState("loading");

    useEffect(()=>{
        fetch("/api/me/profile")
        .then((res)=>res.json())
        .then((userData)=>{
            setCurrentUser(userData.profile)
            setStatus("idle");
        });
    }, [])

    return (
        <CurrentUserContext.Provider value={{ currentUser, status }}>
            {children}
        </CurrentUserContext.Provider>
    );
};