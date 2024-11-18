import { useEffect, useState } from "react"
import { func, PropTypes } from "prop-types"
import authContext from "../../contexts/authContexts"

export default function AuthProvider(props) {
    const [isAuthenticated, setIsAuthenticated] = useState(false)

    function login() {
        setIsAuthenticated(true)
        localStorage.setItem('isAuthenticated', true)
    }

    useEffect(function () {
        const isAuthenticated = JSON.parse(localStorage.getItem('isAuthenticated'))
        setIsAuthenticated(isAuthenticated)
    }, [])

    return (
        <authContext.Provider value={{ isAuthenticated, login }}>
            {props.children}
        </authContext.Provider>
    )
}

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired
}