import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import authContext from "../../contexts/authContexts"
import "./LoginForm.css"

function LoginForm() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const context = useContext(authContext)
    const navigate = useNavigate()

    function onEmailChangeHandler(event) {
        setEmail(event.target.value)
    }

    function onPasswordChangeHandler(event) {
        setPassword(event.target.value)
    }

    function isInputValid() {
        if (!email || !password) return false
        return true
    }

    function onSubmitHandler(event) {
        event.preventDefault()
        if (isInputValid()) {
            console.log("Seu email é: ", email)
            console.log("Sua senha é: ", password)
            context.setIsAuthenticated(true)
            localStorage.setItem('isAuthenticated', true)
            navigate('/')
        } else {
            console.log('Campos Inválidos')
        }


    }

    return (
        <form className="container" onSubmit={onSubmitHandler}>
            <div className="input-container">
                <label htmlFor="email">Email</label>
                <input type="text" id="email" placeholder="Email" onChange={onEmailChangeHandler} />
                {email}

            </div>
            <div className="input-container">
                <label htmlFor="senha">Senha</label>
                <input type="password" id="senha" placeholder="Senha" onChange={onPasswordChangeHandler} />
                {password}
            </div>
            <button type="submit">Login</button>
        </form>
    )
}

export default LoginForm