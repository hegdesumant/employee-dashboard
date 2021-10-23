import React, { useState } from 'react'
import { validateEmailId, validatePassword } from '../utils/commonFunctions'
import { setLoginInfoRedux } from '../redux/actions/actions'
import { useDispatch } from 'react-redux'
import { validUser } from '../static/staticData'

const UserLoginForm = () => {
    const dispatch = useDispatch()
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const [errorMessage, setErrorMessage] = useState({ userName: false, password: false })
    const [invalidUserName, setInvalidUserName] = useState(false)

    const formSubmit = (e) => {
        e.preventDefault()
        const isEmailValid = validateEmailId(userName)
        const isPasswordValid = validatePassword(password)
        if ((isEmailValid === true) && (isPasswordValid === true)) {
            if ((userName === validUser.username) && (password === validUser.password)) {
                dispatch(setLoginInfoRedux(true))
                window.localStorage.setItem('isUserActive', true)
            } else {
                setInvalidUserName("Invalid Username / Password")
            }

        }
        if (!isEmailValid) {
            setErrorMessage(preState => ({ ...preState, userName: "invalid Email Address" }))
        }else if(isEmailValid){
            setErrorMessage(preState => ({ ...preState, userName: false }))
        }
        if (isPasswordValid !== true) {
            setErrorMessage(preState => ({ ...preState, password: isPasswordValid }))
        }else if(isPasswordValid){
            setErrorMessage(preState => ({ ...preState, password: false }))
        }

    }
    return (
        <div className="login-form">
            <form className="centered-form border" onSubmit={formSubmit}>
                <div className="p1">Login to see Employee Data</div>
                <div className="container">
                    <label htmlFor="uname"><b>Username</b></label>
                    <input className="border" onChange={(e) => setUserName(e.target.value)} type="text" placeholder="Enter Username" name="uname" required />
                    {errorMessage.userName && <p className="text-red p1">{errorMessage.userName}</p>}
                    <label htmlFor="psw"><b>Password</b></label>
                    <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Enter Password" name="psw" required />
                    {errorMessage.password && <p className="text-red p1">{errorMessage.password}</p>}
                    <button className="button" type="submit">Login</button>
                    {invalidUserName && <p className="text-red p1">{invalidUserName}</p>}
                </div>
            </form>
        </div>
    );
}

export default UserLoginForm;