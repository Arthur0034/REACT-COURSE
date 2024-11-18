import { useState } from "react"
import { func, PropTypes } from "prop-types"
import authContext from "../../contexts/authContexts"

export default function AuthProvider(props) {
    const [isAuthenticated, setIsAuthenticated] = useState(false)

    useEffect(function() {
        const isauthenticated = JSON.parse(localStorage.getItem('isAuthenticated'))
        setIsAuthenticated(isAuthenticated)
    }, [])

    return (
        <authContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
            {props.children}
        </authContext.Provider>
    )
}

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired
}