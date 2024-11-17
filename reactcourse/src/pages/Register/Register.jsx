import './Register.css'
import Input from "../../components/Input/Input"
import { useState } from 'react'

function RegisterPage() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    function onEmailChangeHandler(event) {
        setEmail(event.target.value)
    }

    function onPasswordChangeHandler(event) {
        setPassword(event.target.value)
    }

    function onConfirmPasswordHandler(event) {
        setConfirmPassword(event.target.value)
    }

    function onSubmitHandler(event) {
        event.preventDefault()
        console.log (email)
        console.log (password)
        console.log (confirmPassword)
    }


    return (
        <div className='register-container' onSubmit={onSubmitHandler}>
            <form className='register-form'>
                
                <Input label="Email" 
                inputValue={email} 
                onChange={onEmailChangeHandler} />
                
                <Input label="Senha" 
                inputValue={password} 
                onChange={onPasswordChangeHandler} />
                
                <Input label="Confimar Senha" 
                inputValue={confirmPassword} 
                onChange={onConfirmPasswordHandler} />
                
                <button type='Submit'>Cadastrar</button>
            </form>
        </div>
    )
}

export default RegisterPage