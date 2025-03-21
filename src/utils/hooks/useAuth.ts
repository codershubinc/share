import { useState, useEffect } from "react"
import Auth from "../codershubinc/auth.util"

const useAuth = () => {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [user, setUser] = useState<any>()
    const [isLogin, setIsLogin] = useState(false)

    useEffect(() => {
        const fetchUser = async () => {
            try {
                setLoading(true)
                setError(false)

                const userFetch = await Auth.getUser()
                console.log("User fetched:", userFetch)
                if (userFetch) {
                    setUser(userFetch)
                    setIsLogin(true)
                } else {
                    setError(true)
                }
            } catch (err) {
                console.error("Auth Error:", err)
                setError(true)
            } finally {
                setLoading(false)
            }
        }

        fetchUser()
    }, [])

    return { user, loading, error, isLogin }
}

export default useAuth
