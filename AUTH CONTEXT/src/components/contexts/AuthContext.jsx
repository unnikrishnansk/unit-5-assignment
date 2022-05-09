import { useState } from "react";
import { createContext } from "react";

const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
    const [IsAuth, setIsAuth] = useState(false);
    const [token, setToken] = useState(null);


    const data = {
        "email": "anannya@res.in",
        "password": "anannya"
    };
    const toggleAuth = () => {
        if (IsAuth) {
            setToken(null);
            setIsAuth(false);
            return;
        }

        fetch("https://reqres.in/api/login", {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(res => res.json())
            .then(data => {
                setIsAuth(true);
                setToken(data.token);
            });
    }

    return <AuthContext.Provider value={{ IsAuth, toggleAuth, token }}>{children}</ AuthContext.Provider>
}

export { AuthContext, AuthContextProvider }