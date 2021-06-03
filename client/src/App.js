import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { AuthContext } from "./context/AuthContext";
import { useAuth } from "./hooks/auth.hook";
import { useRoutes } from "./routes/routes";

function App() {
    const {login, logout, token, userId, ready} = useAuth()
    const isAuthenticated = !!token
    console.log(isAuthenticated)
    const routes = useRoutes(isAuthenticated)

    return (
        <AuthContext.Provider value={{login, logout, token, userId, isAuthenticated, ready}}>
            <div className="App">
                <BrowserRouter>
                    {routes}
                </BrowserRouter>
            </div>
        </AuthContext.Provider>
    );
}

export default App;
