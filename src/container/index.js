import React, { useState, useEffect } from 'react'
import './styles/styles.css'
import UserLoginForm from './components/loginForm'
import EmployeeDashoard from './components/userDashboard'
import { setLoginInfoRedux } from './redux/actions/actions'
import { useSelector, useDispatch } from 'react-redux'

const Main = () => {
    const dispatch = useDispatch()
    const [showDashboard, setShowDashboard] = useState(false)
    const [showLoginForm, setShowLoginForm] = useState(false)
    const state = useSelector(state => state.isUserActive)

    useEffect(() => {
        if (state === undefined) {
            const loginInfo = JSON.parse(window.localStorage.getItem('isUserActive'))
            if (loginInfo === true) {
                dispatch(setLoginInfoRedux(true))
            } else {
                dispatch(setLoginInfoRedux(false))
            }
        }

        if (state === false) {
            setShowDashboard(false)
            setShowLoginForm(true)
        }

        if (state === true) {
            setShowLoginForm(false)
            setShowDashboard(true)
        }

    }, [state, dispatch])


    return (
        <div>
            {showLoginForm && <UserLoginForm />}
            {showDashboard && <EmployeeDashoard />}
        </div>
    );
}

export default Main;