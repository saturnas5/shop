import React, {useState} from "react";
import Input from "../../components/Input";

const Login = () => {
    const [name, setName] =  useState('')
    const [email, setEmail] =  useState('')
    const [password, setPassword] =  useState('')
    const [passwordRpt, setPasswordRpt] =  useState('')

    const handleLoginSubmit = (e) => {
        e.preventDefault();
    }

    const handleRegisterSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <div className="login">
            <div className="login__login">
                <h3 className="login__login-title heading-3">Login</h3>
                <span className="login__login-text">Sign In with your account</span>
                <form className="login__login-form" onSubmit={handleLoginSubmit}>
                    <Input value={email} onInputChange={setEmail} type='email' placeholder='Email' name='Email'/>
                    <Input value={password} onInputChange={setPassword} type='password' placeholder='Password' name='Password'/>
                    <input className='btn' type="submit" value='Login'/>
                </form>
            </div>
            <div className="login__register">
                <h3 className="register__title heading-3">Register</h3>
                <span className="login__login-text">Don't have an account? Sign Up Now</span>
                <form className="register__form" onSubmit={handleRegisterSubmit}>
                    <Input value={name} onInputChange={setName} type='text' placeholder='Name' name='Name'/>
                    <Input value={email} onInputChange={setEmail} type='email' placeholder='Email' name='Email'/>
                    <Input value={password} onInputChange={setPassword} type='password' placeholder='Password' name='Password'/>
                    <Input value={passwordRpt} onInputChange={setPasswordRpt} type='password' placeholder='Repeat password' name='Repeat password'/>
                    <input className='btn' type="submit" value='Register'/>
                </form>
            </div>
        </div>
    )
}

export default Login;