import { useState, useEffect, useContext, createContext } from 'react';
import axios from 'axios';
const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    const [auth, setAuth] = useState({
        user: null,
        token: ""
    })

    axios.defaults.headers.common['Authorization'] = auth?.token;

    useEffect(() => {
        console.log("AuthProvider Called");
        const data = localStorage.getItem("auth");
        if (data) {
            const parseData = JSON.parse(data);
            setAuth({
                ...auth,
                user: parseData.user,
                token: parseData.token,
            })
        }
    }, []);

    return (
        <AuthContext.Provider value={[auth, setAuth]}>
            {children}
        </AuthContext.Provider>
    )
}

const useAuth = () => {
    console.log("useAuth Called");
    return useContext(AuthContext)
};

export { useAuth, AuthProvider };