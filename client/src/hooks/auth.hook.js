import { useCallback, useEffect, useState } from "react";

const storageName = 'sberbankUserToken'

export const useAuth = () => {
    const [token, setToken] = useState(null)
    const [ready, setReady] = useState(false)
    const [userId, setUserId] = useState(null)

    const login = useCallback((jwtToken, id) => {
        setToken(jwtToken)
        setUserId(id)

        // console.log('id', id)
        //
        // console.log(JSON.stringify({userId: id, token: jwtToken}))

        localStorage.setItem(storageName, JSON.stringify({userId: id, token: jwtToken}))
    }, [])


    const logout = useCallback(() => {
        setToken(null)
        setUserId(null)
        localStorage.removeItem(storageName)
    }, [])

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem(storageName))

        console.log(data)

        if (data && data.token) {
            console.log('login', data.token)
            login(data.token, data.userId)
        }
        setReady(true)
    }, [login])


    return { login, logout, token, userId, ready }
}